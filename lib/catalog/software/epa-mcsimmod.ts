import type { Project } from '../types';

export default {
  id: 'epa-mcsimmod',
  name: 'MCSimMod',
  summary:
    'An R package for implementing and applying pharmacokinetic, physiologically based pharmacokinetic, and other ordinary differential equation models in GNU MCSim.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Center for Public Health and Environmental Assessment',
  agencyIds: ['us-epa', 'us-epa-ord', 'us-epa-cphea'],
  geography: 'United States; EPA chemical-risk assessment research',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental health and risk assessment',
  openSourceYear: 2024,
  license:
    'GPL-3.0-only for the MCSimMod R package; dependencies retain their own terms',
  repository: 'https://github.com/USEPA/MCSimMod',
  officialUrl: 'https://assessments.epa.gov/risk/document/&deid=364239',
  evidenceUrl: 'https://assessments.epa.gov/risk/document/&deid=364239',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['epa', 'chemical risk', 'pbpk', 'ode', 'r'],
} satisfies Project;
