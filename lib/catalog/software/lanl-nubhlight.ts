import type { Project } from '../types';

export default {
  id: 'lanl-nubhlight',
  name: 'nubhlight',
  summary:
    'A general-relativistic neutrino-radiation magnetohydrodynamics code with Monte Carlo transport.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Astrophysics & scientific computing',
  openSourceYear: 2020,
  license:
    'BSD-3-Clause for source code; external equation-of-state, opacity, and emissivity data are separately obtained',
  repository: 'https://github.com/lanl/nubhlight',
  officialUrl: 'https://github.com/lanl/nubhlight',
  evidenceUrl: 'https://academic.oup.com/mnras/article/541/4/3184/8203294',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'astrophysics',
    'magnetohydrodynamics',
    'fortran',
  ],
} satisfies Project;
