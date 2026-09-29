import type { Project } from '../types';

export default {
  id: 'shinygouv',
  name: 'shinygouv',
  summary:
    'A versioned R package bringing French State Design System components to Shiny applications; bundled design assets have separate terms.',
  sponsor:
    'SGAR Pays de la Loire, Ministry for Ecological Transition/CGDD and DREAL Pays de la Loire',
  agencyIds: ['fr-sgar-pays-de-la-loire', 'fr-dreal-pays-de-la-loire'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Design systems',
  openSourceYear: 2022,
  license: 'EUPL-1.2-or-later (package code; bundled DSFR assets separately licensed)',
  repository: 'https://github.com/spyrales/shinygouv',
  officialUrl: 'https://spyrales.github.io/shinygouv/',
  evidenceUrl: 'https://github.com/spyrales/shinygouv/blob/main/publiccode.yml',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['france', 'r', 'shiny', 'design systems'],
} satisfies Project;
