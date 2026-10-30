import type { Project } from '../types';

export default {
  id: 'ornl-ormatex',
  name: 'ORMATEX',
  summary:
    'A Rust and Python library for matrix exponentials and exponential time integration of large systems of ordinary differential equations, including Krylov methods for sparse matrices.',
  sponsor:
    'U.S. Department of Energy (DOE); Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Numerical methods and scientific computing',
  openSourceYear: 2025,
  license: 'Apache-2.0',
  repository: 'https://github.com/ORNL/ormatex',
  officialUrl: 'https://github.com/ORNL/ORMATEX',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/150070',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'matrix exponentials', 'ODE solvers', 'rust', 'python'],
} satisfies Project;
