# Component Library — Project Canopy, Phase 3

Every component below either exists in the Phase 2 codebase (marked **Built**) or is needed to complete the site (marked **Needed**). Nothing is speculative — each "Needed" entry maps to a page in the Information Architecture that doesn't exist yet.

## Built in Phase 2

**Header** (`src/components/Header.astro`) — wordmark + primary nav + theme toggle. `aria-current="page"` on the active link. Needs the mobile-label fix from [Navigation](04-navigation.md).

**Footer** (`src/components/Footer.astro`) — `label` + optional `folio` props. Used identically on Home, the Organizational Flow landing page, and chapter pages.

**Hero** (`.hero` in `global.css`) — kicker, H1, lede, horizon rule, radial gold glow. Used on Home and the Organizational Flow landing page only. **Not used on chapter pages** — a chapter opens straight into its kicker + H2. This was a deliberate Phase 2 choice worth confirming as the standing rule: a hero resets the reader's attention, which is right for an entry point and wrong for the 19th page of a book someone is already reading.

**Marginalia** (`src/components/Marginalia.astro`) — label / title (links to standalone page) / summary text. Multiple instances stack with `2rem` gap (`.marginalia + .marginalia`). Positioned via `.marginalia-col { position: sticky }` on desktop, static stack on mobile.

**Reading block** (`.block`, `.chapter`) — the `46rem` prose column and chapter heading style.

**Chapter divider** (`.chapter-divider`) — 1px hairline, used once on the Organizational Flow landing page between Preface and the table of contents.

## Needed for Phase 3 build

**TableOfContents** — currently written inline in `organizational-flow/index.astro`. Extract into its own component before adding Models/References, since the same part/chapter-grouping logic will otherwise get duplicated. Props: `parts` (from `book-structure.ts`). States: published (linked) vs. upcoming (`.is-upcoming`, "Coming" tag) — already designed, just needs extracting.

**ChapterLayout** — currently the grid-row/marginalia branching logic lives directly in `organizational-flow/[...slug].astro`. Extract once there are enough chapters that copy-pasting this logic becomes a real risk (recommend: as soon as the second chapter is written).

**PostCard** — for the restyled `/blog/` index and archive/category/tag listing pages. Needed fields from the existing MkDocs frontmatter: title, date, excerpt, tags. Visual treatment: title in Fraunces, date + tags in Space Mono kicker style — same type roles as everywhere else, just in list form. No thumbnail images (the blog has never had them; don't introduce a new content requirement during a migration).

**Model page** — same shape as the Insight standalone page (`insights/[...slug].astro`) but with one large illustration slot at the top, per the [Illustration Style Guide](07-illustration-style-guide.md). Needs its own `models` content collection (schema mirrors `insights`: title, relatedChapters, summary, plus an `illustration` field).

**Reference list item** — for the single `/organizational-flow/references/` back-matter page. Simpler than a Model or Insight: title, one-line description, external or internal link. No standalone page per reference — this is a bibliography, not a content type with its own permalinks (confirmed in [Information Architecture](01-information-architecture.md)).

**Skip link** — see [Navigation](04-navigation.md). Visually-hidden-until-focus utility, not really a "component" but belongs in this inventory since it's new markup in `BaseLayout.astro`.

## Explicitly not building

**Buttons.** Nothing in the Phase 2 build uses a filled/bordered button except the theme toggle, and that's a utility control, not a call-to-action. Keep it that way — every link-like action (nav, TOC entries, "related reading," prev/next chapter) stays a text link with the same underline-on-hover treatment. Introducing a button component would be the first "card/CTA" language the site has, and it cuts against "almost invisible navigation."

**Cards for chapters/insights.** The TOC lists chapters as plain rows, not cards, and marginalia is a sidebar note, not a card. No boxed/bordered content unit exists anywhere in the Phase 2 design system (`docs/03-design-system.md` — "no cards, no boxes, no background-color blocks"). Don't introduce one for blog post previews either — `PostCard` above is named for the data shape, not a visual card treatment; render it as a list row like the TOC, not a bordered tile.
