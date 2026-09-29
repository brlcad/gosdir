import type { Project } from '../types';

export default {
  id: 'govuk-search-admin',
  name: 'GOV.UK Search Admin',
  summary:
    'GDS production operations application for configuring GOV.UK search content, external links and autocomplete suggestions.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Search and discovery',
  openSourceYear: 2017,
  license: 'MIT (application source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/search-admin',
  officialUrl: 'https://docs.publishing.service.gov.uk/repos/search-admin.html',
  evidenceUrl: 'https://docs.publishing.service.gov.uk/repos/search-admin.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'search', 'administration'],
} satisfies Project;
