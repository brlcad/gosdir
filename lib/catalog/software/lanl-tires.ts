import type { Project } from '../types';

export default {
  id: 'lanl-tires',
  name: 'tires',
  summary:
    'A command-line tool for downloading and building Python wheels in parallel.',
  sponsor:
    'Los Alamos National Laboratory Laboratory Directed Research and Development Program, U.S. Department of Energy',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography:
    'Los Alamos, New Mexico, United States; reusable Python packaging tool',
  jurisdiction: 'U.S. federal',
  domain: 'Developer tools and software packaging',
  openSourceYear: 2026,
  license: 'MIT for repository source',
  repository: 'https://github.com/lanl/tires',
  officialUrl: 'https://pypi.org/project/tires/',
  evidenceUrl: 'https://pypi.org/project/tires/',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'python', 'packaging', 'command line'],
} satisfies Project;
