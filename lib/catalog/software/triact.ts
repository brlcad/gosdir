import type { Project } from '../types';

export default {
  id: 'triact',
  name: 'triact',
  summary:
    'R package for deriving cow lying duration, bouts, laterality, and activity measures from triaxial accelerometer data.',
  sponsor: 'Agroscope',
  agencyIds: ['ch-agroscope'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Scientific research',
  openSourceYear: 2023,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/agroscope-ch/triact',
  officialUrl: 'https://cran.r-project.org/web/packages/triact/index.html',
  evidenceUrl: 'https://doi.org/10.7717/peerj.17036',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['switzerland', 'agricultural research', 'animal welfare', 'r package'],
} satisfies Project;
