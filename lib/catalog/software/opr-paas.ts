import type { Project } from '../types';

export default {
  id: 'opr-paas',
  name: 'Paas Operator',
  summary:
    'A Tax Administration Kubernetes/OpenShift operator that provisions controlled, multi-tenant project environments with optional CI/CD, observability, and identity capabilities.',
  sponsor: 'Tax Administration of the Netherlands (Belastingdienst)',
  agencyIds: ['nl-belastingdienst'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Cloud platform',
  openSourceYear: 2023,
  license: 'EUPL-1.2',
  repository: 'https://github.com/belastingdienst/opr-paas',
  officialUrl: 'https://belastingdienst.github.io/opr-paas/latest/',
  evidenceUrl: 'https://github.com/belastingdienst/opr-paas/blob/main/publiccode.yml',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'kubernetes', 'openshift', 'operator', 'developer platform'],
} satisfies Project;
