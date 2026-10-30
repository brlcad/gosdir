import type { Project } from '../types';

export default {
  id: 'ornl-matey',
  name: 'MATEY',
  summary:
    'A framework for training transformer-based spatiotemporal foundation models on structured and unstructured scientific datasets using high-performance computing systems.',
  sponsor:
    'U.S. Department of Energy (DOE); Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific machine learning',
  openSourceYear: 2025,
  license: 'MIT License',
  repository: 'https://github.com/ORNL/matey',
  officialUrl: 'https://github.com/ORNL/matey',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/173753',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'foundation models',
    'transformers',
    'scientific computing',
  ],
} satisfies Project;
