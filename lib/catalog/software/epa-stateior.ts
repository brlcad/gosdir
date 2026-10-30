import type { Project } from '../types';

export default {
  id: 'epa-stateior',
  name: 'stateior',
  summary:
    'An R package for building and validating state and two-region economic input-output tables for StateIO and USEEIO models.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Tools for Industrial Ecology Modeling (TIEM)',
  agencyIds: ['us-epa-ord'],
  geography: 'All 50 U.S. states and the District of Columbia',
  jurisdiction: 'U.S. federal',
  domain: 'Economic and environmental modeling',
  openSourceYear: 2020,
  license: 'MIT (current; initial source dedication was CC0-1.0)',
  repository: 'https://github.com/USEPA/stateior',
  officialUrl: 'https://github.com/USEPA/stateior',
  evidenceUrl:
    'https://www.epa.gov/land-research/tools-industrial-ecology-modeling-tiem',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'ord', 'r', 'input-output', 'state models', 'useeio'],
} satisfies Project;
