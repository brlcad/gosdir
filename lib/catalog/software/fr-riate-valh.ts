import type { Project } from '../types';

export default {
  id: 'fr-riate-valh',
  name: 'valh',
  summary:
    'An R client for the Valhalla routing engine, including route, matrix, isochrone, and elevation operations.',
  sponsor: 'CNRS and Université Paris Cité through RIATE (UAR 2414)',
  agencyIds: ['fr-cnrs-riate', 'fr-cnrs', 'fr-university-paris-cite'],
  geography: 'Paris, France',
  jurisdiction: 'International',
  domain: 'Routing and geospatial analysis',
  openSourceYear: 2025,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/riatelab/valh',
  officialUrl: 'https://www.riate.cnrs.fr/riatelab.html',
  evidenceUrl: 'https://cran.r-project.org/web/packages/valh/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['france', 'cnrs', 'riate', 'r', 'routing', 'valhalla'],
} satisfies Project;
