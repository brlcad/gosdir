import type { Project } from '../types';

export default {
  id: 'drtsans',
  name: 'drtsans',
  summary:
    'An ORNL Python package for reducing small-angle neutron scattering data from EQSANS, GP-SANS, and BIOSANS.',
  sponsor: 'Oak Ridge National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-oak-ridge-national-laboratory'],
  geography: 'United States (Tennessee)',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2019,
  license: 'GPL-3.0-only',
  repository: 'https://github.com/neutrons/drtsans',
  officialUrl: 'https://neutrons.ornl.gov/users/data-management',
  evidenceUrl: 'https://drtsans.readthedocs.io/latest/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['doe', 'ornl', 'neutron scattering', 'data reduction', 'python'],
} satisfies Project;
