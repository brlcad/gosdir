import type { Project } from '../types';

export default {
  id: 'geonature-gis',
  name: 'GeoNature-GIS',
  summary:
    'A QGIS plugin for querying geographic-reference data and exports from a GeoNature instance.',
  sponsor:
    'PnX-SI, the information-systems team for French national parks, with Parc national des Écrins technical support',
  agencyIds: ['fr-pnx-si', 'fr-parc-national-ecrins'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Geographic information systems',
  openSourceYear: 2024,
  license: 'GPL-3.0',
  repository: 'https://github.com/PnX-SI/GeoNature-GIS',
  officialUrl: 'https://github.com/PnX-SI/GeoNature-GIS/releases',
  evidenceUrl: 'https://github.com/PnX-SI/GeoNature-GIS',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['France', 'QGIS', 'GeoNature', 'geospatial', 'GPL-3.0'],
} satisfies Project;
