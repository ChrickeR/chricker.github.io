# SEO Strategy — Project Canopy, Phase 3

> **Completed.** Kept as a record. What is actually in place is the sitemap integration, the per-page descriptions, and the `noindex` on working pages — read those from the source rather than from here.

## Already in place from Phase 2

`site: 'https://troi.se'` is set in `astro.config.mjs`, giving every page a correct canonical URL for free. Chapter pages pull their meta description from the `dek` frontmatter field, Insight pages from `summary` — both wired into `BaseLayout`'s `description` prop already; no new work needed there, just keep filling those fields in as content is written.

## URL preservation is the SEO strategy for the blog

The single biggest SEO decision was made in the IA doc, not here: blog URLs carry over byte-for-byte. Five years of inbound links and indexed pages point at `/blog/YYYY/MM/DD/slug/`, and changing the build tool shouldn't cost that equity. Same logic extends to the legacy-content redirects in the [Migration Strategy](09-migration-strategy.md) — a 301 to `/` preserves link equity that a bare 404 would throw away.

## Needed for Phase 3

- **RSS feed** (`/blog/rss.xml`) via `@astrojs/rss`, sourced from the `blog` collection — explicit brief requirement, not yet built.
- **Sitemap** via `@astrojs/sitemap` — auto-includes every static route Astro generates, requires no per-page maintenance as chapters/insights/models get added over time.
- **OpenGraph/Twitter card images** — a real gap. Nothing in Phase 2 addresses this. Recommend a lightweight approach rather than custom art per page: one static OG image per Part (four total, reusing the Part-opener illustrations once they exist) plus one generic site-level OG image for Home/About/Contact/blog-index. Per-chapter or per-post custom OG images aren't worth the production cost at this stage — reuse the Part image and let the page title carry the specificity.
- **Structured data** — `Article` schema for blog posts (standard, low-effort, high-value for a five-year-old archive). `Book`/`Chapter` schema.org types for the Organizational Flow pages are a nice-to-have, not blocking; revisit once the book has enough chapters live that rich-result treatment in search actually matters.

## Deliberately not doing

No keyword-driven rewriting of chapter/Insight prose. The Editorial Guidelines already set the voice; optimizing chapter titles or opening sentences for search terms would fight that directly, and the brief's whole thesis is that this is a book, not a lead-generation site. SEO here means "don't lose what the blog already earned" and "make the RSS/sitemap plumbing correct," not "write for search."
