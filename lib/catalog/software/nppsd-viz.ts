import type { Project } from '../types';

export default {
  id: 'nppsd-viz',
  name: 'NPPSD Visualization Tool',
  summary:
    'A USGS R Shiny application for mapping, filtering, tabulating, and downloading North Pacific seabird observations.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Alaska and North Pacific)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2024,
  license: 'CC0-1.0; U.S. public domain',
  repository: 'https://code.usgs.gov/asc/nppsd_viz',
  officialUrl:
    'https://www.usgs.gov/tools/north-pacific-pelagic-seabird-database-visualization-tool',
  evidenceUrl:
    'https://www.usgs.gov/software/north-pacific-pelagic-seabird-database-visualization-tool-nppsdviz',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'seabirds', 'visualization', 'r shiny'],
} satisfies Project;
