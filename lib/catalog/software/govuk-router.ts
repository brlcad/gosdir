import type { Project } from '../types';

export default {
  id: 'govuk-router',
  name: 'GOV.UK Router',
  summary:
    'GDS production reverse proxy that routes public GOV.UK requests to the appropriate backend services.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Web infrastructure',
  openSourceYear: 2013,
  license: 'MIT (application source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/router',
  officialUrl: 'https://docs.publishing.service.gov.uk/repos/router.html',
  evidenceUrl: 'https://docs.publishing.service.gov.uk/repos/router.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'reverse proxy', 'infrastructure'],
} satisfies Project;
