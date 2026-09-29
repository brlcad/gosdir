import type { Project } from '../types';

export default {
  id: 'digirhythm',
  name: 'DigiRhythm',
  summary:
    'R package for analysing animal activity rhythms with functional-coupling, harmonic-power, actogram, and diurnality measures.',
  sponsor: 'Agroscope',
  agencyIds: ['ch-agroscope'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Scientific research',
  openSourceYear: 2022,
  license:
    'GPL-3.0-or-later (source grant; publiccode.yml inconsistently lists LGPL-3.0-only)',
  repository: 'https://github.com/agroscope-ch/digiRhythm',
  officialUrl: 'https://cran.r-project.org/web/packages/digiRhythm/index.html',
  evidenceUrl: 'https://doi.org/10.1016/j.softx.2025.102184',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['switzerland', 'agricultural research', 'animal welfare', 'r package'],
} satisfies Project;
