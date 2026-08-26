/** What has changed in the paper, and when. Shared by the Version History
 *  page and the print edition, which used to keep their own copies and had
 *  already drifted apart once. */
export interface VersionEntry {
  date: string;
  note: string;
  /** Chapters the entry touched. Linked on the web, listed as plain titles in
   *  the book, where a URL would be no use to anybody holding it. The anchor
   *  is a heading id from the chapter itself, so a reader lands on the part
   *  that changed rather than at the top. */
  chapters?: { slug: string; title: string; anchor?: string }[];
}

export const versionHistory: VersionEntry[] = [
  {
    date: '2026-08-20',
    note: 'Observing a system is a way of acting on it. Asking who owns something already starts the thing being measured, which costs the first reading some precision and is worth it — so the paper now says to read the trend rather than the level, and to expect it to move both ways.',
    chapters: [
      {
        slug: 'observing-organizations',
        title: 'Observing Organizations',
        anchor: 'what-these-are-and-are-not',
      },
      { slug: 'where-to-start', title: 'Where to Start', anchor: 'what-to-expect' },
      {
        slug: 'the-ten-minute-version',
        title: 'The Ten-Minute Version',
        anchor: 'if-you-keep-one-sentence',
      },
    ],
  },
  {
    date: '2026-08-14',
    note: 'Added a way to get a printed copy, and small editorial changes.',
  },
  {
    date: '2026-06-30',
    note: "Where this started. The site was rebuilt, the blog archive moved across with its original links intact, and the paper begun. What you are reading now is the First Public Draft — it has changed a good deal since, and it will keep changing. I have stopped listing each revision here; the draft status on every chapter says what it is, and the paper is more useful open and evolving than it would be finished and quiet.",
  },
];
