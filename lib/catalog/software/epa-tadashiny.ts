import type { Project } from '../types';

export default {
  id: 'epa-tadashiny',
  name: 'TADAShiny',
  summary:
    'A web application for discovering, retrieving, screening, cleaning, and visualizing Water Quality Portal data.',
  sponsor:
    'U.S. Environmental Protection Agency, Tools for Automated Data Analysis (TADA) project',
  agencyIds: ['us-epa'],
  geography:
    'U.S. Water Quality Portal surface-water data submitted by states, Tribes, Pueblos, and other organizations',
  jurisdiction: 'U.S. federal',
  domain: 'Water quality data and analysis',
  openSourceYear: 2022,
  license: 'CC0-1.0',
  repository: 'https://github.com/USEPA/TADAShiny',
  officialUrl: 'https://rconnect-public.epa.gov/TADAShiny/',
  evidenceUrl: 'https://www.epa.gov/waterdata/TADA',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['epa', 'water quality', 'shiny', 'r', 'tada'],
} satisfies Project;
