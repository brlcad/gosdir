import type { Project } from '../types';

export default {
  id: 'uk-hmcts-juror-public',
  name: 'Juror Digital Public Portal',
  summary:
    'Public portal application for replying to an HMCTS jury summons, including confirmation, deferral/excusal requests, and supporting documents.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'England and Wales',
  jurisdiction: 'International',
  domain: 'Justice & legal services',
  openSourceYear: 2023,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/juror-public',
  officialUrl: 'https://www.gov.uk/reply-jury-summons',
  evidenceUrl:
    'https://www.gov.uk/service-standard-reports/juror-summons-beta-assessment',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'jury service', 'courts', 'public portal'],
} satisfies Project;
