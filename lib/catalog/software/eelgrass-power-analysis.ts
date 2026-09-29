import type { Project } from '../types';

export default {
  id: 'eelgrass-power-analysis',
  name: 'Eelgrass Biomass Power Analysis',
  summary:
    'A USGS R simulation for testing how monitoring design affects detection of eelgrass biomass trends.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Izembek and Kinzarof lagoons, Alaska)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2025,
  license: 'CC0-1.0; U.S. public domain',
  repository:
    'https://code.usgs.gov/asc/simulation-based-power-analysis-eelgrass-biomass',
  officialUrl:
    'https://www.usgs.gov/software/r-script-run-a-simulation-based-power-analysis-eelgrass-biomass',
  evidenceUrl:
    'https://code.usgs.gov/asc/simulation-based-power-analysis-eelgrass-biomass/-/raw/main/README.md',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'eelgrass', 'monitoring design', 'r'],
} satisfies Project;
