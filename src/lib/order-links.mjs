// Turn `[A printed copy](order:)` in a chapter into a link that opens the
// order dialog in place, rather than sending the reader to the landing page
// to look for the button themselves.
//
// Done at render time rather than as raw HTML in the markdown for two
// reasons. scripts/generate-audio.py strips markdown but not HTML tags, so an
// inline <a> would be read out loud, angle brackets and all. And the print
// edition prints each link's href after it, so the anchor still needs a real
// URL for anyone holding the paper version.
//
// The `order:` target is a sentinel: it never reaches the browser. It is
// rewritten here to the canonical paper URL plus the data attribute
// OrderDialog.astro binds its click handler to.

const SENTINEL = 'order:';
const HREF = '/organizational-flow/';

export function rehypeOrderLinks() {
  return (tree) => {
    const visit = (node) => {
      if (!node.children) return;
      for (const child of node.children) {
        if (
          child.type === 'element' &&
          child.tagName === 'a' &&
          child.properties?.href === SENTINEL
        ) {
          child.properties.href = HREF;
          child.properties['data-open-order'] = true;
        }
        visit(child);
      }
    };
    visit(tree);
  };
}
