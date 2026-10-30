import type { Project } from '../types';

export default {
  id: 'uk-hmcts-et-exporter-gem',
  name: 'Employment Tribunals Exporter Gem',
  summary:
    'Reusable HMCTS Employment Tribunals gem for emitting selected claim events to external systems.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom; the exact component deployment jurisdiction is not separately mapped',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2019,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/et_exporter_gem',
  officialUrl: 'https://github.com/hmcts/et_exporter_gem',
  evidenceUrl: 'https://github.com/hmcts/et-pet-api/blob/master/Gemfile',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'employment tribunals',
    'ruby',
    'gem',
    'developer tools',
  ],
} satisfies Project;
