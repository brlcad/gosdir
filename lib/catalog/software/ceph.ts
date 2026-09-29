import type { Project } from '../types';

export default {
  id: 'ceph',
  name: 'Ceph',
  summary:
    'A distributed storage system providing object, block, and file interfaces for large-scale data storage.',
  sponsor:
    'U.S. Department of Energy/NNSA Advanced Simulation and Computing program, with Lawrence Livermore, Los Alamos, and Sandia National Laboratories; research developed at UC Santa Cruz.',
  agencyIds: [
    'us-doe',
    'us-doe-nnsa',
    'us-doe-lawrence-livermore-national-laboratory',
    'us-doe-los-alamos-national-laboratory',
    'us-doe-sandia-national-laboratories',
  ],
  geography: 'United States (DOE/NNSA national laboratories and UC Santa Cruz)',
  jurisdiction: 'U.S. federal',
  domain: 'Cloud infrastructure / distributed storage',
  openSourceYear: 2006,
  license:
    'Mixed/file-level grants: most core code is LGPL-2.1 or LGPL-3.0; COPYING lists GPL, BSD-style, and public-domain exceptions, while documentation has separate CC BY-SA-3.0 terms.',
  repository: 'https://github.com/ceph/ceph',
  officialUrl: 'https://docs.ceph.com/en/latest/',
  evidenceUrl: 'https://ceph.io/en/foundation/history/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['storage', 'distributed systems', 'cloud infrastructure', 'HPC'],
} satisfies Project;
