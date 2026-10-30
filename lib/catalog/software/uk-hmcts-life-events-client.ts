import type { Project } from '../types';

export default {
  id: 'uk-hmcts-life-events-client',
  name: 'HMCTS Life Events Java Client',
  summary: 'A Java client for the HM Passport Office Life Events service.',
  sponsor:
    'HMCTS (client producer); HM Passport Office, Home Office (Life Events service)',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2025,
  license: 'MIT (client source in this repository only)',
  repository: 'https://github.com/hmcts/life-events-client',
  officialUrl: 'https://github.com/hmcts/life-events-client',
  evidenceUrl: 'https://github.com/hmcts/life-events-client/releases',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'hm passport office', 'java', 'api client'],
} satisfies Project;
