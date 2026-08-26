// The paper's identity. Lives here because it appears on the landing hero, the
// print cover, the Markdown export and the page title, and those four drifted
// apart the last time it changed.
export const paper = {
  title: 'Friction',
  subtitle: 'The Silent Killer',
  /** The line under the title everywhere it appears. */
  tagline: 'More Value From What You Already Have',
  /** Shown above the title. The theory keeps its own name. */
  eyebrow: 'A Working Theory of Organizational Flow',
  author: 'Christoffer Råsten',
  imprint: 'TROi — independent architecture and organizational design',
  edition: 'First Public Draft — August 2026',
  /** Short form for the per-chapter status chip in the table of contents. */
  editionShort: 'First Public Draft',
} as const;

export type ChapterStatus = 'published' | 'upcoming';

export interface ChapterEntry {
  slug: string;
  title: string;
  status: ChapterStatus;
  // A published chapter that's still a first pass — content is settled
  // enough to read, not yet settled enough to call finished.
  draft?: boolean;
}

export interface Part {
  id: 'I' | 'II' | 'III' | 'IV';
  title: string;
  /** The one question the Part answers — shown before its chapters. */
  question: string;
  /** Two or three lines bridging the question into the chapters. */
  intro: string[];
  chapters: ChapterEntry[];
}

const FIRST_DRAFT = { status: 'published', draft: true } as const;

