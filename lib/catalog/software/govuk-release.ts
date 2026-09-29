import type { Project } from '../types';

export default {
  id: 'govuk-release',
  name: 'GOV.UK Release',
  summary:
    'GDS production dashboard for managing and reviewing releases across GOV.UK platform environments.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Deployment operations',
  openSourceYear: 2013,
  license: 'MIT (application source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/release',
  officialUrl: 'https://docs.publishing.service.gov.uk/repos/release.html',
  evidenceUrl: 'https://docs.publishing.service.gov.uk/repos/release.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'deployment', 'operations'],
} satisfies Project;
