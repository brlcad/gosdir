import type { Project } from '../types';

export default {
  id: 'open-mct',
  name: 'Open MCT',
  summary:
    'A web-based mission-control framework for visualizing live and historical telemetry from spacecraft and other data-producing systems.',
  sponsor: 'National Aeronautics and Space Administration',
  agencyIds: ['us-nasa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Situational awareness',
  openSourceYear: 2015,
  license: 'Apache-2.0',
  repository: 'https://github.com/nasa/openmct',
  officialUrl: 'https://ammos.nasa.gov/openmct/',
  evidenceUrl:
    'https://github.com/nasa/Open-Source-Catalog/blob/15f82a43b0219a76350f39110fd4978b99ec5e86/catalog.json#L10586-L10608',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['nasa', 'mission control', 'telemetry'],
} satisfies Project;
