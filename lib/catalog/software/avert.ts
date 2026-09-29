import type { Project } from '../types';

export default {
  id: 'avert',
  name: 'AVoided Emissions and geneRation Tool (AVERT)',
  summary:
    'EPA model for estimating county-level power-sector emissions changes from energy policies, projects, and programs.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Air and Radiation, Climate Protection Partnerships Division',
  agencyIds: ['us-epa-oar'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Environment & climate',
  openSourceYear: 2020,
  license:
    'CC0-1.0 (repository source; third-party components retain separate terms)',
  repository: 'https://github.com/USEPA/AVERT',
  officialUrl: 'https://www.epa.gov/avert',
  evidenceUrl: 'https://www.epa.gov/avert/avert-user-manual',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['epa', 'climate', 'emissions', 'energy modeling'],
} satisfies Project;
