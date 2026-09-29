import type { Project } from '../types';

export default {
  id: 'swissgeol-assets',
  name: 'SwissGeo Assets',
  summary:
    'A public platform for finding and downloading Swiss geological documents and data, with a separately published extraction API.',
  sponsor: 'Swiss Federal Office of Topography (swisstopo)',
  agencyIds: ['ch-swisstopo'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Geospatial data',
  openSourceYear: 2025,
  license: 'MIT (web platform; extraction API is AGPL-3.0-only)',
  repository: 'https://github.com/swisstopo/swissgeol-assets-suite',
  officialUrl: 'https://assets.swissgeol.ch/',
  evidenceUrl: 'https://github.com/swisstopo/swissgeol-assets-suite/commit/5c65fea6ebdc9b2983198c4acc3f9a0bfe1e7650',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'geology', 'geospatial', 'public data'],
} satisfies Project;
