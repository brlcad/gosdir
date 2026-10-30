import type { Project } from '../types';

export default {
  id: 'lanl-bohydra',
  name: 'bohydra',
  summary:
    'A Python package for serial and MPI-enabled multifidelity Bayesian optimization.',
  sponsor:
    'U.S. Department of Energy Office of Science, ASCR, and Los Alamos National Laboratory LDRD',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Optimization and scientific computing',
  openSourceYear: 2025,
  license: 'BSD-3-Clause for bohydra repository source',
  repository: 'https://github.com/lanl/bohydra',
  officialUrl: 'https://www.osti.gov/doecode/biblio/173993',
  evidenceUrl: 'https://pypi.org/project/bohydra/',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'bayesian optimization', 'mpi', 'python'],
} satisfies Project;
