import type { Project } from '../types';

export default {
  id: 'lanl-spus',
  name: 'SPUS (Small PDE U-Net Solver)',
  summary:
    'A 36-million-parameter neural model for solving small partial differential equation systems, with PyTorch source and an inference example.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific machine learning & partial differential equations',
  openSourceYear: 2026,
  license:
    'BSD-3-Clause for repository software source; hosted model weights are not presumed covered by this source grant',
  repository: 'https://github.com/lanl/SPUS-Small-PDE-U-net-Solver',
  officialUrl: 'https://www.osti.gov/doecode/biblio/180606',
  evidenceUrl: 'https://huggingface.co/siddik-lanl/spus-pde-unet-36m',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'scientific machine learning',
    'pde solver',
    'pytorch',
  ],
} satisfies Project;
