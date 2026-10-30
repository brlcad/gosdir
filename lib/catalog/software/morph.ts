import type { Project } from '../types';

export default {
  id: 'morph',
  name: 'MORPH',
  summary:
    'A foundation-model framework for partial differential equations and scientific machine learning.',
  sponsor:
    'Los Alamos National Laboratory, U.S. Department of Energy LDRD Program',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Machine learning and scientific computing',
  openSourceYear: 2025,
  license: 'MIT (root LICENSE; README also states BSD-3-Clause)',
  repository: 'https://github.com/lanl/MORPH',
  officialUrl: 'https://www.osti.gov/doecode/biblio/173984',
  evidenceUrl: 'https://arxiv.org/abs/2509.21670',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'machine learning', 'scientific computing', 'pde'],
} satisfies Project;
