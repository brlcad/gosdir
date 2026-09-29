import type { Project } from '../types';

export default {
  id: 'jeap-cli',
  name: 'jEAP CLI',
  summary:
    'FOITT command-line tool for initializing, migrating, and managing applications built on the jEAP platform.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2025,
  license: 'Apache-2.0 (CLI source)',
  repository: 'https://github.com/jeap-admin-ch/jeap-cli',
  officialUrl: 'https://www.opensource.admin.ch/en/softwares/188j4c/',
  evidenceUrl:
    'https://jeap-admin-ch.github.io/docs/building-blocks/tooling/jeap-cli/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'jEAP', 'cli', 'java'],
} satisfies Project;
