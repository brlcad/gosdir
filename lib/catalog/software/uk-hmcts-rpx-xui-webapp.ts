import type { Project } from '../types';

export default {
  id: 'uk-hmcts-rpx-xui-webapp',
  name: 'HMCTS MyHMCTS Manage Cases Web Application',
  summary: 'The XUI web application for MyHMCTS case management.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom (MyHMCTS case coverage varies by service)',
  jurisdiction: 'International',
  domain: 'Justice & legal services',
  openSourceYear: 2025,
  license: 'MIT (this web application repository only)',
  repository: 'https://github.com/hmcts/rpx-xui-webapp',
  officialUrl:
    'https://www.gov.uk/guidance/submit-or-respond-to-an-application-with-myhmcts',
  evidenceUrl:
    'https://github.com/hmcts/cnp-jenkins-config/blob/9227d5801714695c303e8eb674f885f99e408733/deployment-controls.yml',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'myhmcts',
    'case management',
    'online service',
  ],
} satisfies Project;
