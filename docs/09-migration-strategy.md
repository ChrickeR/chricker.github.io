# Migration Strategy — Project Canopy, Phase 3

> **Completed.** The blog archive was migrated with its original URLs intact and the redirects are in `astro.config.mjs`. Kept as a record of how it was done.

## Blog archive

Copy all 18 posts into `src/content/blog/` as Markdown, preserving frontmatter (title, date, tags, categories) and, critically, the exact slugs — the route in [Astro Project Structure](08-astro-project-structure.md) (`blog/[...slug].astro`) is built specifically to reproduce `/blog/YYYY/MM/DD/slug/` byte-for-byte. This is a copy, not a rewrite: the archive is explicitly untouched per the brief. The only edit any post gets is the one-line forward-link (see [Editorial Guidelines](06-editorial-guidelines.md)) on the 13 posts that feed a chapter or Insight, per the mapping table in [Content Strategy](02-content-strategy-and-mapping.md).

Order of operations: migrate the archive *before* writing new chapters, not after. The forward-links point from blog posts to chapters, so a chapter needs to exist (even as a stub) before its incoming links make sense to add.

## Legacy content retirement

Per your sign-off: `/services/`, `/products/`, `/product-framework/`, `/offerings/`, `/partners/`, `/techradar/`, `/system_landscape/`, `/adr/`, `/docs/product-framework/`, `/profile/` and their subpaths are retired, not migrated. Mechanism: Astro's `redirects` config in `astro.config.mjs` generates real static HTML redirect pages, which works on GitHub Pages without a server — each old URL gets a small page with `<meta http-equiv="refresh">` and a canonical link pointing at `/` (or `/about/` for `/profile/` specifically, since that's the closest semantic match). This preserves whatever search/backlink equity those pages accumulated instead of letting them 404.

## Swedish (`/sv/`)

Same treatment as the legacy content: redirect `/sv/` to `/`, don't migrate the translation. Per your sign-off, dropped for v1.

## Chapter-writing order

From the coverage-gap analysis in [Content Strategy](02-content-strategy-and-mapping.md), in priority order:

1. **Finish the three direct-source chapters** — Gardening Organizations and A Digital Awakening (Part I), both still unwritten past their source posts; Capabilities (Part II) is done.
2. **A Personal Journey** (Part I) — per your call to split this out from A Digital Awakening rather than merge them; needs original writing since the source post covers both ideas at once today.
3. **Rest of Part II** — the best-sourced part overall (Purpose, Ownership, People, Decisions, Execution, Learning all have at least Insight-level material to curate up from). Information has zero source material — full new chapter, budget accordingly.
4. **Part III** — Architecture has two source posts to draw from; Artificial Intelligence has the strongest single source (Cheap Code Gets Expensive Fast) of any chapter in the book. Leadership and Friction have nothing — new writing.
5. **Part IV** — thinnest part, fragments only, none landing squarely. Budget the most net-new writing time here, last, once the vocabulary from Parts II–III exists to write Part IV *against*.
6. **References page** — populate from the four framework-explainer posts (DORA, Tech Radar, OKR, digital-transformation glossary) once their home chapters exist to link back to them.
7. **Models** — at least one per Part, per the [Illustration Style Guide](07-illustration-style-guide.md); the Capabilities chapter's card-game anecdote is the natural first one to build out (Root System family, Part II).

## Launch gating

The book does not need all 21 chapters before going live — the TOC already renders "Coming" for unwritten chapters (built in Phase 2), and a Living Book that visibly grows is the stated design intent, not a temporary state to hide. Recommended launch bar: Preface + at least one complete Part (suggest Part II, since it has the most source material) live, everything else marked Coming. Cut over DNS/GitHub Actions only after the blog archive migration is verified — spot-check that old inbound links and any indexed Google results still resolve correctly through the new build.
