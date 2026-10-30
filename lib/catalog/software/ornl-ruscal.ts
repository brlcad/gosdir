import type { Project } from '../types';

export default {
  id: 'ornl-ruscal',
  name: 'RUScal',
  summary:
    'Software for analyzing resonant ultrasound spectroscopy measurements and calculating elastic properties.',
  sponsor:
    'Oak Ridge National Laboratory, U.S. Department of Energy; developed in part under ORNL’s Laboratory Directed Research and Development program',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and elastic-property analysis',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/RUS-ORNL/RUScal',
  officialUrl: 'https://github.com/RUS-ORNL/RUScal',
  evidenceUrl: 'https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.5c02867',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'materials science',
    'resonant ultrasound',
    'elasticity',
  ],
} satisfies Project;
