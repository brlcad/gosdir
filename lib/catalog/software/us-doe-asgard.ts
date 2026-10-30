import type { Project } from '../types';

export default {
  id: 'us-doe-asgard',
  name: 'ASGarD',
  summary:
    'Adaptive Sparse Grid Discretization (ASGarD) is a C++ framework for solving PDEs with adaptive sparse-grid discretizations.',
  sponsor:
    'U.S. Department of Energy, Office of Science / Advanced Scientific Computing Research; Oak Ridge National Laboratory',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography:
    'Oak Ridge National Laboratory, Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing & applied mathematics',
  openSourceYear: 2018,
  license: 'MIT',
  repository: 'https://github.com/project-asgard/asgard',
  officialUrl: 'https://www.osti.gov/doecode/biblio/48752',
  evidenceUrl: 'https://github.com/project-asgard/asgard/releases/tag/v0.9.0',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united states',
    'tennessee',
    'doe',
    'ornl',
    'scientific computing',
    'pde',
  ],
} satisfies Project;
