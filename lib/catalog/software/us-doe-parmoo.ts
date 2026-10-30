import type { Project } from '../types';

export default {
  id: 'us-doe-parmoo',
  name: 'ParMOO',
  summary:
    'A Python library for parallel multiobjective simulation optimization of structured simulations.',
  sponsor:
    'U.S. Department of Energy, Office of Science; Argonne National Laboratory (contract AC02-06CH11357).',
  agencyIds: ['us-doe-argonne-national-laboratory', 'us-doe'],
  geography: 'Argonne, Illinois, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing & optimization',
  openSourceYear: 2022,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/parmoo/parmoo',
  officialUrl: 'https://parmoo.readthedocs.io/en/latest/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/93196',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'argonne', 'optimization', 'python', 'scientific computing'],
} satisfies Project;
