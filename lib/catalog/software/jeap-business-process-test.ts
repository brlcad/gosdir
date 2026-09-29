import type { Project } from '../types';

export default {
  id: 'jeap-business-process-test',
  name: 'jEAP Business Process Test',
  summary:
    'Paired FOITT Apache-licensed Java libraries for orchestrating cross-service business-process tests and implementing TestAgent REST contracts.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Software testing',
  openSourceYear: 2025,
  license: 'Apache-2.0 (orchestrator and TestAgent API repositories)',
  repository: 'https://github.com/jeap-admin-ch/jeap-bptest-orchestrator',
  officialUrl: 'https://www.opensource.admin.ch/en/softwares/ini5n9/',
  evidenceUrl: 'https://github.com/jeap-admin-ch/jeap-bptestagent-api',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'jEAP', 'business process testing', 'java'],
} satisfies Project;
