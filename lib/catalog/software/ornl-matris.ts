import type { Project } from '../types';

export default {
  id: 'ornl-matris',
  name: 'MatRIS (ORNL)',
  summary:
    'A heterogeneous BLAS and LAPACK library that uses the IRIS runtime to execute linear-algebra operations across different processors.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science; Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing and linear algebra',
  openSourceYear: 2023,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/matris',
  officialUrl: 'https://github.com/ORNL/matris',
  evidenceUrl:
    'https://www.ornl.gov/publication/matris-multi-level-math-library-abstraction-heterogeneity-and-performance-portability',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'hpc', 'linear algebra', 'heterogeneous computing'],
} satisfies Project;
