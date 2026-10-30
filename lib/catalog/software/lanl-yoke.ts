import type { Project } from '../types';

export default {
  id: 'lanl-yoke',
  name: 'YOKE',
  summary:
    'A Python/PyTorch framework for prototyping, training, and evaluating machine-learning models, with applications for scientific modeling.',
  sponsor:
    'Los Alamos National Laboratory ArtIMis and ASC-PEM-EADA projects, U.S. Department of Energy and National Nuclear Security Administration',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe-nnsa', 'us-doe'],
  geography:
    'Los Alamos, New Mexico, United States; scientific machine learning and multiphysics applications',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific machine learning',
  openSourceYear: 2025,
  license:
    'BSD-3-Clause for repository source and included application code; external data, checkpoints, APIs, and dependencies excluded',
  repository: 'https://github.com/lanl/Yoke',
  officialUrl: 'https://github.com/lanl/Yoke',
  evidenceUrl: 'https://github.com/lanl/Yoke/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'machine learning', 'pytorch', 'model training'],
} satisfies Project;
