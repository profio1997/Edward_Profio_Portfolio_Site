#!/usr/bin/env python3
"""One-off: look up first-publication years in Open Library for books without a `released` year, and fetch candidate covers for two textbooks. Prints results and writes years.json."""
import glob, json, os, re, sys, time, urllib.parse, urllib.request

UA = {"User-Agent": "portfolio-year-check/1.0 (https://github.com/profio1997)"}

def get(url, binary=False, tries=3):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=25) as r:
                d = r.read()
                return d if binary else json.loads(d)
        except Exception as e:
            time.sleep(1.5 * (i + 1))
    return None

def norm(s):
    return re.findall(r"[a-z0-9]+", s.lower())

def title_ok(a, b):
    ta, tb = set(norm(a)), set(norm(b))
    if not ta or not tb: return False
    inter = len(ta & tb)
    return inter / min(len(ta), len(tb)) >= 0.75 and inter / max(len(ta), len(tb)) >= 0.5

def author_ok(ours, theirs):
    last = [norm(x)[-1] for x in re.split(r",| and | & ", ours) if norm(x)]
    flat = " ".join(" ".join(norm(t)) for t in theirs)
    return any(l in flat for l in last)

rows = []
for f in sorted(glob.glob("_books/*.md")):
    t = open(f, encoding="utf-8").read().split("---\n", 2)
    h = t[1]
    g = lambda k: (re.search(r"^%s:\s*(.+)$" % k, h, re.M) or [None, ""])[1].strip().strip('"')
    if g("released"): continue
    rows.append(dict(file=os.path.basename(f), title=g("title"), author=g("author"), isbn=re.sub(r"\D", "", g("isbn"))))

out = []
for r in rows:
    res = None
    docs = []
    if r["isbn"]:
        d = get("https://openlibrary.org/search.json?isbn=%s&fields=title,author_name,first_publish_year&limit=3" % r["isbn"])
        docs += (d or {}).get("docs", [])
    if not docs:
        q = urllib.parse.urlencode({"title": r["title"], "author": r["author"].split(",")[0].split(" and ")[0], "fields": "title,author_name,first_publish_year", "limit": 5})
        d = get("https://openlibrary.org/search.json?" + q)
        docs += (d or {}).get("docs", [])
    for d in docs:
        if d.get("first_publish_year") and title_ok(r["title"], d.get("title", "")) and author_ok(r["author"], d.get("author_name", [])):
            res = d; break
    out.append(dict(r, year=res["first_publish_year"] if res else None, ol_title=res["title"] if res else None, ol_authors=res.get("author_name") if res else None))
    print("YEAR|%s|%s|%s|%s" % (r["file"], out[-1]["year"], out[-1]["ol_title"], r["isbn"]), flush=True)
    time.sleep(0.15)
json.dump(out, open("years.json", "w"), indent=1)
print("RESOLVED", sum(1 for o in out if o["year"]), "OF", len(out))

os.makedirs("cands", exist_ok=True)
for isbn in ["9781071614174", "9781071614204", "9780262046305", "9780262367509", "9781461471370", "9780262033848"]:
    got = None
    for name, url in (("ol", "https://covers.openlibrary.org/b/isbn/%s-L.jpg?default=false" % isbn),
                      ("gb", "https://books.google.com/books/content?vid=ISBN%s&printsec=frontcover&img=1&zoom=1" % isbn)):
        d = get(url, binary=True, tries=2)
        if d and len(d) > 6000:
            open("cands/%s_%s.jpg" % (isbn, name), "wb").write(d); got = (name, len(d)); print("COVER|%s|%s|%d" % (isbn, name, len(d)))
    if not got: print("COVER|%s|none" % isbn)
