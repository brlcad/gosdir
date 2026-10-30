import type { Project } from '../types';

export default {
  id: 'lbnl-galatic',
  name: 'GALATIC',
  summary:
    'A CUDA template library for sparse matrix multiplication over arbitrary semirings.',
  sponsor: 'Lawrence Berkeley National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography: 'Berkeley, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance scientific computing',
  openSourceYear: 2021,
  license: 'MIT',
  repository: 'https://github.com/richardlett/GALATIC',
  officialUrl: 'https://www.osti.gov/doecode/biblio/63155',
  evidenceUrl: 'https://arxiv.org/html/2603.21444',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'lbnl',
    'cuda',
    'sparse matrices',
    'high performance computing',
  ],
} satisfies Project;
