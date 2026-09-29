import type { Project } from '../types';

export default {
  id: 'helix',
  name: 'HELIX',
  summary:
    'A Python toolkit for simulation and optimization of charged-particle linear accelerators, developed for Fermilab’s PIP-II accelerator program.',
  sponsor:
    'Fermi National Accelerator Laboratory, managed for the U.S. Department of Energy Office of Science by Fermi Forward Discovery Group.',
  agencyIds: ['us-doe-fermilab', 'us-doe'],
  geography: 'United States (Batavia, Illinois)',
  jurisdiction: 'U.S. federal',
  domain: 'Science & research',
  openSourceYear: 2026,
  license: 'GPL-3.0-only',
  repository: 'https://github.com/Accel-Toolkit/HELIX',
  officialUrl: 'https://accel-toolkit.github.io/HELIX/',
  evidenceUrl: 'https://arxiv.org/abs/2609.04421',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['accelerators', 'physics', 'simulation', 'scientific-computing'],
} satisfies Project;
