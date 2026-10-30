import type { Project } from '../types';

export default {
  id: 'uk-hmcts-k8s-env-injector',
  name: 'HMCTS Kubernetes Environment Injector',
  summary:
    'Reusable Kubernetes MutatingAdmissionWebhook that injects configured environment variables, DNS, affinity, tolerations, and topology-spread settings into pods.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2024,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/k8s-env-injector',
  officialUrl: 'https://github.com/hmcts/k8s-env-injector',
  evidenceUrl: 'https://github.com/hmcts/k8s-env-injector/releases',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'kubernetes',
    'cloud infrastructure',
    'webhook',
  ],
} satisfies Project;
