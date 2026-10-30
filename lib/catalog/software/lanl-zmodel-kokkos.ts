import type { Project } from '../types';

export default {
  id: 'lanl-zmodel-kokkos',
  name: 'ZModel-Kokkos',
  summary:
    'A C++17/Kokkos implementation of a Z-model fluid-interface simulation that produces VTK visualization output and flow statistics.',
  sponsor:
    'Los Alamos National Laboratory, U.S. Department of Energy and National Nuclear Security Administration',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe-nnsa', 'us-doe'],
  geography:
    'Los Alamos, New Mexico, United States; high-performance fluid-interface modeling',
  jurisdiction: 'U.S. federal',
  domain: 'Computational fluid dynamics and high-performance computing',
  openSourceYear: 2025,
  license:
    'BSD-3-Clause for ZModel-Kokkos source; Kokkos, KokkosKernels, VTK, CUDA/ROCm, and other dependencies retain their own licenses',
  repository: 'https://github.com/lanl/zmodel-kokkos',
  officialUrl: 'https://www.osti.gov/doecode/biblio/156182',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/156182',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'fluid dynamics', 'kokkos', 'hpc'],
} satisfies Project;
