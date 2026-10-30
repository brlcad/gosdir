import type { Project } from '../types';

export default {
  id: 'doe-gbbs',
  name: 'GBBS (Graph Based Benchmark Suite)',
  summary:
    'A C++ library and benchmark suite of scalable parallel graph algorithms.',
  sponsor:
    'U.S. Department of Energy, Office of Science (Early Career Award DE-SC0018947); ParAlg research group with University of Maryland, CMU, and MIT collaborators',
  agencyIds: ['us-doe'],
  geography:
    'College Park, Maryland, United States, with multi-university collaborators',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2018,
  license: 'MIT',
  repository: 'https://github.com/ParAlg/gbbs',
  officialUrl: 'https://paralg.github.io/gbbs/docs/introduction/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/109466',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'parallel computing',
    'graph algorithms',
    'benchmark suite',
    'c++',
  ],
} satisfies Project;
