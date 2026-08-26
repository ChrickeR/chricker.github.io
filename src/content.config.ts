import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chapters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chapters' }),
  schema: z.object({
    title: z.string(),
    dek: z.string().optional(),
    // The plain noun for what the chapter is about — Ownership, Capabilities,
    // Leadership. Part II titles are written to make a reader curious, which
    // costs navigability: someone sent to "the ownership chapter" cannot find
    // it by scanning. This carries the subject so the title doesn't have to.
    topic: z.string().optional(),
    // Which of the four indicators from What Friction Costs this chapter works
    // on. That chapter promises the four are the spine of the paper; this is
    // what makes the promise visible rather than something the reader has to
    // reconstruct.
    indicator: z
      .enum(['Ownership clarity', 'Handoff loss', 'Decision latency', 'Learning cycle time', 'All four'])
      .optional(),
    // Which half of the proposition the chapter is doing. Reducing friction
    // makes an organization produce more; creating value makes it produce the
    // right things. Rendered on the same line as the indicator above.
    effect: z.enum(['Reduces friction', 'Creates value', 'Both']).optional(),
    // Quiet, per-chapter research annotations — where an idea traces back to
    // established work, or where this paper's own thinking is what's new.
    editorNotes: z.array(z.string()).optional(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    label: z.string().default('Insight'),
    relatedChapters: z.array(z.string()),
    summary: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Set only on posts whose idea is developed further in the paper —
    // the one quiet forward-link the brief allows the untouched archive to carry.
    // Only the slug matters. The link's wording is resolved from
    // book-structure at build time, so a retitle can't leave the archive
    // naming a chapter that no longer goes by that name. `label` is kept as
    // a fallback for a slug the structure doesn't know about.
    developedIn: z.object({ chapterSlug: z.string(), label: z.string().optional() }).optional(),
  }),
});

export const collections = { chapters, insights, blog };
