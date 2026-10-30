import type { Project } from '../types';

export default {
  id: 'lanl-lafa',
  name: 'LaFA',
  summary:
    'Implements latent-feature attacks that test the robustness of non-negative matrix factorization by perturbing input data and measuring changes in the extracted features.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory, operated by Triad National Security, LLC',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Data science & machine learning',
  openSourceYear: 2025,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/lafa',
  officialUrl: 'https://github.com/lanl/lafa',
  evidenceUrl: 'https://github.com/lanl/lafa/releases/tag/v1.0',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'nnsa', 'lanl', 'data science', 'machine learning', 'python'],
} satisfies Project;
