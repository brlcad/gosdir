import type { Project } from '../types';

export default {
  id: 'aquamet-bio',
  name: 'aquametBio',
  summary:
    'EPA R package for fish, macroinvertebrate, and zooplankton metrics and indices used in national lakes and rivers assessments.',
  sponsor:
    'U.S. Environmental Protection Agency, Center for Public Health and Environmental Assessment',
  agencyIds: ['us-epa-cphea'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2024,
  license: 'CC0 (package-authored software; external data not assumed covered)',
  repository: 'https://github.com/USEPA/aquametBio',
  officialUrl: 'https://assessments.epa.gov/risk/document/%26deid%3D365262',
  evidenceUrl:
    'https://github.com/USEPA/aquametBio/commit/bcb7645712b633540c6a1239144fd0d1af2d1d96',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['epa', 'water quality', 'biological metrics', 'r package'],
} satisfies Project;
