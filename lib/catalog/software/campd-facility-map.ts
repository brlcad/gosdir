import type { Project } from '../types';

export default {
  id: 'campd-facility-map',
  name: 'CAMPD Facility Map',
  summary:
    'EPA-hosted interactive map for exploring power-sector facilities, attributes, and compliance data.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Air and Radiation, Clean Air and Power Division',
  agencyIds: ['us-epa-oar'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Data visualization',
  openSourceYear: 2022,
  license:
    'MIT (EPA-authored R Shiny application; vendored packages and data retain separate terms)',
  repository: 'https://github.com/USEPA/campd-viz-gallery-facility-map',
  officialUrl: 'https://campd.epa.gov/tools/facility-map/',
  evidenceUrl: 'https://github.com/USEPA/campd-viz-gallery-facility-map',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['epa', 'energy', 'compliance', 'maps'],
} satisfies Project;
