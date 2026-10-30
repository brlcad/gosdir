import type { Project } from '../types';

export default {
  id: 'ornl-mlmc',
  name: 'ORNL/MLMC',
  summary:
    'A Python implementation of multi-level Monte Carlo methods for chemical applications and landscapes with isolated singularities.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science / Advanced Scientific Computing Research; Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2025,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/mlmc',
  officialUrl: 'https://github.com/ORNL/MLMC',
  evidenceUrl:
    'https://www.ornl.gov/publication/multi-level-monte-carlo-methods-chemical-applications-lennard-jones-potentials-and-other',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'monte carlo',
    'scientific computing',
    'chemical applications',
  ],
} satisfies Project;
