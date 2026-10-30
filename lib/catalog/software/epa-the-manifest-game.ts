import type { Project } from '../types';

export default {
  id: 'epa-the-manifest-game',
  name: 'The Manifest Game',
  summary:
    'An interactive decision tree that guides hazardous-waste e-Manifest users to relevant process information.',
  sponsor: 'U.S. Environmental Protection Agency, e-Manifest program',
  agencyIds: ['us-epa'],
  geography: 'United States federal hazardous-waste manifesting',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental compliance',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/USEPA/the-manifest-game',
  officialUrl: 'https://usepa.github.io/the-manifest-game/',
  evidenceUrl: 'https://github.com/USEPA/the-manifest-game/blob/main/README.md',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'e-manifest', 'hazardous waste', 'decision support'],
} satisfies Project;
