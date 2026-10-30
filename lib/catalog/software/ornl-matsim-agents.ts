import type { Project } from '../types';

export default {
  id: 'ornl-matsim-agents',
  name: 'matsim-agents',
  summary:
    'An agent-based framework for atomistic materials simulations and workflows that integrates HydraGNN models.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science; Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and agent-based simulation',
  openSourceYear: 2026,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/matsim-agents',
  officialUrl: 'https://github.com/ORNL/matsim-agents',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/181158',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'materials science',
    'agent-based modeling',
    'atomistic simulation',
  ],
} satisfies Project;
