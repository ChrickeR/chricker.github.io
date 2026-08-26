# Information Architecture — Project Canopy, Phase 1

## Primary navigation

Per the brief: Home / Blog / Organizational Flow / About / Contact — five items, small caps, no dropdowns. Nothing else appears in the header.

## Site map

```
/                                  Home
/blog/                             Archive — unchanged index (list, pagination)
/blog/archive/YYYY/                Year archives (2021, 2022, 2025, 2026)
/blog/category/<slug>/             Category pages
/blog/tags/                        Tag index
/blog/YYYY/MM/DD/<slug>/           Individual posts — URLs preserved verbatim (see below)

/organizational-flow/              Landing: Preface + table of contents (Parts I–IV)
/organizational-flow/<chapter>/    One page per chapter, flat slugs (see "Why flat slugs" below)
/organizational-flow/insights/<slug>/   Standalone Insight page (also surfaced as marginalia)
/organizational-flow/models/<slug>/     Standalone Model page (also surfaced as marginalia)
/organizational-flow/references/   Back-matter: sources and further reading
/organizational-flow/version-history/  Quiet changelog, footer-linked only

/about/                            Positioning per brief's suggested copy
/contact/
```

## Decisions and rationale

**Blog URLs are preserved byte-for-byte.** The archive is explicitly "untouched" per the brief, and five years of inbound links and search rankings point at `/blog/YYYY/MM/DD/slug/`. Only the build step changes (MkDocs → Astro); the path structure does not.

**Chapter slugs are flat, not nested under Part.** `/organizational-flow/gardening-organizations/` rather than `/organizational-flow/part-i/gardening-organizations/`. A book's parts are more likely to be reordered or renamed over the years than its chapters are to move between parts — flat slugs mean that kind of editorial change never breaks a permalink. Part membership is metadata (shown as a breadcrumb/kicker on the page), not part of the URL.

**Insights and Models get real URLs but no nav entry.** The brief is explicit that these are "tagged fragments surfaced contextually within chapters," not a menu of content types. Concretely: each Insight/Model is a content-collection entry with a `relatedChapters` field; the chapter template queries and renders matching entries as marginalia; the same entry also renders at its own permalink for direct linking and search. One piece of content, two presentations.

**References is one back-matter page, not per-article history.** Matches the Book Structure section's placement of "References" alongside "Version History" as back matter, not a top-level type.

## Legacy content — not migrated

The current site's sitemap includes a substantial second site living alongside the blog: `/services/`, `/products/`, `/product-framework/`, `/offerings/`, `/partners/`, `/techradar/`, `/system_landscape/`, `/adr/`, `/docs/product-framework/`, `/profile/`. This reads as an earlier attempt at positioning TROi as a consulting company with a product line — which the brief explicitly rejects ("I am not building a consulting company. I am an independent consultant.").

**Recommendation:** none of this migrates. It isn't blog content, so it falls outside the Content Strategy mandate to review "every article," and it actively contradicts the new positioning. Set up 301 redirects from the old URLs to the closest new equivalent (mostly `/` or `/about/`) so existing inbound links don't dead-end, then drop the content.

**Open question for you:** confirm this reading is correct before Phase 2 — i.e., that none of the services/products material should survive in any form (not even as archived blog-style posts).

## Open question: Swedish (`/sv/`)

The current site has a Swedish translation. Nothing in the brief's tech list (Astro, TypeScript, Markdown, Content Collections, SSG, Responsive, SEO, RSS, Search, Dark Mode, PDF) mentions i18n, and the blog corpus that was audited for content mapping is English-only. Recommend dropping `/sv/` for v1 and revisiting if there's demand — but flagging since removing a language edition is a real scope decision, not a default.
