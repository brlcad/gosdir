import type { Project } from '../types';

export default {
  id: 'sea-otter-survey-viz',
  name: 'Sea Otter Survey Data Visualization Tool',
  summary:
    'A USGS R Shiny application for filtering, mapping, and downloading Alaska sea-otter population survey data.',
  sponsor: 'U.S. Geological Survey, Alaska Science Center',
  agencyIds: ['us-usgs-alaska-science-center'],
  geography: 'United States (Alaska sea-otter survey areas)',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2025,
  license: 'CC0-1.0; U.S. public domain',
  repository:
    'https://code.usgs.gov/asc/sea-otter-survey-data-visualization-tool',
  officialUrl:
    'https://www.usgs.gov/tools/sea-otter-survey-data-visualization-tool',
  evidenceUrl:
    'https://www.usgs.gov/software/sea-otter-survey-data-visualization-tool',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['usgs', 'alaska', 'sea otters', 'survey data', 'r shiny'],
} satisfies Project;
