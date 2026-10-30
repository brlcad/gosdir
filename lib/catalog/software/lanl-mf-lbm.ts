import type { Project } from '../types';

export default {
  id: 'lanl-mf-lbm',
  name: 'MF-LBM',
  summary:
    'A multiphase fluid lattice-Boltzmann solver for GPU/HPC simulations of flow in porous media.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational fluid dynamics & high-performance computing',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/mf-lbm',
  officialUrl: 'https://www.osti.gov/doecode/biblio/60482',
  evidenceUrl:
    'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025JB031392',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'lattice boltzmann',
    'porous media',
    'fluid dynamics',
    'gpu',
    'hpc',
  ],
} satisfies Project;
