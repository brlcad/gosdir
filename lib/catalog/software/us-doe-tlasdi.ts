import type { Project } from '../types';

export default {
  id: 'us-doe-tlasdi',
  name: 'tLaSDI',
  summary:
    'Identifies reduced dynamical models in a learned latent space while incorporating thermodynamic constraints.',
  sponsor:
    'U.S. Department of Energy, Lawrence Livermore National Laboratory (LLNL), through LDRD and ASCR CHaRMNET support.',
  agencyIds: ['us-doe-lawrence-livermore-national-laboratory', 'us-doe'],
  geography: 'Livermore, California, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific machine learning and reduced-order modeling',
  openSourceYear: 2023,
  license: 'MIT',
  repository: 'https://github.com/pjss1223/tLaSDI',
  officialUrl: 'https://github.com/pjss1223/tLaSDI',
  evidenceUrl: 'https://github.com/LLNL/GPLaSDI/blob/main/model-card-lasdi.md',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'lawrence-livermore',
    'scientific machine learning',
    'model reduction',
    'python',
  ],
} satisfies Project;
