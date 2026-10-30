import type { Project } from '../types';

export default {
  id: 'ornl-iris',
  name: 'IRIS (Intelligent Runtime System)',
  summary:
    'A runtime system that coordinates computation, data dependencies, and data movement across heterogeneous processors and programming systems.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science; Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing runtime systems',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/iris',
  officialUrl: 'https://iris-programming.github.io/',
  evidenceUrl:
    'https://impact.ornl.gov/en/prizes/2024-rampd-100-award-for-iris-sdk-intelligent-runtime-system-for-/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'hpc', 'runtime systems', 'heterogeneous computing'],
} satisfies Project;
