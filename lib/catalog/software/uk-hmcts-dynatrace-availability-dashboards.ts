import type { Project } from '../types';

export default {
  id: 'uk-hmcts-dynatrace-availability-dashboards',
  name: 'HMCTS Dynatrace Availability Dashboards',
  summary:
    'HMCTS configuration and automation for Dynatrace synthetic availability monitors, service-level objectives, dashboards and deployment pipelines for Kubernetes ingress services.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom; exact service deployment footprint is not separately established',
  jurisdiction: 'International',
  domain: 'Infrastructure & operations',
  openSourceYear: 2022,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/dynatrace-availability-dashboards',
  officialUrl: 'https://github.com/hmcts/dynatrace-availability-dashboards',
  evidenceUrl:
    'https://github.com/hmcts/dynatrace-availability-dashboards/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'dynatrace',
    'availability',
    'observability',
    'infrastructure',
  ],
} satisfies Project;
