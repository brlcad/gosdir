import type { Project } from '../types';

export default {
  id: 'uk-hmcts-et-test-helpers',
  name: 'Employment Tribunals Test Helpers',
  summary:
    'HMCTS helper gem for Employment Tribunals and GOV.UK frontend test suites, with Capybara/SitePrism selectors and support utilities.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom; the exact component deployment jurisdiction is not separately mapped',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2020,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/et_test_helpers',
  officialUrl: 'https://github.com/hmcts/et_test_helpers',
  evidenceUrl: 'https://github.com/hmcts/et-pet-et3/blob/master/Gemfile',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'employment tribunals',
    'testing',
    'ruby',
    'developer tools',
  ],
} satisfies Project;
