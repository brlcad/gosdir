import type { Project } from '../types';

export default {
  id: 'uk-hmcts-service-hmcts-crime-springboot-template',
  name: 'HMCTS Crime Service Spring Boot Template',
  summary: 'Reusable Spring Boot template for HMCTS crime services.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom (HMCTS reusable developer tool; intended for multiple jurisdictions)',
  jurisdiction: 'International',
  domain: 'Developer tools & templates',
  openSourceYear: 2025,
  license: 'MIT (template source in this repository only)',
  repository:
    'https://github.com/hmcts/service-hmcts-crime-springboot-template',
  officialUrl:
    'https://github.com/hmcts/service-hmcts-crime-springboot-template/blob/main/README.md',
  evidenceUrl:
    'https://github.com/hmcts/service-hmcts-crime-springboot-template/tree/v2.0.0',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'spring boot', 'crime', 'project template'],
} satisfies Project;
