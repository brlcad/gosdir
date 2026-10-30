import type { Project } from '../types';

export default {
  id: 'llnl-chimes-al-driver',
  name: 'ChIMES Active Learning Driver',
  summary:
    'An HPC workflow that iteratively generates and refines ChIMES interatomic-potential models.',
  sponsor: 'Lawrence Livermore National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-lawrence-livermore-national-laboratory', 'us-doe'],
  geography: 'Livermore, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational materials science',
  openSourceYear: 2022,
  license: 'GNU Lesser General Public License v3.0 (LGPL-3.0)',
  repository: 'https://github.com/rk-lindsey/al_driver',
  officialUrl: 'https://al-driver.readthedocs.io/en/latest/',
  evidenceUrl:
    'https://proceedings.aiche.org/conferences/aiche-annual-meeting/2025/proceeding/paper/transfer-learning-machine',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'llnl',
    'chimes',
    'materials science',
    'active learning',
    'hpc',
  ],
} satisfies Project;
