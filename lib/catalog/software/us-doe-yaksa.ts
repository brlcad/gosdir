import type { Project } from '../types';

export default {
  id: 'us-doe-yaksa',
  name: 'Yaksa',
  summary:
    'An engine for describing, packing, and processing noncontiguous datatypes, with integration in MPICH.',
  sponsor:
    'U.S. Department of Energy, Argonne National Laboratory (ANL), pmodels group.',
  agencyIds: ['us-doe-argonne-national-laboratory', 'us-doe'],
  geography: 'Lemont, Illinois, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing and parallel communication',
  openSourceYear: 2020,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/pmodels/yaksa',
  officialUrl: 'https://www.yaksa.org/',
  evidenceUrl: 'https://www.yaksa.org/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'argonne', 'mpich', 'parallel computing', 'c'],
} satisfies Project;
