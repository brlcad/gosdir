import type { Project } from '../types';

export default {
  id: 'us-doe-argonne-psz-cusz',
  name: 'pSZ/cuSZ',
  summary:
    'A CUDA GPU implementation of SZ error-bounded lossy compression for scientific data.',
  sponsor: 'Argonne National Laboratory / U.S. Department of Energy',
  agencyIds: ['us-doe-argonne-national-laboratory', 'us-doe'],
  geography:
    'Not geographically restricted; developed at Argonne National Laboratory in Lemont, Illinois',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing & data compression',
  openSourceYear: 2020,
  license: 'BSD-3-Clause for pSZ/cuSZ source code',
  repository: 'https://github.com/szcompressor/cuSZ',
  officialUrl: 'https://www.osti.gov/doecode/biblio/62650',
  evidenceUrl: 'https://doi.org/10.1145/3410463.3414624',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['doe', 'argonne', 'scientific computing', 'gpu', 'data compression'],
} satisfies Project;
