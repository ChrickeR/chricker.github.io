#!/usr/bin/env python3
"""Produce the printable book, with page numbers.

Browsers cannot do this on their own. CSS has `@page` margin boxes with
`counter(page)` for exactly this job and neither Chrome nor Safari implements
them, so a folio has to be added after the layout exists. Paged.js was tried
here once and removed — on a document this long it corrupted its own output.

So: render, look at where things actually landed, feed that back, render again,
then stamp the numbers on.

    1. render the Print Edition to PDF
    2. read which page each heading fell on, from the PDF's own text layer
    3. write src/data/book-pages.json — the contents reads it and prints the
       numbers next to each entry
    4. render again, now with a numbered contents
    5. repeat 2-4 until the numbers stop moving (adding them can reflow the
       contents, which moves everything after it)
    6. render a folio layer of the same size and merge it underneath

Usage:
    npm run dev                       # in another shell
    python3 scripts/make-book.py      # writes scratch/book.pdf

    --url     where the Print Edition is served
    --out     where to write the finished PDF
    --keep    leave the intermediate files for inspection
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
import tempfile
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES_JSON = ROOT / "src" / "data" / "book-pages.json"

# Superseded editions land here rather than in public/, so they stay in the
# repo without being deployed with the site. Each is around 10 MB and git keeps
# it for good, so archive deliberately rather than on every trial run.
ARCHIVE_DIR = ROOT / "archive" / "book"

# ?folios=1 tells the page to print page numbers in its contents, because
# this run is the one that also stamps them onto the pages.
DEFAULT_URL = "http://localhost:4321/organizational-flow/print/?folios=1"

# Trim, in millimetres. Mirrors `trim` in src/data/print-edition.ts — the two
# have to agree or the folio layer lands in the wrong place.
TRIM_W_MM = 135
TRIM_H_MM = 215

# Where the folio sits: up from the foot, and in from the outer edge.
FOLIO_UP_MM = 10
FOLIO_IN_MM = 14

# Pages that carry no folio: the blank leaf, the title page and the edition
# page at the front, and the back cover at the end. A book does not number
# its own front and back matter.
FRONT_UNNUMBERED = 3
BACK_UNNUMBERED = 1

CHROMIUM_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/chromium",
    "/usr/bin/google-chrome",
]


def find_chromium() -> str:
    for path in CHROMIUM_CANDIDATES:
        if Path(path).exists():
            return path
    found = shutil.which("chromium") or shutil.which("google-chrome")
    if found:
        return found
    sys.exit("No Chromium found. Install Chrome or Edge, or pass one on PATH.")


def render(browser: str, url: str, out: Path) -> None:
    subprocess.run(
        [
            browser,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            "--virtual-time-budget=30000",
            f"--print-to-pdf={out}",
            url,
        ],
        check=True,
        capture_output=True,
    )
    if not out.exists():
        sys.exit(f"Render produced nothing at {out}")


def page_texts(pdf: Path) -> list[str]:
    """Each page's text, in order. Uses poppler's pdftotext."""
    if not shutil.which("pdftotext"):
        sys.exit("pdftotext not found. brew install poppler")
    txt = pdf.with_suffix(".txt")
    subprocess.run(["pdftotext", str(pdf), str(txt)], check=True, capture_output=True)
    pages = txt.read_text(errors="replace").split("\f")
    txt.unlink(missing_ok=True)
    return pages


CHAPTER_RE = re.compile(r"^CHAPTER\s+(\d+)", re.IGNORECASE)
# The divider page carries the numeral alone; the contents carries
# "PART II — SEEING ...", so anchor to end of line or the two collide.
PART_RE = re.compile(r"^PART\s+(IV|III|II|I)\s*$", re.IGNORECASE)

# The back cover's own eyebrow line, in the same words the CSS uppercases —
# see paper.eyebrow in src/data/book-structure.ts. Used to find where the
# back cover actually starts, rather than assuming a fixed page count from
# the end: Chrome's print-to-pdf occasionally pads a trailing blank page
# onto a document this long, which would otherwise throw the count off.
BACK_COVER_ANCHOR = "A WORKING THEORY OF ORGANIZATIONAL FLOW"


def head_lines(page: str, count: int = 2) -> list[str]:
    out = []
    for line in page.splitlines():
        line = line.strip()
        if line:
            out.append(line)
            if len(out) == count:
                break
    return out


def locate(pages: list[str], section_titles: list[str]) -> dict[str, int]:
    """Map anchor -> page number, from what each page starts with.

    Chapters open with `CHAPTER n`, parts with `PART x`, and every front- and
    back-matter section with its own title. Each is the first thing on its
    page, because each starts one.
    """
    # The contents must print the number the reader sees on the page, which is
    # the folio, not the page's position in the file. They differ by the
    # unnumbered leaves at the front — cover, blank, title, edition — and
    # getting that wrong sends every reference four pages early.
    found: dict[str, int] = {}
    wanted = {t.lower(): t for t in section_titles}

    for index, page in enumerate(pages, start=1):
        lines = head_lines(page)
        if not lines:
            continue
        head = lines[0]
        # The divider sets "PART II" with wide letter-spacing, which pdftotext
        # splits across two lines. The contents keeps them together as
        # "PART II — SEEING ...", so joining the first two lines and anchoring
        # to the end tells the two apart.
        joined = " ".join(lines)

        folio = index - FRONT_UNNUMBERED
        if folio < 1:
            continue

        m = CHAPTER_RE.match(head)
        if m:
            found.setdefault(f"chapter-{int(m.group(1))}", folio)
            continue

        m = PART_RE.match(joined)
        if m:
            found.setdefault(f"part-{m.group(1).upper()}", folio)
            continue

        key = head.lower()
        if key in wanted:
            found.setdefault(f"section-{wanted[key]}", folio)

    return found


def find_back_cover(pages: list[str]) -> int | None:
    """Index (0-based) of the back cover's own page, found by its text.

    The title page carries the same eyebrow line, so this has to take the
    *last* match rather than the first — the back cover is always the final
    occurrence, since nothing legitimate follows it.

    Returns None if it cannot be found, so callers can fall back to the
    fixed-count assumption rather than stripping the wrong thing.
    """
    for index in range(len(pages) - 1, -1, -1):
        lines = head_lines(pages[index], count=1)
        if lines and lines[0].strip().upper() == BACK_COVER_ANCHOR:
            return index
    return None


def write_pages_json(mapping: dict[str, int]) -> bool:
    """Returns True if the file changed."""
    payload = {
        "_comment": (
            "Anchor -> printed page number for the Print Edition contents. "
            "Generated by scripts/make-book.py. Do not edit by hand: it is "
            "derived from where headings actually fall in the rendered book."
        ),
        "pages": dict(sorted(mapping.items())),
    }
    new = json.dumps(payload, indent=2, ensure_ascii=False) + "\n"
    old = PAGES_JSON.read_text() if PAGES_JSON.exists() else ""
    if new == old:
        return False
    PAGES_JSON.write_text(new)
    return True


def folio_html(total: int) -> str:
    """A document of `total` pages carrying nothing but the page numbers.

    Recto (odd) numbers sit at the outer edge on the right, verso (even) on the
    left, matching the mirrored margins of the book itself.
    """
    body = []
    for n in range(1, total + 1):
        printed = n - FRONT_UNNUMBERED
        blank = printed < 1 or n > total - BACK_UNNUMBERED
        side = "recto" if n % 2 else "verso"
        label = "" if blank else str(printed)
        body.append(f'<div class="leaf {side}"><span>{label}</span></div>')

    return f"""<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400&display=block" rel="stylesheet">
