# Roadmap — Project Canopy

> **Completed.** Kept as a record of how the build was sequenced, not as a plan. The paper shipped its first public draft on 2026-06-30; what is current lives in the Version History appendix.

## Done

- **Phase 1** — Information Architecture, Content Strategy + Mapping, Design System basics. Signed off.
- **Phase 2** — Astro project scaffolded; Preface, Capabilities chapter, and its Insight built and verified (light/dark, mobile, forward links).
- **Phase 3, spec** — Navigation, Component Library, Editorial Guidelines, Illustration Style Guide, Astro Project Structure, Migration Strategy, SEO Strategy (this document set).

## Phase 3, build — technical scaffolding

Mechanical, no new prose required:

- Mobile nav label fix + skip link ([Navigation](04-navigation.md))
- `models` and `references` content collections + their routes
- `version-history/` page (currently a dead Footer link)
- Extract `TableOfContents.astro` and `ChapterLayout.astro` components
- Legacy-content and `/sv/` redirects via `astro.config.mjs`
- RSS + sitemap integrations

## Phase 3, build — content

Substantial writing effort, sequenced per [Migration Strategy](09-migration-strategy.md):

1. Migrate the 18-post blog archive verbatim + add forward-links
2. Finish Part I (Gardening Organizations, A Digital Awakening, A Personal Journey — the last two now split per your decision)
3. Finish Part II (best-sourced part; Information chapter is net-new)
4. Part III (Leadership and Friction are net-new)
5. Part IV (thinnest part — most net-new writing, done last so it can write *against* the vocabulary Parts II–III establish)
6. References back-matter page
7. First Model (recommend: Capabilities/Root System, since it has the clearest source material)

## Launch bar

Preface + one complete Part live (recommend Part II), everything else in the TOC marked "Coming." Cut DNS/GitHub Actions over only after spot-checking that migrated blog URLs resolve correctly.

## Post-launch (from the brief's tech list, not yet scoped)

- **Search** — not designed yet; revisit once there's enough chapter/insight/blog content that search is actually useful rather than decorative.
- **PDF export** — the Version History page's footer already has a placeholder for this per the brief's Organizational Flow Structure section; no design work started.
- **Remaining Models and illustrations** — one per Part is the Phase 3 target; expanding beyond that is ongoing, not a one-time milestone.

## Ongoing, not a phase

Version History gets an entry every time a chapter or Insight is added or substantially revised — this starts the moment the first chapter goes live, not after some later "documentation" pass.
