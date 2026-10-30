import type { Project } from '../types';

export default {
  id: 'cabanapd',
  name: 'CabanaPD',
  summary:
    'A Cabana/Kokkos-based application for meshfree peridynamics and discrete-element-method simulations.',
  sponsor:
    'U.S. Department of Energy (DOE) Laboratory Directed Research and Development (LDRD) program, Oak Ridge National Laboratory (ORNL); contract AC05-00OR22725',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Peridynamics and particle-based scientific computing',
  openSourceYear: 2022,
  license:
    'BSD-3-Clause (CabanaPD source; Cabana, Kokkos, MPI, and other dependencies separately licensed)',
  repository: 'https://github.com/ORNL/CabanaPD',
  officialUrl: 'https://ornl.github.io/CabanaPD/',
  evidenceUrl: 'https://impact.ornl.gov/en/publications/cabanapd/',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'peridynamics',
    'discrete element method',
    'kokkos',
    'hpc',
  ],
} satisfies Project;
