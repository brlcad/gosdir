import type { Project } from '../types';

export default {
  id: 'jeap-error-handling',
  name: 'jEAP Error Handling Service',
  summary:
    'FOITT reusable service template for retrying failed messages and helping operators resolve persistent errors.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2025,
  license: 'Apache-2.0 (Error Handling Service source)',
  repository: 'https://github.com/jeap-admin-ch/jeap-error-handling',
  officialUrl: 'https://www.opensource.admin.ch/en/softwares/mmi27y/',
  evidenceUrl:
    'https://jeap-admin-ch.github.io/docs/building-blocks/reusable-microservices/jeap-error-handling/getting-started',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'jEAP', 'error handling', 'java'],
} satisfies Project;
