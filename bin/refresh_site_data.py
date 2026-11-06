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


FONT_DIRS = ['/usr/share/fonts/truetype/dejavu/', '/usr/share/fonts/dejavu/', '/Library/Fonts/']

def _font(name, size):
    from PIL import ImageFont
    for d in FONT_DIRS:
        try:
            return ImageFont.truetype(os.path.join(d, name), size)
        except Exception:
            pass
    return ImageFont.load_default()

def fallback_cover(title, author, cats):
    """A designed typographic cover for books whose real cover art cannot be found."""
    from PIL import ImageDraw
    import colorsys, hashlib
    W, H = 420, 630
    key = int(hashlib.md5((cats.split()[0] if cats else title).encode()).hexdigest()[:6], 16)
    hue = (key % 360) / 360.0
    top = tuple(int(c * 255) for c in colorsys.hls_to_rgb(hue, .26, .42))
    bot = tuple(int(c * 255) for c in colorsys.hls_to_rgb((hue + .04) % 1, .16, .46))
    im = Image.new('RGB', (W, H), top)
    px = im.load()
    for y in range(H):
        k = y / (H - 1)
        row = tuple(int(top[i] + (bot[i] - top[i]) * k) for i in range(3))
        for x in range(W):
            px[x, y] = row
    d = ImageDraw.Draw(im)
    d.rectangle([22, 22, W - 23, H - 23], outline=(255, 255, 255), width=2)
    d.line([54, 316, W - 54, 316], fill=(255, 255, 255), width=1)
    tf, af = _font('DejaVuSerif-Bold.ttf', 40), _font('DejaVuSans.ttf', 20)
    lines, cur = [], ''
    for w in title.split(':')[0].split():
        trial = (cur + ' ' + w).strip()
        if d.textlength(trial, font=tf) > W - 108 and cur:
            lines.append(cur); cur = w
        else:
            cur = trial
    lines.append(cur)
    while len(lines) > 5:
        tf = _font('DejaVuSerif-Bold.ttf', max(24, tf.size - 4)); lines = lines[:5]
    y = 120
    for ln in lines:
        d.text((54, y), ln, font=tf, fill=(255, 255, 255)); y += int(tf.size * 1.25)
    d.text((54, 340), author[:60], font=af, fill=(235, 238, 245))
    return im

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


def _title_match(want, got):
    a, b = words(want.split(':')[0]), words(got.split(':')[0])
    if not a or not b:
        return False
    return len(a & b) / float(len(a | b)) >= 0.6

def _author_match(want, names):
    last = [w for w in re.findall(r"[A-Za-z']+", want) if len(w) > 2]
    if not last:
        return True
    sur = last[-1].lower()
    return any(sur in (n or '').lower() for n in names)

def search_cover(title, author):
    """Last resort before a designed cover: find the book by title and author (not ISBN) and
    accept a cover only when the catalogued title and author both match."""
    main = title.split(':')[0]
    first_author = re.split(r',| and | & ', author)[0].strip() if author else ''
    try:
        q = urllib.parse.urlencode({'title': main, 'author': first_author, 'limit': 5, 'fields': 'title,author_name,cover_i'})
        docs = json.loads(get('https://openlibrary.org/search.json?' + q)[0]).get('docs') or []
        for d in docs:
            if d.get('cover_i') and _title_match(title, d.get('title', '')) and _author_match(author, d.get('author_name') or []):
                data, _ = get('https://covers.openlibrary.org/b/id/%d-L.jpg?default=false' % d['cover_i'])
                im = valid_cover(data)
                if im:
                    return 'openlibrary-search', im
    except Exception as e:
        print('   search failed: %s' % str(e)[:80])
    try:
        q = urllib.parse.urlencode({'q': 'intitle:"%s"+inauthor:"%s"' % (main, first_author), 'maxResults': 5}, safe=':"+')
        items = json.loads(get('https://www.googleapis.com/books/v1/volumes?' + q)[0]).get('items') or []
        for it in items:
            vi = it.get('volumeInfo', {})
            links = vi.get('imageLinks') or {}
            if links and _title_match(title, vi.get('title', '')) and _author_match(author, vi.get('authors') or []):
                u = (links.get('extraLarge') or links.get('large') or links.get('medium') or links.get('thumbnail') or links.get('smallThumbnail'))
                u = u.replace('http://', 'https://').replace('&edge=curl', '')
                data, _ = get(re.sub(r'zoom=\d', 'zoom=0', u))
                im = valid_cover(data)
                if im:
                    return 'googlebooks-search', im
    except Exception as e:
        print('   search failed: %s' % str(e)[:80])
    return None, None

