import type { Project } from '../types';

export default {
  id: 'fire-dynamics-simulator',
  name: 'Fire Dynamics Simulator',
  summary:
    'A computational fluid-dynamics model from NIST for simulating fire-driven fluid flow, smoke, and heat transport.',
  sponsor: 'National Institute of Standards and Technology',
  agencyIds: ['us-nist'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2000,
  license: 'NIST-Software',
  repository: 'https://github.com/firemodels/fds',
  officialUrl: 'https://pages.nist.gov/fds/',
  evidenceUrl:
    'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication1018.pdf',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['nist', 'fire science', 'simulation'],
} satisfies Project;
