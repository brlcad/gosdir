import type { Project } from '../types';

export default {
  id: 'ornl-sagesim',
  name: 'SAGESim',
  summary:
    'A Python framework for agent-based simulations with distributed computing and GPU acceleration.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), Office of Science Advanced Scientific Computing Research (ASCR)',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Simulation and agent-based modeling',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/ORNL/sagesim',
  officialUrl: 'https://github.com/ORNL/SAGESim',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/125496',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'simulation',
    'agent-based modeling',
    'scientific computing',
  ],
} satisfies Project;
