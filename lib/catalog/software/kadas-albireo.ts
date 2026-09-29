import type { Project } from '../types';

export default {
  id: 'kadas-albireo',
  name: 'KADAS Albireo',
  summary:
    'A QGIS-based desktop application for mapping, terrain analysis, offline geodata access, and operational planning used by the Swiss Armed Forces and federal administration.',
  sponsor: 'Swiss Defence Group and Federal Office of Topography (swisstopo)',
  agencyIds: ['ch-defence-group', 'ch-swisstopo'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Geospatial',
  openSourceYear: 2016,
  license: 'GPL-2.0-only',
  repository: 'https://github.com/kadas-albireo/kadas-albireo2',
  officialUrl: 'https://kadas-albireo.github.io/',
  evidenceUrl: 'https://www.opensource.admin.ch/en/softwares/q6b0r9/',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['switzerland', 'gis', 'maps', 'defence'],
} satisfies Project;