def is_fallback(path, title, author, cats):
    """True if the file on disk is one of our own designed fallback covers."""
    try:
        from PIL import ImageChops
        have = Image.open(path).convert('RGB')
        ref = fallback_cover(title, author, cats).convert('RGB')
        if have.size != ref.size:
            return False
        a, b = have.resize((42, 63)), ref.resize((42, 63))
        d = ImageChops.difference(a, b).convert('L')
        return sum(d.tobytes()) / float(42 * 63) < 3
    except Exception:
        return False

def covers():
    os.makedirs(COVERS, exist_ok=True)
    books = []
    for f in sorted(glob.glob(os.path.join(ROOT, '_books', '*.md'))):
        head = open(f, encoding='utf-8').read().split('---')[1]
        m = re.search(r'^isbn:\s*["\']?(\d{10,13})', head, re.M)
        t = re.search(r'^title:\s*(.+)$', head, re.M)
        au = re.search(r'^author:\s*(.+)$', head, re.M)
        ca = re.search(r'^categories:\s*(.+)$', head, re.M)
        alt = re.search(r'^isbn_alt:\s*\[(.*?)\]', head, re.M)
        if m:
            alts = re.findall(r'\d{10,13}', alt.group(1)) if alt else []
            books.append((m.group(1), alts, t.group(1).strip().strip('"') if t else '?', au.group(1).strip().strip('"') if au else '', ca.group(1).strip() if ca else ''))
    from concurrent.futures import ThreadPoolExecutor

    def one(book):
        isbn, alts, title, author, cats = book
        out = os.path.join(COVERS, 'isbn-%s.jpg' % isbn)
        retry = False
        if os.path.exists(out):
            if not is_fallback(out, title, author, cats):
                return True, 'have    %s  %s' % (isbn, title)
            retry = True                      # earlier run could only make a designed cover: try again
        for cand in [isbn] + alts:
            verdict = title_ok(cand, title)
            if verdict is False:
                print('REJECT  %s  title does not match "%s"' % (cand, title), flush=True); continue
            src, im = fetch_cover(cand)
            if im:
                im.thumbnail((360, 540))
                im.save(out, 'JPEG', quality=84, optimize=True)
                return True, 'OK      %s  %-45s via %s (isbn %s, %s)  %dx%d' % (isbn, title[:45], src, cand, 'verified' if verdict else 'UNVERIFIED', *im.size)
        src, im = search_cover(title, author)
        if im:
            im.thumbnail((360, 540))
            im.save(out, 'JPEG', quality=84, optimize=True)
            return True, 'OK      %s  %-45s via %s  %dx%d' % (isbn, title[:45], src, *im.size)
        if not retry:
            fallback_cover(title, author, cats).save(out, 'JPEG', quality=88)
        return False, 'MISSING %s  %s  -> designed fallback cover' % (isbn, title)

    ok = bad = 0
    with ThreadPoolExecutor(max_workers=6) as pool:
        for good, line in pool.map(one, books):
            print(line, flush=True)
            if good: ok += 1
            else: bad += 1
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
    # Seven day activity snapshot (UTC days), used by the heatmap until the live fetch in the browser answers.
    try:
        counts = {}
        for page in (1, 2, 3):
            evs = json.loads(get('https://api.github.com/users/%s/events/public?per_page=100&page=%d' % (OWNER, page), headers)[0])
            for ev in evs:
                t = ev.get('type')
                if t in ('WatchEvent', 'ForkEvent', 'PublicEvent', 'MemberEvent'):
                    continue
                p = ev.get('payload') or {}
                n = (p.get('size') or len(p.get('commits') or []) or 1) if t == 'PushEvent' else 1
                day = (ev.get('created_at') or '')[:10]
                if day:
                    counts[day] = counts.get(day, 0) + n
            if len(evs) < 100:
                break
        cache['activity'] = dict(sorted(counts.items())[-14:])
    except Exception as e:
        print('activity snapshot failed: %s' % str(e)[:80])
        cache['activity'] = {}
    path = os.path.join(ROOT, '_data', 'github_cache.json')
    json.dump(cache, open(path, 'w'), indent=2, ensure_ascii=False)
    print('github: %d public repos -> %s' % (len(keep), [r['name'] for r in keep]))

if __name__ == '__main__':
    covers()
    github()
