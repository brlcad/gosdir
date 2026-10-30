import type { Project } from '../types';

export default {
  id: 'uk-hmcts-rpx-xui-media-viewer',
  name: 'HMCTS XUI Media Viewer Library',
  summary: 'Reusable @hmcts/media-viewer package for HMCTS XUI applications.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom (HMCTS platform tooling; case coverage varies by service)',
  jurisdiction: 'International',
  domain: 'Document management',
  openSourceYear: 2026,
  license: 'MIT (this library repository only)',
  repository: 'https://github.com/hmcts/rpx-xui-media-viewer',
  officialUrl: 'https://github.com/hmcts/rpx-xui-media-viewer',
  evidenceUrl:
    'https://github.com/hmcts/rpx-xui-webapp/blob/master/package.json',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'myhmcts',
    'pdf viewer',
    'angular',
    'library',
  ],
} satisfies Project;
