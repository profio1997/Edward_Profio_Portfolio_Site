#!/usr/bin/env python3
"""Fetch real book covers and a snapshot of public GitHub data, so the site can serve them
as local files (no dependence on visitors' browsers reaching third-party hosts).

  - Covers: for every `isbn:` in _books/*.md, saves assets/img/book_covers/isbn-<ISBN>.jpg
    (Open Library -> Google Books -> Amazon). Placeholder/blank images are rejected.
  - GitHub: writes _data/github_cache.json (profile + public, non-fork, non-archived repos).
Needs Pillow. Run on a machine with normal internet access (e.g. a GitHub Actions runner).
"""
import glob, io, json, os, re, sys, time, urllib.error, urllib.parse, urllib.request
from datetime import datetime, timezone
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COVERS = os.path.join(ROOT, 'assets', 'img', 'book_covers')
OWNER = os.environ.get('GH_OWNER', 'profio1997')
UA = {'User-Agent': 'portfolio-site-refresh/1.0'}

def get(url, headers=None, timeout=30):
    req = urllib.request.Request(url, headers={**UA, **(headers or {})})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read(), r.headers.get('Content-Type', '')
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < 3:          # rate limited: back off and retry
                time.sleep(4 * (attempt + 1)); continue
            raise

def isbn13_to_10(i13):
    if len(i13) != 13 or not i13.startswith('978'):
        return None
    core = i13[3:12]
    s = sum((10 - k) * int(c) for k, c in enumerate(core))
    chk = (11 - s % 11) % 11
    return core + ('X' if chk == 10 else str(chk))

def valid_cover(data):
    try:
        im = Image.open(io.BytesIO(data)); im.load()
    except Exception:
        return None
    w, h = im.size
    if w < 150 or h < 220 or not (1.2 <= h / w <= 1.9):      # rejects 1x1 / "no image" placeholders
        return None
    im = im.convert('RGB')
    if w > 420:
        im = im.resize((420, int(h * 420 / w)), Image.LANCZOS)
    return im

def google_books_url(isbn):
    data, _ = get('https://www.googleapis.com/books/v1/volumes?q=isbn:%s&maxResults=1' % isbn)
    items = json.loads(data).get('items') or []
    links = (items[0].get('volumeInfo', {}).get('imageLinks') if items else None) or {}
    for k in ('extraLarge', 'large', 'medium', 'small', 'thumbnail'):
        if links.get(k):
            u = links[k].replace('http://', 'https://').replace('&edge=curl', '')
            return re.sub(r'zoom=\d', 'zoom=0', u) if 'zoom=' in u else u
    return None

def fetch_cover(isbn):
    sources = [('openlibrary', lambda: 'https://covers.openlibrary.org/b/isbn/%s-L.jpg?default=false' % isbn),
               ('googlebooks', lambda: google_books_url(isbn))]
    i10 = isbn13_to_10(isbn)
    if i10:
        sources.append(('amazon', lambda: 'https://images-na.ssl-images-amazon.com/images/P/%s.01.LZZZZZZZ.jpg' % i10))
    for name, urlf in sources:
        try:
            url = urlf()
            if not url:
                continue
            data, ctype = get(url)
            im = valid_cover(data)
            if im:
                return name, im
        except Exception as e:
            print('   %s failed: %s' % (name, str(e)[:80]))
        time.sleep(0.4)
    return None, None

STOP = {'the', 'and', 'for', 'with', 'how', 'from', 'that', 'this', 'your', 'a', 'of', 'to', 'in', 'on'}

def words(t):
    return {w for w in re.findall(r"[a-z0-9]+", t.lower()) if len(w) > 2 and w not in STOP}

