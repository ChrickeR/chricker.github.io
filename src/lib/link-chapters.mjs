// Turn the chapter mentions in each chapter's closing bridge line into links.
//
// Every chapter ends with a line like *Cultivating this: Growing What Cannot
// Be Installed, in Part III.* or *This cultivates: X and Y, in Part II.* On
// paper a reader can look those up in the contents. In a browser they should
// just be clickable.
//
// Scoped deliberately to that one closing paragraph rather than every mention
// of a chapter title anywhere in the prose — titles turn up constantly in
// ordinary sentences, and linking all of those would make more noise than it
// is worth.

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const CHAPTERS_DIR = join(process.cwd(), 'src', 'content', 'chapters');
const BRIDGE_RE = /^(Cultivating this:|This cultivates:)/;

/** slug -> title, straight from the frontmatter. */
function chapterTitles() {
  const map = new Map();
  for (const file of readdirSync(CHAPTERS_DIR)) {
    if (!file.endsWith('.md')) continue;
    const raw = readFileSync(join(CHAPTERS_DIR, file), 'utf8');
    const front = raw.split('---')[1] ?? '';
    const m = front.match(/\ntitle:\s*["'](.+?)["']\s*\n/);
    if (m) map.set(file.replace(/\.md$/, ''), m[1]);
  }
  return map;
}

// Longest first, so "A Closer Look at Something" wins over "A Closer Look".
function buildIndex() {
  return [...chapterTitles().entries()]
    .map(([slug, title]) => ({ slug, title }))
    .sort((a, b) => b.title.length - a.title.length);
}

/** Typographic apostrophes and dashes differ between source and render. */
function normalise(s) {
  return s.replace(/[‘’]/g, "'").replace(/[–—]/g, '-');
}

function textOf(node) {
  if (node.type === 'text') return node.value;
  if (node.children) return node.children.map(textOf).join('');
  return '';
}

function linkify(text, index, self) {
  const hay = normalise(text);
  let best = null;

  for (const { slug, title } of index) {
    if (slug === self) continue;
    const needle = normalise(title);
    const at = hay.indexOf(needle);
    if (at === -1) continue;
    if (best === null || at < best.at) best = { at, slug, len: needle.length };
  }

  if (!best) return [{ type: 'text', value: text }];

  const before = text.slice(0, best.at);
  const label = text.slice(best.at, best.at + best.len);
  const after = text.slice(best.at + best.len);

  const nodes = [];
  if (before) nodes.push({ type: 'text', value: before });
  nodes.push({
    type: 'element',
    tagName: 'a',
    properties: {
      href: `/organizational-flow/${best.slug}/`,
      className: ['chapter-ref'],
    },
    children: [{ type: 'text', value: label }],
  });
  // The rest of the run may hold further mentions — "This cultivates: X and
  // Y" names two.
  if (after) nodes.push(...linkify(after, index, self));
  return nodes;
}

/** Rewrites a paragraph's text nodes in place, descending into em/strong. */
function linkifyNode(node, index, self) {
  if (!node.children) return;
  const out = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      out.push(...linkify(child.value, index, self));
    } else if (child.type === 'element' && (child.tagName === 'em' || child.tagName === 'strong')) {
      linkifyNode(child, index, self);
      out.push(child);
    } else {
      out.push(child);
    }
  }
  node.children = out;
}

export function rehypeLinkChapters() {
  const index = buildIndex();

  return (tree, file) => {
    // The chapter being rendered should not link to itself.
    const self =
      file?.history?.[0]?.split('/')?.pop()?.replace(/\.md$/, '') ?? null;

    const visit = (node) => {
      if (!node.children) return;
      for (const child of node.children) {
        if (child.type === 'element' && child.tagName === 'p' && BRIDGE_RE.test(textOf(child).trim())) {
          linkifyNode(child, index, self);
          continue;
        }
        visit(child);
      }
    };

    visit(tree);
  };
}
