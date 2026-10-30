import type { Project } from '../types';

export default {
  id: 'uk-hmcts-rpx-xui-node-lib',
  name: 'HMCTS XUI Node.js Common Library',
  summary: 'A shared Node.js library for HMCTS XUI applications.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom (HMCTS platform tooling; no separate service jurisdiction)',
  jurisdiction: 'International',
  domain: 'Software development & DevOps',
  openSourceYear: 2025,
  license: 'MIT (this library repository only)',
  repository: 'https://github.com/hmcts/rpx-xui-node-lib',
  officialUrl: 'https://github.com/hmcts/rpx-xui-node-lib',
  evidenceUrl:
    'https://github.com/hmcts/rpx-xui-webapp/blob/master/package.json',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'myhmcts', 'node.js', 'library'],
} satisfies Project;
