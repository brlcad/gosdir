import type { Project } from '../types';

export default {
  id: 'lanl-lambast',
  name: 'LAMBAST',
  summary:
    'A Python package for detecting, evaluating, and treating data shift in machine-learning applications.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory, operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Data science & machine learning',
  openSourceYear: 2026,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/lambast',
  officialUrl: 'https://github.com/lanl/lambast',
  evidenceUrl: 'https://github.com/lanl/lambast/releases/tag/0.1.3',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'nnsa', 'lanl', 'data shift', 'machine learning', 'python'],
} satisfies Project;
