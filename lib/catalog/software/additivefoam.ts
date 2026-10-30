import type { Project } from '../types';

export default {
  id: 'additivefoam',
  name: 'AdditiveFOAM',
  summary:
    'A continuum multiphysics/OpenFOAM code for heat- and mass-transfer simulation of additive manufacturing.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science and National Nuclear Security Administration (NNSA); Oak Ridge National Laboratory (ORNL), contract AC05-00OR22725',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe', 'us-doe-nnsa'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Additive manufacturing and computational fluid dynamics',
  openSourceYear: 2023,
  license:
    'GPL-3.0-or-later (AdditiveFOAM source; OpenFOAM and other dependencies separately licensed)',
  repository: 'https://github.com/ORNL/AdditiveFOAM',
  officialUrl: 'https://ornl.github.io/AdditiveFOAM/',
  evidenceUrl: 'https://joss.theoj.org/papers/10.21105/joss.07770',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'additive manufacturing',
    'openfoam',
    'cfd',
    'simulation',
  ],
} satisfies Project;