def title_ok(isbn, want):
    """True/False if the ISBN's catalogued title matches the book; None if it cannot be looked up."""
    main = want.split(':')[0]
    got = None
    try:
        got = json.loads(get('https://openlibrary.org/isbn/%s.json' % isbn)[0]).get('title')
    except Exception:
        pass
    if not got:
        try:
            items = json.loads(get('https://www.googleapis.com/books/v1/volumes?q=isbn:%s&maxResults=1' % isbn)[0]).get('items') or []
            got = items[0]['volumeInfo'].get('title') if items else None
        except Exception:
            pass
    if not got:
        return None
    return bool(words(main) & words(got))

def covers():
    os.makedirs(COVERS, exist_ok=True)
    books = []
    for f in sorted(glob.glob(os.path.join(ROOT, '_books', '*.md'))):
        head = open(f, encoding='utf-8').read().split('---')[1]
        m = re.search(r'^isbn:\s*["\']?(\d{10,13})', head, re.M)
        t = re.search(r'^title:\s*(.+)$', head, re.M)
        alt = re.search(r'^isbn_alt:\s*\[(.*?)\]', head, re.M)
        if m:
            alts = re.findall(r'\d{10,13}', alt.group(1)) if alt else []
            books.append((m.group(1), alts, t.group(1).strip().strip('"') if t else '?'))
    ok = bad = 0
    for isbn, alts, title in books:
        out = os.path.join(COVERS, 'isbn-%s.jpg' % isbn)
        if os.path.exists(out):
            print('have    %s  %s' % (isbn, title)); ok += 1; continue
        done = False
        for cand in [isbn] + alts:
            verdict = title_ok(cand, title)
            if verdict is False:
                print('REJECT  %s  title does not match "%s"' % (cand, title)); continue
            src, im = fetch_cover(cand)
            if im:
                im.save(out, 'JPEG', quality=86, optimize=True)
                print('OK      %s  %-45s via %s (isbn %s, %s)  %dx%d' % (isbn, title[:45], src, cand, 'verified' if verdict else 'UNVERIFIED', *im.size))
                ok += 1; done = True; break
        if not done:
            print('MISSING %s  %s' % (isbn, title)); bad += 1
    print('covers: %d ok, %d missing' % (ok, bad))

def github():
    headers = {'Accept': 'application/vnd.github+json'}
    if os.environ.get('GITHUB_TOKEN'):
        headers['Authorization'] = 'Bearer ' + os.environ['GITHUB_TOKEN']
    user = json.loads(get('https://api.github.com/users/%s' % OWNER, headers)[0])
    repos = json.loads(get('https://api.github.com/users/%s/repos?type=owner&sort=pushed&per_page=100' % OWNER, headers)[0])
    public = [r for r in repos if not r.get('private')]
    total_stars = sum(r.get('stargazers_count') or 0 for r in public)
    keep = [r for r in repos if not r.get('fork') and not r.get('archived') and not r.get('private')]
    # only repos listed in _data/repositories.yml (github_repos) are kept in the snapshot
    listed = set(re.findall(r'^\s*-\s*([\w.-]+/[\w.-]+)\s*$',
                           open(os.path.join(ROOT, '_data', 'repositories.yml'), encoding='utf-8').read().split('github_repos:')[-1], re.M))
    if listed:
        keep = [r for r in keep if r['full_name'] in listed]
    keep.sort(key=lambda r: r.get('pushed_at') or '', reverse=True)
    cache = {
        'generated': datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ'),
        'user': dict({k: user.get(k) for k in ('login', 'name', 'bio', 'html_url', 'public_repos', 'followers', 'following')}, total_stars=total_stars),
        'repos': [{k: r.get(k) for k in ('name', 'full_name', 'html_url', 'description', 'language',
                                          'stargazers_count', 'forks_count', 'pushed_at')} for r in keep],
    }
    path = os.path.join(ROOT, '_data', 'github_cache.json')
    json.dump(cache, open(path, 'w'), indent=2, ensure_ascii=False)
    print('github: %d public repos -> %s' % (len(keep), [r['name'] for r in keep]))

if __name__ == '__main__':
    covers()
    github()
