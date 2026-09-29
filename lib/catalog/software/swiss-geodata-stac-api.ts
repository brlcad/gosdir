import type { Project } from '../types';

export default {
  id: 'swiss-geodata-stac-api',
  name: 'Swiss Geodata STAC API',
  summary:
    'A standards-based federal API for discovering and downloading Swiss geospatial datasets and tiles.',
  sponsor: 'Swiss Federal Office of Topography (swisstopo)',
  agencyIds: ['ch-swisstopo'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Geospatial services',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/geoadmin/service-stac',
  officialUrl: 'https://docs.geo.admin.ch/download-data/stac-api/overview.html',
  evidenceUrl: 'https://docs.geo.admin.ch/download-data/stac-api/overview.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'geospatial', 'api', 'open data'],
} satisfies Project;
