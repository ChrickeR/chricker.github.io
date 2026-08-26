#!/usr/bin/env node
/**
 * Pre-publish report for Organizational Flow.
 *
 * Checks structural integrity and terminology drift across the manuscript
 * before anything ships. Exits non-zero on errors so it can gate a build;
 * warnings are reported but do not fail.
 *
 *   node scripts/check.mjs          full report
 *   node scripts/check.mjs --quiet  errors and warnings only
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const CHAPTERS = join(ROOT, 'src/content/chapters');
const INSIGHTS = join(ROOT, 'src/content/insights');
const quiet = process.argv.includes('--quiet');

const errors = [];
const warnings = [];
const notes = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

// ---------- load ----------
const terminology = JSON.parse(readFileSync(join(ROOT, 'scripts/terminology.json'), 'utf8'));

const structureSrc = readFileSync(join(ROOT, 'src/data/book-structure.ts'), 'utf8');
// Everything from `parts` down to chapterNumber() describes manuscript pages:
// the four Parts and the front matter between the Preface and Part I. The
// appendix sits below that boundary and must not be mistaken for a chapter.
const partsBlock = structureSrc.slice(
  structureSrc.indexOf('export const parts'),
  structureSrc.indexOf('export function chapterNumber'),
);
const structure = [...partsBlock.matchAll(/\{[^{}]*?slug:\s*'([^']+)'[^{}]*?\}/g)]
  // `page: true` marks front matter rendered by its own .astro page, which has
  // no markdown file and therefore no title to compare against.
  .filter((m) => !/page:\s*true/.test(m[0]))
  .map((m) => ({ slug: m[1], title: (m[0].match(/title:\s*'([^']+)'|title:\s*"([^"]+)"/) || [])[1] ?? '' }));

function parse(file) {
  const raw = readFileSync(file, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const body = fm ? raw.slice(fm[0].length) : raw;
  const meta = {};
  if (fm) {
    for (const line of fm[1].split('\n')) {
      const m = line.match(/^(\w+):\s*(.*)$/);
      if (m) meta[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
  return { raw, body, meta, slug: basename(file, '.md') };
}

const chapterFiles = readdirSync(CHAPTERS).filter((f) => f.endsWith('.md'));
const chapters = chapterFiles.map((f) => parse(join(CHAPTERS, f)));
const byslug = new Map(chapters.map((c) => [c.slug, c]));

// ---------- 1. structure integrity ----------
for (const { slug, title } of structure) {
  if (!byslug.has(slug)) err(`structure: "${title}" (${slug}) has no markdown file`);
}
const inStructure = new Set(structure.map((s) => s.slug));
for (const c of chapters) {
  if (c.slug === 'preface') continue;
  if (!inStructure.has(c.slug)) err(`structure: ${c.slug}.md is not placed in book-structure.ts`);
}
const dupes = structure.map((s) => s.slug).filter((s, i, a) => a.indexOf(s) !== i);
for (const d of new Set(dupes)) err(`structure: ${d} appears more than once`);

// ---------- 2. metadata ----------
for (const c of chapters) {
  if (!c.meta.title) err(`metadata: ${c.slug} is missing a title`);
  if (!c.meta.dek) warn(`metadata: ${c.slug} is missing a dek`);
  if (c.meta.title && c.slug !== 'preface') {
    const declared = structure.find((s) => s.slug === c.slug)?.title;
    if (declared && declared !== c.meta.title) {
      err(`metadata: ${c.slug} title "${c.meta.title}" ≠ structure title "${declared}"`);
    }
  }
}

// ---------- 3. heading hierarchy ----------
for (const c of chapters) {
  const heads = [...c.body.matchAll(/^(#{1,6})\s+(.*)$/gm)].map((m) => ({ lvl: m[1].length, text: m[2] }));
  if (heads.some((h) => h.lvl === 1)) {
    err(`headings: ${c.slug} uses an H1 — the chapter title already supplies it`);
  }
  let prev = 1;
  for (const h of heads) {
    if (h.lvl > prev + 1) warn(`headings: ${c.slug} jumps H${prev}→H${h.lvl} at "${h.text.slice(0, 40)}"`);
    prev = h.lvl;
  }
}

// ---------- 4. internal links ----------
const slugRe = /\/organizational-flow\/([a-z0-9-]+)\//g;
const appendix = new Set([
  'principles', 'acknowledgments', 'further-reading',
  'self-assessment', 'version-history', 'print',
  'two-voices', 'editorial-review', 'insights', 'sv',
]);
for (const c of chapters) {
  for (const m of c.body.matchAll(slugRe)) {
    const target = m[1];
    if (!byslug.has(target) && !appendix.has(target)) {
      err(`link: ${c.slug} points at /organizational-flow/${target}/ which does not exist`);
    }
  }
}

// ---------- 5. cross-references by name ----------
const titles = new Map(structure.map((s) => [s.title, s.slug]));
for (const c of chapters) {
  const numeric = c.body.match(/\b[Cc]hapter\s+\d+\b/g);
  if (numeric) {
    err(`xref: ${c.slug} uses numeric ${numeric.join(', ')} — use the chapter name, numbering shifts`);
  }
}

// ---------- 6. insights ----------
if (existsSync(INSIGHTS)) {
  for (const f of readdirSync(INSIGHTS).filter((x) => x.endsWith('.md'))) {
    const i = parse(join(INSIGHTS, f));
    const rel = i.meta.relatedChapters || '';
    for (const target of [...rel.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1])) {
      if (!byslug.has(target)) err(`insight: ${i.slug} relates to "${target}" which is not a chapter`);
    }
    if (!i.meta.summary) warn(`insight: ${i.slug} has no summary`);
    if (!i.body.trim()) warn(`insight: ${i.slug} has no body — the detail page will be empty`);
  }
}

// ---------- 7. acknowledgments ----------
const ack = readFileSync(join(ROOT, 'src/data/acknowledgments.ts'), 'utf8');
for (const m of ack.matchAll(/chapterSlug:\s*'([^']+)'/g)) {
  if (!byslug.has(m[1])) err(`acknowledgments: chapterSlug "${m[1]}" is not a chapter`);
}

// ---------- 8. terminology ----------
// Insights are reader-facing too — scan them with the chapters.
const insightDocs = existsSync(INSIGHTS)
  ? readdirSync(INSIGHTS).filter((f) => f.endsWith('.md')).map((f) => parse(join(INSIGHTS, f)))
  : [];
for (const c of [...chapters, ...insightDocs]) {
  for (const concept of terminology.concepts) {
    for (const wrong of concept.wrong || []) {
      if (c.body.includes(wrong)) {
        warn(`term: ${c.slug} uses "${wrong}" — canonical is "${concept.canonical}"`);
      }
    }
  }
  const allow = new Set(terminology.spelling.allow || []);
  for (const [brit, amer] of terminology.spelling.pairs) {
    if (allow.has(brit)) continue;
    const re = new RegExp(`\\b${brit}\\w*`, 'gi');
    const hits = c.body.match(re);
    if (hits) warn(`spelling: ${c.slug} uses "${hits[0]}" — the paper uses "${amer}"`);
  }
}

// ---------- 9. reading time ----------
let total = 0;
for (const c of chapters) {
  const words = c.body.split(/\s+/).filter(Boolean).length;
  total += words;
  if (words < 150 && c.slug !== 'preface') warn(`length: ${c.slug} is only ${words} words`);
}

// ---------- 10. reader's note is mirrored into the audio script ----------
// The note is read aloud at the head of the Preface's narration, and the
// generator can't import TypeScript, so the copy lives in two places. Compare
// them here rather than trusting anyone to remember.
{
  const noteSrc = readFileSync(join(ROOT, 'src/data/reader-note.ts'), 'utf8');
  const audioSrc = readFileSync(join(ROOT, 'scripts/generate-audio.py'), 'utf8');
  const strings = (block, re) =>
    [...block.matchAll(re)].map((m) => (m[1] ?? m[2] ?? '').replace(/\\'/g, "'").trim());

  const noteBlock = noteSrc.slice(noteSrc.indexOf('readerNote'));
  const fromTs = strings(noteBlock, /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g).filter((s) => s.length > 40);

  const audioStart = audioSrc.indexOf('READER_NOTE = [');
  const audioBlock = audioSrc.slice(audioStart, audioSrc.indexOf(']', audioStart));
  const fromPy = strings(audioBlock, /"((?:[^"\\]|\\.)*)"/g).filter((s) => s.length > 40);

  if (fromTs.length !== fromPy.length) {
    err(`reader's note: ${fromTs.length} paragraphs in reader-note.ts but ${fromPy.length} in generate-audio.py`);
  } else {
    fromTs.forEach((p, i) => {
      if (p !== fromPy[i]) err(`reader's note: paragraph ${i + 1} differs between reader-note.ts and generate-audio.py`);
    });
  }
}

// ---------- report ----------
const WPM = 220;
notes.push(`${chapters.length} chapter files, ${structure.length} placed in structure`);
notes.push(`${total.toLocaleString()} words · ~${Math.round(total / WPM)} min read`);

const line = (s) => console.log(s);
line('');
line('  Organizational Flow — pre-publish report');
line('  ' + '─'.repeat(46));
if (!quiet) for (const n of notes) line(`  · ${n}`);
line('');
if (errors.length) {
  line(`  ${errors.length} error${errors.length > 1 ? 's' : ''}`);
  for (const e of errors) line(`    ✗ ${e}`);
  line('');
}
if (warnings.length) {
  line(`  ${warnings.length} warning${warnings.length > 1 ? 's' : ''}`);
  for (const w of warnings) line(`    ! ${w}`);
  line('');
}
if (!errors.length && !warnings.length) line('  Clean. Nothing to fix.\n');
else if (!errors.length) line('  No errors. Warnings are advisory.\n');

process.exit(errors.length ? 1 : 0);
