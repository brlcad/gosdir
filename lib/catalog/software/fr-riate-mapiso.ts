import type { Project } from '../types';

export default {
  id: 'fr-riate-mapiso',
  name: 'mapiso',
  summary:
    'An R package that converts regular grids to isosurfaces for 3D geographic visualization.',
  sponsor: 'CNRS and Université Paris Cité through RIATE (UAR 2414)',
  agencyIds: ['fr-cnrs-riate', 'fr-cnrs', 'fr-university-paris-cite'],
  geography: 'Paris, France',
  jurisdiction: 'International',
  domain: 'Geospatial visualization',
  openSourceYear: 2022,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/riatelab/mapiso',
  officialUrl: 'https://www.riate.cnrs.fr/riatelab.html',
  evidenceUrl: 'https://cran.r-project.org/web/packages/mapiso/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['france', 'cnrs', 'riate', 'r', 'geospatial', 'isosurface'],
} satisfies Project;