<style>
  @page {{ size: {TRIM_W_MM}mm {TRIM_H_MM}mm; margin: 0; }}
  /* No background anywhere: this layer is merged on top of the book, so any
     paint here would white out the text underneath it. */
  html, body {{ margin: 0; padding: 0; background: transparent; }}
  .leaf {{
    position: relative;
    width: {TRIM_W_MM}mm;
    height: {TRIM_H_MM}mm;
    break-after: page;
    page-break-after: always;
  }}
  .leaf span {{
    position: absolute;
    bottom: {FOLIO_UP_MM}mm;
    /* The book's own text face, or the folio reads as a different document. */
    font-family: 'Source Serif 4', Georgia, serif;
    font-size: 9pt;
    color: #555;
  }}
  .recto span {{ right: {FOLIO_IN_MM}mm; }}
  .verso span {{ left: {FOLIO_IN_MM}mm; }}
</style></head><body>{''.join(body)}</body></html>"""


def archive_previous(out: Path) -> Path | None:
    """Move an existing export into archive/book/, dated by when it was made.

    A printed copy is a snapshot with a date on it, and somebody holding one
    should be able to find the file it came from. Keeping the superseded
    edition is what makes that possible.
    """
    if not out.exists():
        return None

    made = datetime.fromtimestamp(out.stat().st_mtime).strftime("%Y-%m-%d")
    ARCHIVE_DIR.mkdir(parents=True, exist_ok=True)

    target = ARCHIVE_DIR / f"{out.stem}-{made}{out.suffix}"
    n = 2
    while target.exists():
        target = ARCHIVE_DIR / f"{out.stem}-{made}-{n}{out.suffix}"
        n += 1

    shutil.move(str(out), str(target))
    return target


def stamp(
    book: Path,
    folios: Path,
    out: Path,
    drop_back: bool = True,
    back_cover_at: int | None = None,
) -> int:
    """Merge the folio layer in, and return the page count written.

    The front matter (blank leaf, title page, edition page) is always kept —
    it is genuine interior content, not artwork. The physical cover (front
    and back, with bleed and spine) is a separate file supplied to the
    printer and never embedded here. The back-cover blurb, a page of sales
    copy aimed at someone deciding whether to buy the paper, is dropped by
    default for the same reason a printed book doesn't repeat its own jacket
    copy inside the text block — and dropping it leaves an even page count,
    which a print run wants because sheets have two sides.

    `back_cover_at` is the back cover's own index (0-based), found from its
    text by `find_back_cover`. Everything from there on is dropped — not just
    one fixed-count page — because Chrome's print-to-pdf occasionally pads a
    trailing blank page onto a document this long, which a fixed count would
    then miss.
    """
    try:
        from pypdf import PdfReader, PdfWriter
    except ImportError:
        sys.exit("pypdf not installed. python3 -m pip install --user pypdf")

    base = PdfReader(str(book))
    marks = PdfReader(str(folios))
    writer = PdfWriter()

    total = len(base.pages)
    if drop_back:
        last = back_cover_at if back_cover_at is not None else total - BACK_UNNUMBERED
    else:
        last = total

    for i in range(0, last):
        page = base.pages[i]
        if i < len(marks.pages):
            page.merge_page(marks.pages[i])
        writer.add_page(page)

    if drop_back and len(writer.pages) % 2:
        writer.add_blank_page()

    # Chrome rounds the page box to its own idea of the millimetre — 383.04 x
    # 609.12pt rather than 382.68 x 609.45. A print shop compares the trim
    # against its project setting exactly, so snap every page to the number
    # they asked for. The shift is under a tenth of a millimetre.
    exact_w = TRIM_W_MM * 72 / 25.4
    exact_h = TRIM_H_MM * 72 / 25.4
    for page in writer.pages:
        page.mediabox.lower_left = (0, 0)
        page.mediabox.upper_right = (exact_w, exact_h)
        page.cropbox = page.mediabox

    with out.open("wb") as fh:
        writer.write(fh)
    return len(writer.pages)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", default=DEFAULT_URL)
    ap.add_argument("--out", default=str(ROOT / "scratch" / "book.pdf"))
    ap.add_argument("--keep", action="store_true")
    ap.add_argument(
        "--no-archive",
        action="store_true",
        help="overwrite the existing output instead of moving it to "
             "archive/book/ first. Use for trial runs you do not want kept.",
    )
    ap.add_argument(
        "--with-covers",
        action="store_true",
        help="keep the back-cover blurb page too. Off by default, since it is "
             "sales copy for someone deciding whether to buy the paper, not "
             "something a reader who already has it needs repeated.",
    )
    ap.add_argument("--max-passes", type=int, default=4)
    args = ap.parse_args()

    browser = find_chromium()
    out = Path(args.out)
    out.parent.mkdir(parents=True, exist_ok=True)
    work = Path(tempfile.mkdtemp(prefix="book-"))

    # Titles that open a page of their own, in the order the book has them.
    sections = [
        "Contents",
        "Preface",
        "A Note to the Reader",
        "The Ten-Minute Version",
        "A Personal Journey",
        "A Digital Awakening",
        "About the Author",
        "Acknowledgments",
        "Version History",
        "Also Online",
        "AI Transparency",
    ]

    mapping: dict[str, int] = {}
    pdf = work / "pass.pdf"

    for attempt in range(1, args.max_passes + 1):
        print(f"pass {attempt}: rendering {args.url}")
        render(browser, args.url, pdf)
        pages = page_texts(pdf)
        found = locate(pages, sections)
        print(f"  {len(pages)} pages, {len(found)} headings located")

        if found == mapping:
            print("  pagination settled")
            break

        mapping = found
        if not write_pages_json(mapping):
            print("  numbers unchanged")
            break
        print("  wrote src/data/book-pages.json — waiting for the dev server")
        # The dev server picks the JSON up on the next request; give it a beat.
        subprocess.run(["sleep", "3"], check=False)
    else:
        print("  warning: pagination did not settle; numbers may be off by a page")

    pages = page_texts(pdf)
    total = len(pages)
    back_cover_at = find_back_cover(pages)
    print(f"stamping folios on {total} pages")
    fh = work / "folios.html"
    fh.write_text(folio_html(total))
    folios = work / "folios.pdf"
    render(browser, fh.as_uri(), folios)
    archived = None if args.no_archive else archive_previous(out)
    drop_back = not args.with_covers
    if drop_back and back_cover_at is None:
        print("  warning: back cover not found by text; falling back to a fixed page count")
    written = stamp(pdf, folios, out, drop_back=drop_back, back_cover_at=back_cover_at)

    kind = "with back-cover blurb" if args.with_covers else "back-cover blurb removed"
    if archived:
        print(f"\nprevious edition kept at {archived.relative_to(ROOT)}")
    print(f"\n{out}  ({written} pages, {kind})")
    print(f"trim {TRIM_W_MM} x {TRIM_H_MM} mm")
    if args.keep:
        print(f"intermediates in {work}")
    else:
        shutil.rmtree(work, ignore_errors=True)


if __name__ == "__main__":
    main()
