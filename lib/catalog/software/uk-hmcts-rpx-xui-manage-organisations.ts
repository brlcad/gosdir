import type { Project } from '../types';

export default {
  id: 'uk-hmcts-rpx-xui-manage-organisations',
  name: 'HMCTS MyHMCTS Manage Organisations',
  summary:
    'The HMCTS Manage Organisations application is the XUI frontend/API for administering MyHMCTS organisations and user accounts.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom (MyHMCTS case coverage varies by service)',
  jurisdiction: 'International',
  domain: 'Business & government services',
  openSourceYear: 2025,
  license: 'MIT (this application repository only)',
  repository: 'https://github.com/hmcts/rpx-xui-manage-organisations',
  officialUrl:
    'https://www.gov.uk/government/publications/myhmcts-how-to-manage-user-accounts/add-or-update-a-myhmcts-user-account',
  evidenceUrl:
    'https://github.com/hmcts/cnp-jenkins-config/blob/9227d5801714695c303e8eb674f885f99e408733/deployment-controls.yml',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'myhmcts',
    'organisation management',
    'online service',
  ],
} satisfies Project;
