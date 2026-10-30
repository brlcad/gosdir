import type { Project } from '../types';

export default {
  id: 'openmc',
  name: 'OpenMC',
  summary: 'A Monte Carlo particle-transport simulation code.',
  sponsor:
    'Argonne National Laboratory, U.S. Department of Energy Office of Science',
  agencyIds: ['us-doe-argonne-national-laboratory', 'us-doe'],
  geography: 'Lemont, Illinois, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Nuclear engineering and particle-transport simulation',
  openSourceYear: 2012,
  license: 'MIT',
  repository: 'https://github.com/openmc-dev/openmc',
  officialUrl: 'https://docs.openmc.org/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/64709',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'argonne',
    'nuclear engineering',
    'particle transport',
    'simulation',
  ],
} satisfies Project;
