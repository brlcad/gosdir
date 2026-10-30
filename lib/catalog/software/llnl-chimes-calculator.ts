import type { Project } from '../types';

export default {
  id: 'llnl-chimes-calculator',
  name: 'ChIMES Calculator',
  summary:
    'A multi-language API and serial interface for evaluating ChIMES interatomic interactions.',
  sponsor:
    'Lawrence Livermore National Laboratory, U.S. Department of Energy; current development also includes the University of Michigan',
  agencyIds: ['us-doe-lawrence-livermore-national-laboratory', 'us-doe'],
  geography:
    'Livermore, California, United States; current development also in Ann Arbor, Michigan',
  jurisdiction: 'U.S. federal',
  domain: 'Computational materials science',
  openSourceYear: 2020,
  license: 'GNU Lesser General Public License v3.0 (LGPL-3.0)',
  repository: 'https://github.com/rk-lindsey/chimes_calculator',
  officialUrl: 'https://github.com/rk-lindsey/chimes_calculator',
  evidenceUrl:
    'https://proceedings.aiche.org/conferences/aiche-annual-meeting/2025/proceeding/paper/transfer-learning-machine',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'llnl',
    'chimes',
    'materials science',
    'interatomic potentials',
  ],
} satisfies Project;
