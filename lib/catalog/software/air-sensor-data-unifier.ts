import type { Project } from '../types';

export default {
  id: 'air-sensor-data-unifier',
  name: 'Air Sensor Data Unifier (ASDU)',
  summary:
    'EPA’s R Shiny tool for importing, quality-checking, and converting air-sensor measurements into common formats for further analysis.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development',
  agencyIds: ['us-epa-ord'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2025,
  license:
    'MIT (EPA-authored application code; bundled R runtime separately licensed)',
  repository: 'https://github.com/USEPA/Air-Sensor-Data-Unifier',
  officialUrl: 'https://www.epa.gov/air-sensor-toolbox/air-sensor-data-tools',
  evidenceUrl: 'https://catalog.data.gov/dataset/air-sensor-data-unifier-code',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['epa', 'air sensors', 'data quality', 'r shiny'],
} satisfies Project;
