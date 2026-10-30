import type { Project } from '../types';

export default {
  id: 'lanl-singularity-eos',
  name: 'Singularity-EOS',
  summary:
    'A performance-portable C++/Fortran/Python library for equations of state and mixed-cell closure models.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'United States — Los Alamos, New Mexico',
  jurisdiction: 'U.S. federal',
  domain: 'Equation-of-state modeling & scientific computing',
  openSourceYear: 2021,
  license:
    'BSD-3-Clause for repository code; external data/solver dependencies retain separate terms',
  repository: 'https://github.com/lanl/singularity-eos',
  officialUrl: 'https://lanl.github.io/singularity-eos/',
  evidenceUrl: 'https://joss.theoj.org/papers/10.21105/joss.06805',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'equation of state',
    'scientific computing',
    'c++',
    'fortran',
    'python',
  ],
} satisfies Project;
