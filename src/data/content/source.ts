import type { SourceReference } from '../../types/content';

export const factsSource = (...sections: string[]): SourceReference => ({
  document: 'docs/FACTS.md',
  sections,
});