// Canonical structure — single source of truth for the table of contents and
// for each chapter page's "Part" breadcrumb. Chapter markdown files only carry
// title/body; where a chapter lives is decided here, so reordering parts never
// means touching chapter frontmatter.
export const parts: Part[] = [
  {
    id: 'I',
    title: 'Discovering Organizational Flow',
    question: 'How much more could an organization create with exactly what it already has?',
    intro: [
      'Usually quite a lot, and almost never through more effort or more talent. What sits in the way is quieter than that, and it lives in the spaces between people, decisions and teams.',
      'This part is the why, and the frame. What that looks like from the inside, roughly what it is worth, the name I ended up giving the thing worth protecting — and the picture the rest of the paper keeps coming back to.',
    ],
    chapters: [
      { slug: 'introduction', title: 'Introduction', ...FIRST_DRAFT },
      { slug: 'what-friction-costs', title: 'The Cost of Value Never Created', ...FIRST_DRAFT },
      { slug: 'what-is-organizational-flow', title: 'What is Organizational Flow?', ...FIRST_DRAFT },
      { slug: 'we-stopped-building-machines', title: 'We Stopped Building Machines', ...FIRST_DRAFT },
      { slug: 'the-picture-i-keep-coming-back-to', title: 'The Picture I Keep Coming Back To', ...FIRST_DRAFT },
      { slug: 'what-a-capability-is', title: 'What a Capability Is, and Is Not', ...FIRST_DRAFT },
    ],
  },
  {
    id: 'II',
    title: 'Seeing Organizational Flow',
    question: 'What have I seen again and again, in places that had nothing else in common?',
    intro: [
      'Twenty-eight things I have watched repeat for twenty-five years. Observations rather than prescriptions — most of them were somebody\'s good idea first, which is exactly what makes them interesting.',
      'Nothing here tells you what to do about any of it — that comes next. The aim is narrower and more useful: to describe each one clearly enough that you start spotting it yourself, in your own building, without me.',
      'If a chapter makes you think "I have seen that", it has done its job.',
    ],
    chapters: [
      { slug: 'purpose', title: "Busy Toward Nothing in Particular", ...FIRST_DRAFT },
      { slug: 'ownership', title: "A Meeting Grew Here", ...FIRST_DRAFT },
      { slug: 'nobody-could-say-management-put-me-here', title: "Nobody Could Say Management Put Me Here", ...FIRST_DRAFT },
      { slug: 'a-tollbooth-on-a-road-with-a-bypass', title: "A Tollbooth on a Road With a Bypass", ...FIRST_DRAFT },
      { slug: 'capabilities', title: "What Survives the Reorg", ...FIRST_DRAFT },
      { slug: 'teams', title: "The Team That Has to Ask", ...FIRST_DRAFT },
      { slug: 'how-much-can-one-team-hold', title: "How Much Can One Team Hold", ...FIRST_DRAFT },
      { slug: 'people', title: "The Wait Nobody Logged", ...FIRST_DRAFT },
      { slug: 'nobody-opts-out-of-the-arithmetic', title: "Nobody Opts Out of the Arithmetic", ...FIRST_DRAFT },
      { slug: 'downstream-of-the-conditions', title: "Downstream of the Conditions", ...FIRST_DRAFT },
      { slug: 'it-shows-up-in-people-first', title: "It Shows Up in People First", ...FIRST_DRAFT },
      { slug: 'nobody-writes-down-the-cost-of-not-trusting', title: "Nobody Writes Down the Cost of Not Trusting", ...FIRST_DRAFT },
      { slug: 'everyone-left-agreeing', title: "Everyone Left Agreeing", ...FIRST_DRAFT },
      { slug: 'where-the-work-actually-happens', title: "Where the Work Actually Happens", ...FIRST_DRAFT },
      { slug: 'the-loop', title: "It Breaks in the Joints", ...FIRST_DRAFT },
      { slug: 'learning', title: "We Have Solved This Before", ...FIRST_DRAFT },
      { slug: 'the-half-life-of-knowledge', title: "The Half-Life of Knowledge", ...FIRST_DRAFT },
      { slug: 'no-incident-no-story', title: "No Incident, No Story", ...FIRST_DRAFT },
      { slug: 'value', title: "Everything Was Green", ...FIRST_DRAFT },
      { slug: 'organizations-as-systems', title: "It Grew Like That", ...FIRST_DRAFT },
      { slug: 'the-conditions-dont-come-in-the-box', title: "The Conditions Don't Come in the Box", ...FIRST_DRAFT },
      { slug: 'leadership', title: "Decided Upstairs, Felt Downstairs", ...FIRST_DRAFT },
      { slug: 'architecture', title: "The Long Way to a Yes", ...FIRST_DRAFT },
      { slug: 'interfaces', title: "You Have to Know a Guy", ...FIRST_DRAFT },
      { slug: 'the-detective-work', title: "The Detective Work at the Front of Everything", ...FIRST_DRAFT },
      { slug: 'an-interface-nobody-can-find', title: "An Interface Nobody Can Find", ...FIRST_DRAFT },
      { slug: 'everyone-carries-the-strictest-requirement', title: "Everyone Carries the Strictest Requirement", ...FIRST_DRAFT },
      { slug: 'technology', title: "Faster, and Still Wrong", ...FIRST_DRAFT },
      { slug: 'artificial-intelligence', title: "What AI Lands In", ...FIRST_DRAFT },
    ],
  },
  {
    id: 'III',
    title: 'Cultivating Organizational Flow',
    question: 'How do the conditions behind those patterns get cultivated?',
    intro: [
      'Each chapter picks up one of the patterns from Part II and asks what can actually be tended around it. Not a fix — conditions, which drift back the moment nobody is watching them.',
      'Very little of this looks like a programme. Most of it is small, unglamorous, and available to somebody on a Tuesday without asking anyone for permission first.',
      'The last two step back and take both halves whole: friction, which is cultivated by taking things away, and value, which is cultivated by contact.',
    ],
    chapters: [
      { slug: 'tending-what-grew', title: 'Tending What Grew', ...FIRST_DRAFT },
      { slug: 'growing-the-team', title: 'Growing the Team', ...FIRST_DRAFT },
      { slug: 'growing-what-cannot-be-installed', title: 'Growing What Cannot Be Installed', ...FIRST_DRAFT },
      { slug: 'drawing-the-line-around-a-team', title: 'Drawing the Line Around a Team', ...FIRST_DRAFT },
      { slug: 'ten-minutes-today', title: 'Ten Minutes Today', ...FIRST_DRAFT },
      { slug: 'leading-without-deciding', title: 'Leading Without Deciding', ...FIRST_DRAFT },
      { slug: 'equipping-not-reviewing', title: 'Equipping, Not Reviewing', ...FIRST_DRAFT },
      { slug: 'settling-the-few-things', title: 'Settling the Few Things', ...FIRST_DRAFT },
      { slug: 'we-have-a-data-model', title: 'Agreeing on What Things Mean', ...FIRST_DRAFT },
      { slug: 'opening-the-front-door', title: 'Opening the Front Door', ...FIRST_DRAFT },
      { slug: 'different-capabilities-different-conditions', title: 'Different Capabilities, Different Conditions', ...FIRST_DRAFT },
      { slug: 'multiplying-whats-there', title: "Multiplying What's There", ...FIRST_DRAFT },
      { slug: 'shared-infrastructure-shared-friction', title: 'When Shared Infrastructure Becomes Shared Friction', ...FIRST_DRAFT },
      { slug: 'owning-what-ai-cant', title: "Owning What AI Can't", ...FIRST_DRAFT },
      { slug: 'funding-what-doesnt-end', title: "Funding What Doesn't End", ...FIRST_DRAFT },
      { slug: 'closing-the-loop', title: 'Closing the Loop', ...FIRST_DRAFT },
      { slug: 'reducing-friction', title: 'Reducing Friction', ...FIRST_DRAFT },
      { slug: 'creating-value', title: 'Creating Value', ...FIRST_DRAFT },
    ],
  },
  {
    id: 'IV',
    title: 'Applying Organizational Flow',
    question: 'Where would you begin, with what is in front of you on Monday?',
    intro: [
      'Where to look first, how to measure both halves, what I have got wrong doing this, and what it looks like to work this way over years rather than quarters.',
      'Organizational Flow is a way of seeing rather than a template, which is the best thing about it. It stays a working theory, deliberately unfinished, and it gets better every time somebody argues with it.',
    ],
    chapters: [
      { slug: 'observing-organizations', title: 'Observing Organizations', ...FIRST_DRAFT },
      { slug: 'measuring-value', title: 'Measuring Value', ...FIRST_DRAFT },
      { slug: 'where-to-start', title: 'Where to Start', ...FIRST_DRAFT },
      { slug: 'what-goes-wrong', title: 'What Goes Wrong', ...FIRST_DRAFT },
      { slug: 'working-this-way', title: 'Working This Way', ...FIRST_DRAFT },
      { slug: 'seeing-it-where-you-are', title: 'Seeing It Where You Are', ...FIRST_DRAFT },
    ],
  },
];

