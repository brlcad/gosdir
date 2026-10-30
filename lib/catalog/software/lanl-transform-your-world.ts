import type { Project } from '../types';

export default {
  id: 'lanl-transform-your-world',
  name: 'Transform-Your-World',
  summary:
    'A Python machine-learning library for developing and using transformer models for materials discovery, including chemical language models, molecule generation, and model benchmarking.',
  sponsor:
    'Los Alamos National Laboratory Laboratory Directed Research and Development Program, U.S. Department of Energy',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography:
    'Los Alamos, New Mexico, United States; materials-discovery software for broader scientific use',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and artificial intelligence',
  openSourceYear: 2026,
  license:
    'MIT for repository code only; separately released model weights are excluded from this license claim',
  repository: 'https://github.com/lanl/Transform-Your-World',
  officialUrl: 'https://github.com/lanl/Transform-Your-World',
  evidenceUrl: 'https://github.com/lanl/Transform-Your-World/releases',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'materials science',
    'artificial intelligence',
    'python',
  ],
} satisfies Project;
