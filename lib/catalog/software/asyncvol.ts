import type { Project } from '../types';

export default {
  id: 'asyncvol',
  name: 'AsyncVOL',
  summary:
    'An asynchronous I/O connector for HDF5 that overlaps scientific computation with background data access.',
  sponsor: 'Lawrence Berkeley National Laboratory and the DOE Exascale Computing Project, with HDF Group collaborators',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory'],
  geography: 'United States (California)',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2021,
  license: 'BSD-3-Clause-LBNL',
  repository: 'https://github.com/HDFGroup/vol-async',
  officialUrl: 'https://hdf5-vol-async.readthedocs.io/en/latest/',
  evidenceUrl: 'https://portal.hdfgroup.org/documentation/hdf5/latest/_c_make_vols.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['doe', 'lbnl', 'hdf5', 'scientific computing', 'asynchronous io'],
} satisfies Project;
