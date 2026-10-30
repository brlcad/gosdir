import type { Project } from '../types';

export default {
  id: 'fr-riate-mapsf',
  name: 'mapsf',
  summary:
    'An R package for thematic cartography and spatial data visualization.',
  sponsor: 'CNRS and Université Paris Cité through RIATE (UAR 2414)',
  agencyIds: ['fr-cnrs-riate', 'fr-cnrs', 'fr-university-paris-cite'],
  geography: 'Paris, France',
  jurisdiction: 'International',
  domain: 'Geospatial cartography',
  openSourceYear: 2021,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/riatelab/mapsf',
  officialUrl: 'https://www.riate.cnrs.fr/riatelab.html',
  evidenceUrl: 'https://cran.r-project.org/web/packages/mapsf/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['france', 'cnrs', 'riate', 'r', 'cartography', 'maps'],
} satisfies Project;
