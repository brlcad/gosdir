import type { Project } from '../types';

export default {
  id: 'lanl-sedacs',
  name: 'SEDACS',
  summary:
    'A modular Python framework for organizing large-scale quantum and atomistic molecular-dynamics simulations and analyzing trajectories with external chemistry solvers.',
  sponsor:
    'U.S. Department of Energy Laboratory Directed Research and Development (LDRD); Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'United States — Los Alamos, New Mexico',
  jurisdiction: 'U.S. federal',
  domain: 'Computational chemistry & scientific computing',
  openSourceYear: 2025,
  license:
    'BSD-3-Clause for SEDACS repository source; external solver/dependency repositories are separately licensed',
  repository: 'https://github.com/lanl/sedacs',
  officialUrl: 'https://github.com/lanl/sedacs',
  evidenceUrl: 'https://arxiv.org/abs/2606.03140',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'chemistry',
    'molecular dynamics',
    'scientific computing',
    'python',
    'hpc',
  ],
} satisfies Project;
