import type { Project } from '../types';

export default {
  id: 'govuk-search-api',
  name: 'GOV.UK Search API (v1)',
  summary:
    'GDS production indexing and search service for GOV.UK content, providing the still-operating v1 public search API and finder integrations.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Search and discovery',
  openSourceYear: 2015,
  license: 'MIT (application source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/search-api',
  officialUrl: 'https://docs.publishing.service.gov.uk/repos/search-api.html',
  evidenceUrl: 'https://docs.publishing.service.gov.uk/repos/search-api.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'search', 'api', 'indexing'],
} satisfies Project;
