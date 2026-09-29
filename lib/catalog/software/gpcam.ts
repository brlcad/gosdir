import type { Project } from '../types';

export default {
  id: 'gpcam',
  name: 'gpCAM',
  summary:
    'A Berkeley Lab package for autonomous scientific data acquisition, uncertainty quantification, and Bayesian optimization.',
  sponsor: 'Lawrence Berkeley National Laboratory CAMERA, U.S. Department of Energy',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory'],
  geography: 'United States (California)',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2021,
  license: 'GPL-3.0-or-later',
  repository: 'https://github.com/lbl-camera/gpCAM',
  officialUrl: 'https://gpcam.lbl.gov/',
  evidenceUrl: 'https://camera.lbl.gov/software',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['department of energy', 'berkeley lab', 'autonomous experimentation', 'gaussian processes'],
} satisfies Project;
