import type { Project } from '../types';

export default {
  id: 'ornl-presto',
  name: 'PRESTO',
  summary:
    'A Python package that recommends and tunes privacy-preserving algorithms according to dataset characteristics and user preferences, including privacy-utility trade-offs.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE)',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Privacy-preserving data analysis',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/ORNL/presto',
  officialUrl: 'https://pypi.org/project/ornl-presto/',
  evidenceUrl: 'https://www.ornl.gov/news/ornl-wins-20-rd-100-awards',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'privacy',
    'differential privacy',
    'algorithm selection',
    'python',
  ],
} satisfies Project;
