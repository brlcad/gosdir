import type { Project } from '../types';

export default {
  id: 'lanl-ursa',
  name: 'URSA',
  summary:
    'A Python workflow framework with a command-line interface and dashboard for combining research, planning, code execution, and scientific agents.',
  sponsor:
    'Los Alamos National Laboratory ArtIMis project and Laboratory Directed Research and Development Program, U.S. Department of Energy',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography:
    'Los Alamos, New Mexico, United States; research workflow framework for global use',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing and artificial intelligence',
  openSourceYear: 2025,
  license: 'BSD-3-Clause for repository source',
  repository: 'https://github.com/lanl/ursa',
  officialUrl: 'https://lanl.github.io/ursa/',
  evidenceUrl: 'https://arxiv.org/abs/2506.22653',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'scientific agents', 'research workflows', 'python'],
} satisfies Project;
