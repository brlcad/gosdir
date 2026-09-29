import type { Project } from '../types';

export default {
  id: 'epa-eia-power-sector-crosswalk',
  name: 'EPA–EIA Power Sector Data Crosswalk',
  summary:
    'EPA-distributed R workflow and generated identifier crosswalk for joining U.S. power-plant emissions and electricity-generation datasets.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Air and Radiation, Clean Air and Power Division',
  agencyIds: ['us-epa-oar'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Data integration',
  openSourceYear: 2020,
  license:
    'MIT (EPA-authored R workflow; external input datasets retain their terms)',
  repository: 'https://github.com/USEPA/camd-eia-crosswalk',
  officialUrl: 'https://www.epa.gov/power-sector/power-sector-data-crosswalk',
  evidenceUrl: 'https://www.epa.gov/power-sector/power-sector-data-crosswalk',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['epa', 'energy', 'emissions', 'r'],
} satisfies Project;
