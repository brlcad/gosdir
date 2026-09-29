import type { Project } from '../types';

export default {
  id: 'jeap-db-schema-publisher',
  name: 'jEAP DB Schema Publisher',
  summary:
    'FOITT Spring library that publishes an application’s relational database schema to the jEAP Architecture Repository.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2025,
  license: 'Apache-2.0 (DB Schema Publisher source)',
  repository: 'https://github.com/jeap-admin-ch/jeap-db-schema-publisher',
  officialUrl: 'https://www.opensource.admin.ch/en/softwares/l0jkk3/',
  evidenceUrl:
    'https://github.com/jeap-admin-ch/jeap-db-schema-publisher/blob/main/docs/getting-started.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'jEAP', 'database schema', 'java'],
} satisfies Project;
