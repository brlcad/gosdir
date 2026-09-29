import type { Project } from '../types';

export default {
  id: 'moose',
  name: 'MOOSE',
  summary:
    'A massively parallel finite-element framework for building coupled multiphysics simulations across energy and engineering research.',
  sponsor: 'Idaho National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-idaho-national-laboratory'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2014,
  license: 'LGPL-2.1-only',
  repository: 'https://github.com/idaholab/moose',
  officialUrl: 'https://mooseframework.inl.gov/',
  evidenceUrl:
    'https://inl.gov/content/uploads/2024/04/FY-14-INL-LDRD-Annual-Report.pdf',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['energy', 'simulation', 'multiphysics'],
} satisfies Project;
