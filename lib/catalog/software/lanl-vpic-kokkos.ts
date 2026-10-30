import type { Project } from '../types';

export default {
  id: 'lanl-vpic-kokkos',
  name: 'VPIC 2.0 (VPIC-Kokkos)',
  summary:
    'A performance-portable, fully relativistic 3D3V particle-in-cell simulation code using Kokkos for CPU and GPU execution.',
  sponsor:
    'Los Alamos National Laboratory, U.S. Department of Energy and National Nuclear Security Administration',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe-nnsa', 'us-doe'],
  geography:
    'Los Alamos, New Mexico, United States; plasma simulation on high-performance computing systems',
  jurisdiction: 'U.S. federal',
  domain: 'Plasma physics and high-performance computing',
  openSourceYear: 2022,
  license:
    'BSD-3-Clause for VPIC program source; Kokkos submodule and other dependencies excluded',
  repository: 'https://github.com/lanl/vpic-kokkos',
  officialUrl: 'https://github.com/lanl/vpic-kokkos',
  evidenceUrl: 'https://arxiv.org/abs/2102.13133',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'plasma physics', 'particle in cell', 'kokkos', 'hpc'],
} satisfies Project;
