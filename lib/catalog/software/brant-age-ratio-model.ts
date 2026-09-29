import type { Project } from '../types';

export default {
  id: 'brant-age-ratio-model',
  name: 'Brant Age Ratio Model',
  summary:
    'USGS R/JAGS models estimating annual age ratios and long-term trends for Pacific black brant from Izembek Lagoon surveys.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Alaska)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2023,
  license: 'CC0-1.0; U.S. public domain',
  repository: 'https://code.usgs.gov/asc/brant-age-ratio-model',
  officialUrl:
    'https://www.usgs.gov/centers/alaska-science-center/science/annual-data-and-model-based-estimates-pacific-black-brant-age',
  evidenceUrl: 'https://code.usgs.gov/asc/brant-age-ratio-model/-/raw/main/LICENSE.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'black brant', 'population model', 'r'],
} satisfies Project;
