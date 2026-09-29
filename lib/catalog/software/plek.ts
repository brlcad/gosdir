import type { Project } from '../types';

export default {
  id: 'plek',
  name: 'Plek',
  summary:
    'GDS Ruby library that resolves GOV.UK service base URLs according to the current deployment environment.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2015,
  license: 'MIT (library source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/plek',
  officialUrl: 'https://docs.publishing.service.gov.uk/repos/plek.html',
  evidenceUrl: 'https://rubygems.org/gems/plek',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'ruby', 'library', 'service discovery'],
} satisfies Project;
