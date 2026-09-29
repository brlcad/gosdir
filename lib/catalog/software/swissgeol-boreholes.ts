import type { Project } from '../types';

export default {
  id: 'swissgeol-boreholes',
  name: 'SwissGeo Boreholes',
  summary:
    'Switzerland’s national application for collecting, validating, managing, and publishing structured geological borehole information.',
  sponsor:
    'Swiss Federal Office of Topography (swisstopo), Swiss Geological Survey; application source credits GeoWerkstatt GmbH',
  agencyIds: ['ch-swisstopo'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Geospatial data',
  openSourceYear: 2022,
  license: 'MIT (boreholes application-suite source)',
  repository: 'https://github.com/swisstopo/swissgeol-boreholes-suite',
  officialUrl: 'https://boreholes.swissgeol.ch/',
  evidenceUrl: 'https://www.opensource.admin.ch/en/softwares/eod5b9/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'geology', 'boreholes', 'public data'],
} satisfies Project;
