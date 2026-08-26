# The Print Edition, and how it becomes a physical book

The Print Edition is not a second copy of the manuscript. It is a second
presentation of the same content collection, which matters because the paper is
still being edited weekly — one source, two outputs, no drift.

Route: `/organizational-flow/print/`
Page: `src/pages/organizational-flow/print/index.astro`

## What it is today

One continuous document: **blank leaf → title page → edition page → interior →
back-cover blurb**, set at A5.

- **Trim** 148 × 210 mm, set by `@page { size: 148mm 210mm }`.
- **Margins** mirrored — 20 mm inner, 16 mm outer, 18 mm head, 20 mm foot — via
  `@page :left` and `@page :right`. Text area is 112 mm, around 65 characters at
  10.5 pt, which is a book measure rather than a printed web column.
- **The title and back-cover pages** use a named `@page cover` with a tighter
  14 mm frame — a leftover name from when the title page doubled as the
  physical cover; it no longer does, see below.
- **Structure** blank · title page · edition page · contents · preface ·
  note to the reader · front matter · Parts I–IV · About the Author ·
  Acknowledgments · Version History · Appendix · back-cover blurb.
- The leading blank is deliberate: it puts the title page recto and the
  edition page verso, the arrangement a bound copy expects.

None of this is the physical cover. The wraparound cover — front, spine, back,
barcode, with bleed — is separate artwork supplied straight to the printer and
never embedded in this file. `BookCover.astro` is the *interior's* title page,
richer than a plain one (it carries the eyebrow, tagline and the hillside
mark), not a stand-in for the printed jacket.

Everything the printed object knows about itself lives in
`src/data/print-edition.ts` — trim, edition label, canonical URL, the
living-paper note, and the snapshot date, which is generated from the build
clock and never written down by hand.

`src/data/about-the-author.ts` and `src/data/back-cover.ts` hold the two pieces
of copy that exist only in the book. The back-cover blurb is assembled from the
paper's own lines so it cannot drift away from the argument.

The three book components are separable on purpose:

| Component | Today |
| --- | --- |
| `BookCover.astro` | the interior's title page, visible on screen too as the reading page's masthead |
| `BookEditionPage.astro` | print only |
| `BookBackCover.astro` | last page, dropped from the files the site and the printer both receive |

`.book-only` hides the edition page, blank leaf and back cover on screen, so the
web experience is exactly what it was.

## The file the site hands out

`public/book/organizational-flow.pdf` is the finished book — 135 x 215, folios
on the pages, page numbers in the contents, back-cover blurb removed (it is
sales copy for someone deciding whether to buy the paper, not something a
reader who already has it needs repeated). The copyright line in the site
footer links straight to it.

It is a snapshot committed to the repo, not something the build regenerates, so
it goes stale as the paper moves. Refresh it with:

```bash
npm run dev
python3 scripts/make-book.py --out public/book/organizational-flow.pdf
```

The print-shop interior file uses the same command, just a different `--out`:

```bash
python3 scripts/make-book.py --out scratch/book-interior.pdf
```

The edition being replaced is moved to `archive/book/`, dated by when it was
made, rather than overwritten. Somebody holding a printed copy can then be sent
the exact file it came from. Those files are in the repo but not in `public/`,
so they are kept without being deployed — each is around 10 MB and git keeps it
for good, so use `--no-archive` for trial runs you do not want to keep.

## Producing a PDF now

Open the page, print, choose **Save as PDF**, set paper size to **A5** and
margins to **None** — the stylesheet supplies its own.

To render it without the dialog, any Chromium will do:

```bash
"/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=20000 --print-to-pdf=book.pdf http://localhost:4321/organizational-flow/print/
```

That currently yields around 325 A5 pages.

## What a browser still cannot do

These are the gap between "a well-set A5 PDF" and "a file a printer will accept
without asking questions". None of them are CSS problems; browsers simply do not
implement the paged-media features involved.

- **Page numbers and running heads.** These need `@page` margin boxes with
  `counter(page)`. Chrome and Safari ignore them.
- **Forced recto chapter openings** (`break-before: recto`) and the automatic
  blank pages that come with them. Only the blank after the cover is placed by
  hand here.
- **Bleed, crop marks and a PDF/X profile.**
- **Spine width**, which depends on final page count, paper stock and the
  printer's own specification — which is why nothing here hard-codes one.

Paged.js was used for this once and removed: on a document this long it
corrupted its own output, fragmenting the contents across a page boundary and
leaving the broken state on screen when the print dialog was cancelled.

## When it is time to produce real print files

The layout above is already the input. The step that remains is a paged
formatter run at build time over the same URL:

1. **Interior PDF** — Vivliostyle CLI, WeasyPrint or Prince over
   `/organizational-flow/print/`, with the covers excluded (they are their own
   components; a `?interior` flag on the route is the smallest change that
   would do it). Add the page-number and running-head rules to a stylesheet the
   formatter reads and the browser ignores.
2. **Cover PDF** — a separate route rendering `BookBackCover`, a spine and
   `BookCover` side by side on one sheet, sized
   `(148 × 2 + spine) mm × 210 mm` plus 3 mm bleed. Ask the printer for the
   spine calculation before building this; it is their number, not ours.

## Later: hiding the Print Edition

`printEditionPublic` in `src/data/print-edition.ts` is the whole switch. Set it
to `false` and the two landing-page links disappear while the route, the
edition and every deep link keep working — ready to be reached from a footer
easter egg instead.

One dependency to settle first: the audio player lives on this same route, and
the landing page's *Audio* link points at it. Hiding the Print Edition without
giving the narration a home of its own would take the audio with it.
