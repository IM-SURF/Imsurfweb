# IM-SURF website

Source for https://im-surf.github.io/Imsurfweb/ — plain static HTML served
directly by GitHub Pages (no Jekyll, see `.nojekyll`).

## How this is organized

- `src/template.html` — the shared page shell (head, header, footer, script tag).
- `src/nav.html` — the navigation menu, included into every page.
- `src/pages/*.html` — one file per page, **content only**. The final,
  full HTML files (`index.html`, `news.html`, ...) at the repo root are
  *generated* from these — don't hand-edit the generated files, edit the
  source under `src/` and rebuild.
- `assets/css/style.css` — all styling.
- `assets/js/nav.js` — mobile hamburger menu + tap/click dropdowns (no
  `:hover`, so it works on touch screens).
- `assets/img/`, `assets/video/` — compressed, web-ready media actually
  used on the site.
- `source-assets/` — original, full-resolution logos/photos/video kept
  for reference (e.g. if a higher-res version is needed for print). Not
  linked from any page, so they don't affect site performance.

## Adding or editing a page

1. Create or edit a file in `src/pages/`, e.g. `src/pages/objectives.html`.
   It must start with two header lines, a blank line, then the page
   content (just the `<section>` markup — no `<html>`/`<head>`/nav/footer):

   ```
   TITLE: Objectives | IM-SURF
   DESC: One-sentence description for search engines and social previews.

   <section class="section">
     <h2>Objectives</h2>
     <p>...</p>
   </section>
   ```

2. Run the build:

   ```
   python3 build.py
   ```

   This regenerates every `.html` file at the repo root from `src/`.

3. Commit both the `src/` changes and the generated root `.html` file(s).

## Updating the nav or the shared header/footer

Edit `src/nav.html` or `src/template.html` once, then run `python3
build.py` — it updates every page automatically.

## News & Updates

`src/pages/news.html` is the partner-facing changelog (linked from the
nav as "News & Updates"). Add a new `<article class="news-item">` block
at the top whenever there's something partners should know about, then
rebuild.
