import type { Project } from '../types';

export default {
  id: 'govuk-publisher',
  name: 'GOV.UK Publisher',
  summary:
    'GDS mainstream publishing application used to create, review, manage and publish content across GOV.UK.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Content publishing',
  openSourceYear: 2012,
  license: 'MIT (application source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/publisher',
  officialUrl: 'https://docs.publishing.service.gov.uk/repos/publisher.html',
  evidenceUrl: 'https://docs.publishing.service.gov.uk/repos/publisher.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'publishing', 'content management'],
} satisfies Project;
