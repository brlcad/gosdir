import type { Project } from '../types';

export default {
  id: 'certified',
  name: 'certified',
  summary:
    'A Python package providing certificate and cookie infrastructure for web APIs.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science/Advanced Scientific Computing Research (ASCR); Oak Ridge National Laboratory (ORNL), contract AC05-00OR22725',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Python web API security and certificate tooling',
  openSourceYear: 2024,
  license:
    'BSD-3-Clause (project-owned source; derived trustme files retain MIT; dependencies separately licensed)',
  repository: 'https://github.com/ORNL/certified',
  officialUrl: 'https://github.com/ORNL/certified',
  evidenceUrl: 'https://pypi.org/project/certified/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'python', 'web api', 'certificates', 'security'],
} satisfies Project;
