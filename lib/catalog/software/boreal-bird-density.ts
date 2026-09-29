import type { Project } from '../types';

export default {
  id: 'boreal-bird-density',
  name: 'Boreal Bird Density Model',
  summary:
    'USGS R/NIMBLE scripts for estimating boreal bird density and habitat associations from Alaska point-count surveys.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Alaska)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2024,
  license: 'CC0-1.0; U.S. public domain',
  repository:
    'https://code.usgs.gov/asc/model-bird-density-and-habitat-associations',
  officialUrl:
    'https://www.usgs.gov/software/r-scripts-run-model-bird-density-and-habitat-associations',
  evidenceUrl: 'https://pubs.usgs.gov/publication/70275030',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'birds', 'habitat', 'r'],
} satisfies Project;
