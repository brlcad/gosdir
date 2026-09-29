import type { Project } from '../types';

export default {
  id: 'hp-flex-mpc',
  name: 'HP-FLEX MPC',
  summary:
    'An LBNL model-predictive controller for flexible heat-pump operation in small and medium commercial buildings, with documented installation and field demonstration.',
  sponsor: 'Lawrence Berkeley National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory'],
  geography: 'United States (California)',
  jurisdiction: 'U.S. federal',
  domain: 'Energy systems',
  openSourceYear: 2024,
  license: 'BSD-3-Clause-LBNL',
  repository: 'https://bitbucket.org/berkeleylab/hp-flex-mpc',
  officialUrl: 'https://hpflex.lbl.gov/',
  evidenceUrl: 'https://eta.lbl.gov/publications/hp-flex-field-demonstration',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['doe', 'lbnl', 'heat pumps', 'building controls', 'model predictive control'],
} satisfies Project;
