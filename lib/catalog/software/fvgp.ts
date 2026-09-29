import type { Project } from '../types';

export default {
  id: 'fvgp',
  name: 'fvGP',
  summary:
    'A Berkeley Lab Gaussian-process engine for scientific applications, distributed separately from the related gpCAM acquisition software.',
  sponsor: 'Lawrence Berkeley National Laboratory CAMERA, U.S. Department of Energy',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory'],
  geography: 'United States (California)',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2020,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/lbl-camera/fvGP',
  officialUrl: 'https://camera.lbl.gov/software',
  evidenceUrl: 'https://pypi.org/project/fvgp/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['department of energy', 'berkeley lab', 'gaussian processes', 'hpc'],
} satisfies Project;
