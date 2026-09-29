import type { Project } from '../types';

export default {
  id: 'air-sensor-network-analysis-tool',
  name: 'Air Sensor Network Analysis Tool (ASNAT)',
  summary:
    'EPA’s R Shiny application for comparing air-sensor networks with nearby monitors and exploring local air-quality conditions.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development',
  agencyIds: ['us-epa-ord'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2025,
  license:
    'MIT (EPA-authored application code; bundled executables separately licensed)',
  repository:
    'https://github.com/USEPA/Air-Sensor-Network-Analysis-Tool-Public-',
  officialUrl: 'https://www.epa.gov/air-sensor-toolbox/air-sensor-data-tools',
  evidenceUrl: 'https://www.epa.gov/air-sensor-toolbox/air-sensor-data-tools',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['epa', 'air sensors', 'air quality', 'r shiny'],
} satisfies Project;
