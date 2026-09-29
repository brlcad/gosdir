import type { Project } from '../types';

export default {
  id: 'rubocop-govuk',
  name: 'RuboCop GOV.UK',
  summary:
    'GDS-published and versioned Ruby lint-rule gem encoding style conventions used by GOV.UK applications.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2022,
  license: 'MIT (lint-rule source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/rubocop-govuk',
  officialUrl: 'https://rubygems.org/gems/rubocop-govuk',
  evidenceUrl: 'https://rubygems.org/gems/rubocop-govuk',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'ruby', 'linting', 'style guide'],
} satisfies Project;
