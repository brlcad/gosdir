import type { Project } from '../types';

export default {
  id: 'jeap-archrepo',
  name: 'jEAP Architecture Repository Service',
  summary:
    'FOITT-maintained Java library for embedding a continuously updated microservice architecture inventory and documentation exporter.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Software architecture',
  openSourceYear: 2025,
  license: 'Apache-2.0',
  repository: 'https://github.com/jeap-admin-ch/jeap-archrepo-service',
  officialUrl: 'https://www.opensource.admin.ch/en/softwares/bwaeu4/',
  evidenceUrl:
    'https://github.com/jeap-admin-ch/jeap-archrepo-service/blob/main/docs/getting-started.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'jEAP', 'architecture inventory', 'java'],
} satisfies Project;
