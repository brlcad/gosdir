import type { Project } from '../types';

export default {
  id: 'fr-geonature-refgeo',
  name: 'RefGeo',
  summary:
    'A reusable geographic reference-data schema and Python/Flask module for GeoNature.',
  sponsor:
    'French National Parks / GeoNature maintainers; upstream geographic datasets include separate French public reference sources.',
  agencyIds: ['fr-pnx-si'],
  geography:
    'France; national communes, regions, administrative, and biodiversity geographic reference layers',
  jurisdiction: 'International',
  domain: 'Environmental management and geospatial services',
  openSourceYear: 2022,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/RefGeo',
  officialUrl: 'https://docs.geonature.fr/admin-manual.html',
  evidenceUrl: 'https://docs.geonature.fr/CHANGELOG.html',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'GeoNature', 'geospatial data', 'reference data', 'GPL-3.0'],
} satisfies Project;
