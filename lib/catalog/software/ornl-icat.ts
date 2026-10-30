import type { Project } from '../types';

export default {
  id: 'ornl-icat',
  name: 'ICAT',
  summary:
    'A browser-based dashboard for exploring unlabeled text collections with interactive machine-learning tools.',
  sponsor:
    'U.S. Department of Energy (DOE), including National Nuclear Security Administration (NNSA); Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe', 'us-doe-nnsa'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Text analysis and machine learning',
  openSourceYear: 2023,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/icat',
  officialUrl: 'https://ornl.github.io/icat/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/105653',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'text analysis', 'machine learning', 'corpus analysis'],
} satisfies Project;
