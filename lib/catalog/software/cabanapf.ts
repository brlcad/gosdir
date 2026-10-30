import type { Project } from '../types';

export default {
  id: 'cabanapf',
  name: 'CabanaPF',
  summary:
    'A Cabana-based phase-field simulation framework implementing the PFHub 1a microstructure benchmark.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science (WDTS-SULI and Exascale Computing Project), National Nuclear Security Administration (NNSA), and Oak Ridge National Laboratory (ORNL)',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe', 'us-doe-nnsa'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Phase-field modeling and scientific computing',
  openSourceYear: 2023,
  license:
    'BSD-3-Clause (CabanaPF source; Cabana, Kokkos, MPI, heFFTe, and other dependencies separately licensed)',
  repository: 'https://github.com/ORNL/CabanaPF',
  officialUrl: 'https://github.com/ORNL/CabanaPF',
  evidenceUrl: 'https://www.compphys.de/publications/2024a.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'phase field', 'microstructure', 'kokkos', 'hpc'],
} satisfies Project;
