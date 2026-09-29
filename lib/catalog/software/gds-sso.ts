import type { Project } from '../types';

export default {
  id: 'gds-sso',
  name: 'GDS SSO',
  summary:
    'Versioned Ruby authentication library integrating GOV.UK publishing applications with the Signon single-sign-on service.',
  sponsor: 'UK Government Digital Service',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2016,
  license: 'MIT (library source; dependencies retain separate terms)',
  repository: 'https://github.com/alphagov/gds-sso',
  officialUrl: 'https://rubygems.org/gems/gds-sso',
  evidenceUrl: 'https://docs.publishing.service.gov.uk/repos/gds-sso.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'ruby', 'gov.uk', 'authentication'],
} satisfies Project;
