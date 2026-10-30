import type { Project } from '../types';

export default {
  id: 'lanl-ssys',
  name: 'ssys',
  summary:
    'A Python package for recasting ordinary differential equation models into canonical S-system and GMA forms.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory. The associated paper also acknowledges NIH/NIGMS support.',
  agencyIds: [
    'us-doe',
    'us-doe-nnsa',
    'us-doe-los-alamos-national-laboratory',
    'us-nih',
  ],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational biology & differential equations',
  openSourceYear: 2025,
  license:
    'MIT for current repository package source; an earlier BSD-3 grant also covered public source in 2025',
  repository: 'https://github.com/lanl/ssys',
  officialUrl: 'https://www.osti.gov/doecode/biblio/186708',
  evidenceUrl: 'https://arxiv.org/abs/2607.05607',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'nih',
    'systems biology',
    'differential equations',
    'python',
  ],
} satisfies Project;
