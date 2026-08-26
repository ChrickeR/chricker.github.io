// The two tags a chapter carries: which half of the proposition it works on,
// and which of the four indicators it moves.
//
// The indicator colours are the same tokens the self-assessment radar uses, so
// a reader who has taken the assessment meets the same colour on the chapter
// that would improve their weakest score.

/** Which half — matches the `effect` field in the chapters schema. */
export const effectTone: Record<string, string> = {
  'Reduces friction': 'tone-friction',
  'Creates value': 'tone-value',
  Both: 'tone-both',
};

/** Which indicator — matches the `indicator` field, and the assessment's KPI keys. */
export const indicatorTone: Record<string, string> = {
  'Ownership clarity': 'tone-own',
  'Handoff loss': 'tone-hand',
  'Decision latency': 'tone-dec',
  'Learning cycle time': 'tone-learn',
  'All four': 'tone-all',
};

/**
 * What a tag should actually say on the page.
 *
 * The stored values are shorthand for the frontmatter — "Both", "All four" —
 * and shorthand is only legible to whoever wrote it. A reader meeting a chip
 * marked ALL FOUR has no way to know what four. So the shorthand expands into
 * the things it stands for, and each stands as its own chip.
 */
export function effectLabels(effect?: string): string[] {
  if (!effect) return [];
  if (effect === 'Both') return ['Reduces friction', 'Creates value'];
  return [effect];
}

export function indicatorLabels(indicator?: string): string[] {
  if (!indicator) return [];
  if (indicator === 'All four') {
    return ['Ownership clarity', 'Handoff loss', 'Decision latency', 'Learning cycle time'];
  }
  return [indicator];
}
