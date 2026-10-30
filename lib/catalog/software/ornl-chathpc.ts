import type { Project } from '../types';

export default {
  id: 'ornl-chathpc',
  name: 'ChatHPC',
  summary:
    'An application framework for integrating large language models with high-performance computing environments.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL); DOE CODE record lists ORNL-affiliated developers but no separate sponsor or award.',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing and artificial intelligence',
  openSourceYear: 2025,
  license: 'MIT License',
  repository: 'https://github.com/ORNL/chathpc-app',
  officialUrl: 'https://chathpc-app.readthedocs.io/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/160289',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'hpc',
    'artificial intelligence',
    'large language models',
  ],
} satisfies Project;
