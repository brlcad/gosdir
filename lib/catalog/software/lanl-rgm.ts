import type { Project } from '../types';

export default {
  id: 'lanl-rgm',
  name: 'Random Geological Model Generation (RGM)',
  summary:
    'A Fortran/R/Python package for generating stochastic geological models and synthetic datasets for seismic and machine-learning studies.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory FY24 LDRD-ER project 20240322ER',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geophysics & machine learning',
  openSourceYear: 2024,
  license:
    'BSD-3-Clause for RGM source code; compiler/toolchain dependencies and external geological inputs have separate terms',
  repository: 'https://github.com/lanl/rgm',
  officialUrl: 'https://github.com/lanl/rgm',
  evidenceUrl:
    'https://www.sciencedirect.com/science/article/pii/S0098300426000300',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'geophysics',
    'geological modeling',
    'machine learning',
  ],
} satisfies Project;
