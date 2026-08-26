// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import { rehypeLinkChapters } from './src/lib/link-chapters.mjs';
import { rehypeOrderLinks } from './src/lib/order-links.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://troi.se',

  markdown: {
    rehypePlugins: [rehypeLinkChapters, rehypeOrderLinks],
  },

  // Legacy "consulting company" pages and the Swedish edition are retired,
  // not migrated (see docs/09-migration-strategy.md). Astro's dynamic
  // redirects require the destination to carry the same param as the
  // source, so a true catch-all-to-fixed-target isn't possible — this is
  // the explicit list of legacy URLs from the live troi.se sitemap instead.
  // These generate real static redirect pages, which works on GitHub Pages
  // without a server.
  redirects: {
    '/adr': '/',
    '/organizational-flow/references': '/organizational-flow/acknowledgments/',
    '/docs/product-framework/architecture-as-code': '/',
    '/docs/product-framework/target-architecture': '/',
    '/offerings': '/',
    '/partners': '/',
    '/partners/customers': '/',
    '/product-framework/architecture-as-code': '/',
    '/product-framework/architecture-decision-records': '/',
    '/product-framework/system-inventory': '/',
    '/product-framework/target-architecture': '/',
    '/product-framework/tech-radar': '/',
    '/products': '/',
    '/products/architecture-as-code': '/',
    '/products/architecture-as-code/adr': '/',
    '/products/architecture-as-code/adr/log4brains': '/',
    '/products/architecture-as-code/tech-radar': '/',
    '/products/architecture-as-code/tech-radar/blips/expo': '/',
    '/products/architecture-as-code/tech-radar/blips/react-navigation': '/',
    '/products/architecture-as-code/tech-radar/blips/typescript-react-native': '/',
    '/products/intelligence/tech_intelligence': '/',
    '/products/target-architecture': '/',
    '/profile': '/about/',
    '/profile/eng_cv': '/about/',
    '/profile/swe-cv': '/about/',
    '/services': '/',
    '/services/chief-architect': '/',
    '/services/engineering-manager': '/',
    '/services/interim-cio-cto': '/',
    '/services/solution-architect': '/',
    '/services/sub/advisory/advisory': '/',
    '/services/sub/interim/interim': '/',
    '/services/sub/leadership': '/',
    '/services/sub/operating_models/operating_models': '/',
    '/services/sub/solutions': '/',
    '/sv': '/',
    '/system_landscape/system-landscape': '/',
    '/techradar': '/',

    // Organizational Principles was retired as a standalone chapter — its
    // content was always a synthesis of what's argued in full elsewhere,
    // and the Principles appendix already does that consolidating job.
    '/organizational-flow/organizational-principles': '/organizational-flow/principles/',

    // Gardening Organizations became Cultivating Teams, then Growing the
    // Team — points straight at the current page rather than chaining
    // through a retired stop along the way.
    '/organizational-flow/gardening-organizations': '/organizational-flow/growing-the-team/',

    // Part IV was split so that reducing friction and increasing value are
    // separate chapters, and the closing chapter now says what it is about.
    '/organizational-flow/improving-flow': '/organizational-flow/reducing-friction/',
    '/organizational-flow/seeing-through-the-lens': '/organizational-flow/working-this-way/',

    // What's In It For Me and the Executive Summary were folded into the
    // Introduction. All three were making the same case to the same reader.
    '/organizational-flow/whats-in-it-for-me': '/organizational-flow/introduction/',
    '/organizational-flow/executive-summary': '/organizational-flow/introduction/',

    // Parts II and III were rebuilt so each chapter answers one question:
    // Part II describes a condition, Part III describes how it is cultivated.
    // Direction and Ownership split; Teams absorbed Where the Competence Lives;
    // Guardrails and Cultivating Teams were renamed for what they now do.
    '/organizational-flow/direction-and-ownership': '/organizational-flow/ownership/',
    '/organizational-flow/teams-around-capabilities': '/organizational-flow/teams/',
    '/organizational-flow/where-the-competence-lives': '/organizational-flow/teams/',
    '/organizational-flow/cultivating-teams': '/organizational-flow/growing-the-team/',
    '/organizational-flow/guardrails': '/organizational-flow/settling-the-few-things/',

    // Observing Organizations and Questions Worth Asking were the same
    // chapter told twice — once as a number, once as a question. Merged so
    // each of the four conditions appears once, with both depths together.
    '/organizational-flow/questions-worth-asking': '/organizational-flow/observing-organizations/',
  },

  integrations: [
    sitemap({
      // Hidden pages: reachable only if you already have the URL, never
      // listed anywhere on the site and never surfaced to search engines.
      filter: (page) =>
        !page.includes('/organizational-flow/two-voices/') &&
        // The print edition duplicates every chapter — useful to reach, not to index.
        !page.includes('/organizational-flow/print/'),
    }),
  ],
});