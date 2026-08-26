import type { Part } from './book-structure';

export type OpenerFamily = 'Garden' | 'Root System' | 'Canopy' | 'Hillside';

// Which Parts have a drawn opener. Only families with artwork in
// PartOpener.astro belong here — see docs/07-illustration-style-guide.md.
// Shared so the chapter pages and the print edition can't disagree about it.
export const partOpener: Partial<Record<Part['id'], OpenerFamily>> = {
  I: 'Garden',
  II: 'Root System',
  III: 'Canopy',
  IV: 'Hillside',
};
