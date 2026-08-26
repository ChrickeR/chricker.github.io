// Everything the physical book knows about itself that the online paper does
// not. Kept apart from `paper` in book-structure.ts because those fields
// describe the work; these describe one printed snapshot of it.
//
// The online paper is edited continuously. A printed copy is therefore a
// snapshot with a date on it, and the date has to come from the build rather
// than from anybody remembering to update a constant.

/**
 * Whether the Print Edition is linked from public navigation.
 *
 * Set to false to take the links off the landing page while leaving the route,
 * the edition and every deep link to it working — the intended end state is a
 * hidden footer easter egg pointing at the same URL. Nothing else needs to
 * change when that day comes.
 */
export const printEditionPublic = true;

/**
 * Whether the free PDF download is offered.
 *
 * Set to false to drop just that button — the plan once physical copies are
 * genuinely for sale — while leaving the online Print Edition readable and
 * `?pdf` working for anyone who has the link.
 */
export const pdfDownloadPublic = true;

/** Where the route lives. One constant so the future hiding is one edit. */
export const printEditionPath = '/organizational-flow/print/';

/**
 * The printable book, as a file.
 *
 * Not a browser print: this is the output of scripts/make-book.py — 135 x 215,
 * folios on the pages, page numbers in the contents, covers removed. A browser
 * cannot produce any of that, so the hidden link hands over the real file
 * rather than opening a print dialog.
 *
 * It is a snapshot. Regenerate it whenever the paper has moved enough to
 * matter:  python3 scripts/make-book.py --out public/book/organizational-flow.pdf
 */
export const bookPdfPath = '/book/organizational-flow.pdf';

/**
 * What the file is called once it lands in someone's Downloads. Dated, because
 * the paper keeps moving and an undated copy is impossible to place later —
 * and because a second download otherwise arrives as "(1)".
 *
 * The date is the build clock, which matches the snapshot date printed inside
 * the book as long as the PDF is regenerated and deployed together.
 */
export function bookPdfFilename(now: Date = new Date()): string {
  const stamp = now.toISOString().slice(0, 10);
  return `organizational-flow-${stamp}.pdf`;
}

/** The canonical online edition, printed in the book so a reader can find it. */
export const canonicalUrl = 'https://troi.se/organizational-flow/';
export const canonicalUrlShort = 'troi.se/organizational-flow';

/**
 * Who holds the rights. The company, not the person — the paper is published
 * by TROi even though it is written in the first person.
 */
export const rightsHolder = 'TROi Arkitektur AB';

/**
 * The licence.
 *
 * CC BY-NC-ND fits what this paper actually is: given away, meant to be read
 * and quoted and passed on, not sold on by anyone else, and a working
 * theory whose argument should not turn up altered under the same name. The
 * NoDerivatives clause is the one worth thinking about — it also rules out
 * translations and adaptations, so if that ever becomes unwelcome, BY-NC-SA is
 * the version to move to. Changing the three constants below is the whole job.
 */
export const licenceName =
  'Creative Commons Attribution–NonCommercial–NoDerivatives 4.0 International';
export const licenceShort = 'CC BY-NC-ND 4.0';
export const licenceUrl = 'https://creativecommons.org/licenses/by-nc-nd/4.0/';

/** The licence in plain words, for the edition page and the site footer. */
export const licenceStatement =
  'You are welcome to read this, quote it with attribution, and pass it on. You may not sell it or publish a changed version of it. If you would like to translate it, or use it somewhere the licence does not stretch to, write to me and ask — the answer is usually yes.';

/** Bumped by hand when a new physical edition is actually produced. */
export const printEditionLabel = 'Print Edition 1.0';

/**
 * Trim size, in millimetres — the printer's interior spec (13.5 × 21.5 cm),
 * not A5. Used by the @page rule and the docs.
 */
export const trim = { width: 135, height: 215 } as const;

/**
 * The cover is a separate file at the printer: back + spine + front across one
 * sheet, including bleed. 30.09 × 22.5 cm is their figure for this book; the
 * spine inside it depends on the final page count and paper, so it is theirs
 * to confirm rather than ours to hard-code.
 */
export const coverSheet = { width: 300.9, height: 225 } as const;

/**
 * The build date, formatted the way a book prints it.
 * Generated at build time — never hard-coded, because the whole point of the
 * line is to say which version of a moving text this copy froze.
 */
export function snapshotDate(now: Date = new Date()): string {
  return now.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Publisher and printer, as the imprint page has to name them. */
export const imprintLines: string[] = [
  'Publisher: BoD · Books on Demand, Östermalmstorg 1, 114 42 Stockholm, Sweden, bod@bod.se',
  'Printed by: Libri Plureos GmbH, Friedensallee 273, 22763 Hamburg, Germany',
];

/** Copyright year, from the same build clock. */
export function copyrightYear(now: Date = new Date()): number {
  return now.getFullYear();
}

/**
 * Why the date matters, in the reader's terms. Printed on the edition page and
 * echoed on the back of the title page of any future physical run.
 */
export const livingPaperNote =
  'Organizational Flow is a living paper that continues to evolve online. This print edition represents a snapshot of the text at the date shown above.';
