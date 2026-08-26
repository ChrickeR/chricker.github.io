# Navigation — Project Canopy, Phase 3

Phase 2 built the primary nav (Home / Blog / Organizational Flow / About / Contact) and proved it out on desktop. Two problems only showed up once real content and a real viewport were involved — this doc locks the fix for both, plus the wayfinding patterns for the parts of the book that didn't exist yet in Phase 2.

## Primary nav — mobile fix

At 375px, "Organizational Flow" wraps to two lines and crowds the theme toggle (see Phase 2 verification screenshots). Two options: a hamburger menu, or abbreviated labels. **Recommendation: abbreviated labels, no hamburger.** A hamburger hides the nav behind an interaction — the brief asks for "almost invisible navigation," not hidden navigation; five quiet text links that are always present is more in keeping with the calm-editorial goal than a menu icon. Below a `680px` breakpoint:

| Full (desktop) | Abbreviated (mobile) |
|---|---|
| Home | Home |
| Blog | Blog |
| Organizational Flow | Flow |
| About | About |
| Contact | Contact |

"Flow" alone reads fine in context — the wordmark, hero, and every page under that link already say "Organizational Flow" in full within the first screen.

## Chapter wayfinding

No breadcrumb trail. The kicker above the chapter title ("Part II — Understanding Flow") *is* the breadcrumb — it's how the Capabilities chapter already orients the reader in Phase 2, and a second wayfinding element on top of it would be noise. Add one thing Phase 2 didn't need with only one live chapter: **prev/next chapter links** in the chapter footer once a second chapter exists, ordered per `book-structure.ts`, silently skipping "Coming" chapters until they're written. Quiet text, not buttons — same visual weight as the Version History link already in the footer.

## Marginalia is not navigation

Insights in the margin are content, not wayfinding — no `nav` landmark, no `aria-current`. They already render as `<aside>` in `Marginalia.astro`, which is correct; keep it that way as more content types (Models) get the same treatment.

## Table of contents

The Organizational Flow landing page TOC (built inline in Phase 2) is the only place all chapters are listed together. It won't appear again in the primary nav or anywhere else — per the brief, Insights/Models never get their own nav-level menu, and neither does a second index of chapters. One spine, one table of contents.

## Accessibility — gap from Phase 2

No skip-to-content link exists yet. Every page has a header with five-plus links before `<main>` — add `<a class="skip-link" href="#main">Skip to content</a>` as the first focusable element, visually hidden until focused. Small fix, in-scope for the Phase 3 build pass rather than a separate phase.

## Footer

**Revised.** Phase 2/3 kept this to a label, an optional folio, and a single Version History link, on the theory that the footer should stay a quiet close rather than become a sitemap. That held while there was one back-matter page. By the time References, Acknowledgments, Further Reading, and Principles all existed alongside Version History, most of them had no path to be discovered at all — only Acknowledgments and Further Reading were reachable, and only because they happened to cross-link each other.

The footer now lists all five back-matter pages (Principles, References, Acknowledgments, Further Reading, Version History) as quiet text links, same visual weight as before — this is still not a full sitemap (primary nav, chapters, blog, About/Contact stay out of it), just the one category of page that has no other route in.
