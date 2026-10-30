import type { Project } from '../types';

export default {
  id: 'nautilus',
  name: 'Nautilus',
  summary:
    'A C++20 utility library for simulation codes developed under LANL’s Cross-Cutting Applications Project.',
  sponsor:
    'Los Alamos National Laboratory, U.S. Department of Energy Office of Science, Advanced Scientific Computing Research',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/lanl/Nautilus',
  officialUrl: 'https://lanl.github.io/Nautilus/main/index.html',
  evidenceUrl: 'https://lanl.github.io/Nautilus/main/src/build.html',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'simulation', 'c++', 'high-performance computing'],
} satisfies Project;
