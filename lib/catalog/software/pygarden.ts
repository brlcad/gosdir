import type { Project } from '../types';

export default {
  id: 'pygarden',
  name: 'pyGARDEN',
  summary:
    'An ORNL Python library with reusable database, logging, configuration, and command-line helpers, distributed as a versioned package.',
  sponsor: 'Oak Ridge National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-oak-ridge-national-laboratory'],
  geography: 'United States (Tennessee)',
  jurisdiction: 'U.S. federal',
  domain: 'Developer tools',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/ORNL/pygarden',
  officialUrl: 'https://pypi.org/project/pygarden/',
  evidenceUrl: 'https://github.com/ORNL/pygarden/blob/main/LICENSE',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['doe', 'ornl', 'python', 'database', 'logging'],
} satisfies Project;
