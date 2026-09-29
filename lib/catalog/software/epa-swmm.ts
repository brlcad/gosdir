import type { Project } from '../types';

export default {
  id: 'epa-swmm',
  name: 'EPA Storm Water Management Model (SWMM)',
  summary:
    'A hydrologic and hydraulic simulation engine for planning, analyzing, and designing stormwater and drainage systems.',
  sponsor: 'U.S. Environmental Protection Agency',
  agencyIds: ['us-epa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 1971,
  license: 'Public domain',
  repository: 'https://github.com/USEPA/Stormwater-Management-Model',
  officialUrl:
    'https://www.epa.gov/water-research/storm-water-management-model-swmm',
  evidenceUrl: 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101SHL0.TXT',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['epa', 'stormwater', 'hydrology'],
} satisfies Project;