export interface FrontMatterEntry {
  slug: string;
  title: string;
  draft?: boolean;
  /** Rendered by its own page rather than from a chapter markdown file. */
  page?: boolean;
}

// Sits between the Preface and Part I: part of the manuscript, but outside the
// chapter numbering, because none of it advances the argument. What's In It For
// Me and the Executive Summary were folded into the Introduction — three pieces
// were making the same case to the same reader three times. What remains here is
// only the account of where the argument came from, which a reader may skip.
export const frontMatter: FrontMatterEntry[] = [
  // First, deliberately. A paper this long is itself friction, and the paper
  // argues friction should be named rather than tolerated — so the whole
  // argument stands on its own page before anyone has to commit to the rest.
  { slug: 'the-ten-minute-version', title: 'The Ten-Minute Version', draft: true },
  { slug: 'a-personal-journey', title: 'A Personal Journey', draft: true },
  { slug: 'a-digital-awakening', title: 'A Digital Awakening', draft: true },
];

export function isFrontMatter(slug: string): boolean {
  return frontMatter.some((entry) => entry.slug === slug);
}

// Continuous 1-based numbering across the whole paper, so a chapter's number
// is derived rather than stored — adding or reordering a chapter renumbers
// everything automatically.
export function chapterNumber(slug: string): number | null {
  const published = parts.flatMap((part) => part.chapters.filter((c) => c.status === 'published'));
  const i = published.findIndex((c) => c.slug === slug);
  return i === -1 ? null : i + 1;
}

export interface AppendixEntry {
  slug: string;
  title: string;
  draft?: boolean;
  // The plain noun shown beside the entry in the contents, the way Part II and
  // Part III chapters carry their mechanism.
  topic?: string;
}

// The back matter, listed alongside the paper and carrying the same status.
export const appendix: AppendixEntry[] = [
  { slug: 'principles', title: 'Principles', draft: true },
  { slug: 'further-reading', title: 'Further Reading', draft: true },
  { slug: 'self-assessment', title: 'A Closer Look', draft: true, topic: 'Self-assessment' },
  { slug: 'sv', title: 'På svenska — Tiominutersversionen', draft: true },
  { slug: 'acknowledgments', title: 'Acknowledgments', draft: true },
  { slug: 'version-history', title: 'Version History' },
];

export function findChapterLocation(slug: string): { part: Part; chapter: ChapterEntry } | null {
  for (const part of parts) {
    const chapter = part.chapters.find((c) => c.slug === slug);
    if (chapter) return { part, chapter };
  }
  return null;
}

export function publishedChapterSlugs(): string[] {
  return parts.flatMap((part) => part.chapters.filter((c) => c.status === 'published').map((c) => c.slug));
}

// The order a reader moves through, cover to back: front matter, every
// published chapter in Part order, then the appendix. Prev/next nav walks this,
// so nothing in the paper is reachable only from the table of contents.
export function readingOrder(): { slug: string; title: string }[] {
  return [
    ...frontMatter.map((f) => ({ slug: f.slug, title: f.title })),
    ...parts.flatMap((part) =>
      part.chapters.filter((c) => c.status === 'published').map((c) => ({ slug: c.slug, title: c.title }))
    ),
    ...appendix.map((a) => ({ slug: a.slug, title: a.title })),
  ];
}

// Same reading order, narrowed to what actually has narration: the Preface
// (rendered on the landing page, not its own route, but still a slug in
// public/audio/) through the last Part IV chapter — no appendix, nothing
// without a matching MP3. Single source for both the print edition's player
// and each chapter page's own. Durations come from audio-durations.json,
// generated alongside the audio by scripts/audio-durations.py.
export function audioChapters(): { slug: string; title: string }[] {
  // Listening order, which is not the reading order. The Ten-Minute Version
  // leads: somebody who presses play wants the argument, and the Preface is
  // the background to it — useful second, not first. The book and the print
  // edition keep their own order, since a reader holding the paper can see
  // what is coming and skip; a listener cannot.
  const [lead, ...restOfFront] = frontMatter;
  return [
    { slug: lead.slug, title: lead.title },
    { slug: 'preface', title: 'Preface' },
    ...restOfFront.map((f) => ({ slug: f.slug, title: f.title })),
    ...parts.flatMap((part) =>
      part.chapters.filter((c) => c.status === 'published').map((c) => ({ slug: c.slug, title: c.title }))
    ),
  ];
}

// Walks the whole paper in Part order (skipping unwritten chapters) to find
// what a reader would turn to next — used for chapter-footer nav.
export function adjacentPublishedChapters(slug: string): { prev: { slug: string; title: string } | null; next: { slug: string; title: string } | null } {
  const published = readingOrder();
  const index = published.findIndex((c) => c.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? published[index - 1] : null,
    next: index < published.length - 1 ? published[index + 1] : null,
  };
}
