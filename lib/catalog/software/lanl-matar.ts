import type { Project } from '../types';

export default {
  id: 'lanl-matar',
  name: 'MATAR (Matrix and Array)',
  summary:
    'A C++ library of portable dense and sparse multidimensional data structures for scientific computing.',
  sponsor:
    'U.S. Department of Energy Laboratory Directed Research and Development (LDRD) Program; Los Alamos National Laboratory',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing & high-performance computing',
  openSourceYear: 2021,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/matar',
  officialUrl: 'https://lanl.github.io/MATAR/',
  evidenceUrl: 'https://www.osti.gov/servlets/purl/1807845',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'c++', 'hpc', 'arrays', 'scientific computing'],
} satisfies Project;
