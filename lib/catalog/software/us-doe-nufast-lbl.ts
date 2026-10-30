import type { Project } from '../types';

export default {
  id: 'us-doe-nufast-lbl',
  name: 'NuFast-LBL',
  summary:
    'A fast C++ implementation for calculating long-baseline neutrino oscillation probabilities.',
  sponsor:
    'U.S. Department of Energy, Fermi National Accelerator Laboratory (Fermilab).',
  agencyIds: ['us-doe-fermilab', 'us-doe'],
  geography: 'Batavia, Illinois, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Neutrino physics and scientific computing',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/PeterDenton/NuFast-LBL',
  officialUrl: 'https://github.com/PeterDenton/NuFast-LBL',
  evidenceUrl: 'https://lss.fnal.gov/lists/fermilab-reports-code.html',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'fermilab', 'neutrino physics', 'c++', 'scientific computing'],
} satisfies Project;
