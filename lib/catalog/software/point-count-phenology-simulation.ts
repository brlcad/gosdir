import type { Project } from '../types';

export default {
  id: 'point-count-phenology-simulation',
  name: 'Point-count phenology simulation',
  summary:
    'A USGS R script that simulates bird point counts and tests population-trend estimates as spring phenology changes.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Alaska)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2025,
  license: 'CC0-1.0; U.S. public domain',
  repository:
    'https://code.usgs.gov/asc/simulate-point-count-data-estimate-population-trend',
  officialUrl:
    'https://www.usgs.gov/software/r-script-simulate-point-count-data-and-estimate-population-trend-under-various-scenarios',
  evidenceUrl:
    'https://www.usgs.gov/publications/accounting-seasonal-patterns-bird-availability-prevents-biased-population-trend',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'birds', 'population trends', 'r'],
} satisfies Project;
