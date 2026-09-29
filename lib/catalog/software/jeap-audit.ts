import type { Project } from '../types';

export default {
  id: 'jeap-audit',
  name: 'jEAP Audit',
  summary:
    'FOITT Java library for creating, reliably delivering, and consuming standardized audit records in jEAP services.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Audit logging',
  openSourceYear: 2025,
  license: 'Apache-2.0',
  repository: 'https://github.com/jeap-admin-ch/jeap-audit',
  officialUrl: 'https://www.opensource.admin.ch/en/softwares/gfccq7/',
  evidenceUrl:
    'https://github.com/jeap-admin-ch/jeap-audit/blob/main/docs/getting-started.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'jEAP', 'audit', 'java'],
} satisfies Project;
