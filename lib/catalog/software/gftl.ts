import type { Project } from '../types';

export default {
  id: 'gftl',
  name: 'Goddard Fortran Template Library (gFTL)',
  summary:
    'Reusable Vector, Map, and Set containers for Fortran scientific software, including NASA Earth-system modeling.',
  sponsor: 'NASA Goddard Space Flight Center, Global Modeling and Assimilation Office',
  agencyIds: ['us-nasa-goddard-space-flight-center'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2018,
  license: 'Apache-2.0',
  repository: 'https://github.com/Goddard-Fortran-Ecosystem/gFTL',
  officialUrl: 'https://software.nasa.gov/software/GSC-17742-1',
  evidenceUrl: 'https://science.gsfc.nasa.gov/earth/gmao/bio/thomas.l.clune',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'fortran', 'scientific computing', 'libraries'],
} satisfies Project;
