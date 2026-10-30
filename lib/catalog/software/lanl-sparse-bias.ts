import type { Project } from '../types';

export default {
  id: 'lanl-sparse-bias',
  name: 'Sparse Bias',
  summary:
    'A Python package for sparse Bayesian bias modeling of functional and nuclear data, originating in LANL’s AIACHNE research workflow.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Nuclear data & machine learning',
  openSourceYear: 2025,
  license: 'BSD-3-Clause for package source (grant embedded in README)',
  repository: 'https://github.com/lanl/sparse_bias',
  officialUrl: 'https://www.osti.gov/doecode/biblio/167453',
  evidenceUrl:
    'https://conferences.lbl.gov/event/1816/contributions/10066/attachments/5514/5499/WANDA_AIACHNE_LA-UR-25-21304.pdf',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'nuclear data',
    'bayesian modeling',
    'python',
    'AIACHNE',
  ],
} satisfies Project;
