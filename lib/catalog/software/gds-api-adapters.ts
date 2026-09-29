import type { Project } from '../types';

export default {
  id: 'gds-api-adapters',
  name: 'GDS API Adapters',
  summary:
    'Versioned Ruby library for accessing GOV.UK publishing, content-store, search, and related APIs from government applications.',
  sponsor: 'UK Government Digital Service',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2011,
  license: 'MIT (library source; dependencies retain separate terms)',
  repository: 'https://github.com/alphagov/gds-api-adapters',
  officialUrl: 'https://rubygems.org/gems/gds-api-adapters',
  evidenceUrl:
    'https://docs.publishing.service.gov.uk/repos/gds-api-adapters.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'ruby', 'gov.uk', 'api client'],
} satisfies Project;
