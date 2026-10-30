import type { Project } from '../types';

export default {
  id: 'epa-marine-emissions-tools',
  name: 'EPA Marine Emissions Tools',
  summary:
    'R packages for estimating commercial marine-vessel emissions using vessel power and emission-factor models.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Air and Radiation / Office of Transportation and Air Quality (MOVES program)',
  agencyIds: ['us-epa', 'us-epa-oar'],
  geography: 'United States; commercial marine-vessel emissions inventories',
  jurisdiction: 'U.S. federal',
  domain: 'Air quality and emissions',
  openSourceYear: 2020,
  license:
    'MIT (repository source; third-party dependencies retain their own terms)',
  repository: 'https://github.com/USEPA/Marine_Emissions_Tools',
  officialUrl:
    'https://www.epa.gov/moves/emissions-models-and-other-methods-produce-emission-inventories',
  evidenceUrl:
    'https://www.epa.gov/moves/emissions-models-and-other-methods-produce-emission-inventories',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'air quality', 'emissions', 'marine', 'r'],
} satisfies Project;
