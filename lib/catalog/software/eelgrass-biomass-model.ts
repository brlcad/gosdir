import type { Project } from '../types';

export default {
  id: 'eelgrass-biomass-model',
  name: 'Eelgrass Biomass Model',
  summary:
    'A USGS R/JAGS model for estimating eelgrass biomass at Izembek and Kinzarof lagoons from field-survey data.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Alaska)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2023,
  license: 'CC0-1.0; U.S. public domain',
  repository: 'https://code.usgs.gov/asc/eelgrass-biomass-model',
  officialUrl: 'https://www.usgs.gov/software/eelgrass-biomass-model',
  evidenceUrl: 'https://pubs.usgs.gov/publication/ofr20251007/full',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'eelgrass', 'biomass', 'r'],
} satisfies Project;
