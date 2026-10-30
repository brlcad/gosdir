import type { Project } from '../types';

export default {
  id: 'lanl-impala',
  name: 'IMMPALA (impala)',
  summary:
    'A modular Python package for Bayesian calibration of computational models, distributed as impala-calib.',
  sponsor:
    'U.S. Department of Energy, Office of Science, Advanced Scientific Computing Research (ASCR); Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Bayesian statistics & scientific computing',
  openSourceYear: 2022,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/impala',
  officialUrl: 'https://www.osti.gov/doecode/biblio/70106',
  evidenceUrl: 'https://pypi.org/project/impala-calib/',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'bayesian statistics',
    'calibration',
    'python',
    'scientific computing',
  ],
} satisfies Project;
