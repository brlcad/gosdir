import type { Project } from '../types';

export default {
  id: 'fr-riate-geoimport',
  name: 'geoimport',
  summary:
    'A browser package for converting geospatial data to and from GeoJSON.',
  sponsor: 'CNRS and Université Paris Cité through RIATE (UAR 2414)',
  agencyIds: ['fr-cnrs-riate', 'fr-cnrs', 'fr-university-paris-cite'],
  geography: 'Paris, France',
  jurisdiction: 'International',
  domain: 'Geospatial data conversion',
  openSourceYear: 2025,
  license:
    'MIT for geoimport source; gdal3.js dependency is separately LGPL-2.1 licensed',
  repository: 'https://github.com/riatelab/geoimport',
  officialUrl: 'https://www.riate.cnrs.fr/riatelab.html',
  evidenceUrl: 'https://github.com/riatelab/geoimport/releases',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['france', 'cnrs', 'riate', 'javascript', 'geospatial', 'geojson'],
} satisfies Project;
