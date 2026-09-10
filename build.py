#!/usr/bin/env python3
"""
Tiny static-site build step for the IM-SURF site.

Why this exists: GitHub Pages serves plain files, no build step required.
But hand-editing the header/nav/footer identically across ~20 pages is how
sites like this rot. This script keeps ONE copy of the shared shell
(src/template.html) and ONE copy of the nav (src/nav.html), and stamps them
into every page under src/pages/ to produce the final flat HTML files at
the repo root that GitHub Pages actually serves.

Each file in src/pages/ starts with two header lines and a blank line:

    TITLE: Page title | IM-SURF
    DESC: One-sentence description for search engines / social previews.

    <section id="..." class="section"> ... rest of the page content ... </section>

Usage:
    python3 build.py
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
PAGES = SRC / "pages"

def read(path):
    return path.read_text(encoding="utf-8")

def parse_page(path):
    text = read(path)
    parts = text.split("\n\n", 1)
    if len(parts) != 2:
        sys.exit(f"ERROR: {path} is missing the blank line after TITLE/DESC header")
    header, body = parts
    meta = {}
    for line in header.splitlines():
        if not line.strip():
            continue
        m = re.match(r"^([A-Z]+):\s*(.*)$", line.strip())
        if not m:
            sys.exit(f"ERROR: {path} has a malformed header line: {line!r}")
        meta[m.group(1)] = m.group(2)
    for required in ("TITLE", "DESC"):
        if required not in meta:
            sys.exit(f"ERROR: {path} is missing required '{required}:' header line")
    return meta, body.strip() + "\n"

def main():
    template = read(SRC / "template.html")
    nav = read(SRC / "nav.html")

    built = []
    for page_path in sorted(PAGES.glob("*.html")):
        meta, content = parse_page(page_path)
        out = template
        out = out.replace("{{TITLE}}", meta["TITLE"])
        out = out.replace("{{DESC}}", meta["DESC"])
        out = out.replace("{{URLPATH}}", page_path.name)
        out = out.replace("{{NAV}}", nav)
        out = out.replace("{{CONTENT}}", content)
        out_path = ROOT / page_path.name
        out_path.write_text(out, encoding="utf-8")
        built.append(page_path.name)

    print(f"Built {len(built)} page(s): {', '.join(built)}")

if __name__ == "__main__":
    main()
