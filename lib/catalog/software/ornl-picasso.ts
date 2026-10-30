import type { Project } from '../types';

export default {
  id: 'ornl-picasso',
  name: 'Picasso',
  summary: 'A C++ particle-in-cell framework built on Cabana and Kokkos.',
  sponsor:
    'U.S. Department of Energy, Oak Ridge National Laboratory (ORNL), with Exascale Computing Project participation.',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing and computational physics',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/picassodev/picasso',
  officialUrl: 'https://github.com/picassodev/picasso',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/50993',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'particle-in-cell',
    'c++',
    'high-performance computing',
  ],
} satisfies Project;
