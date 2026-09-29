import type { Project } from '../types';

export default {
  id: 'govspeak',
  name: 'Govspeak',
  summary:
    'GOV.UK’s versioned Ruby library for rendering its Markdown-derived editorial language across publishing applications.',
  sponsor: 'UK Government Digital Service',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Publishing tools',
  openSourceYear: 2013,
  license: 'MIT (Govspeak library source; dependencies retain separate terms)',
  repository: 'https://github.com/alphagov/govspeak',
  officialUrl: 'https://rubygems.org/gems/govspeak',
  evidenceUrl: 'https://docs.publishing.service.gov.uk/repos/govspeak.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'ruby', 'publishing'],
} satisfies Project;
