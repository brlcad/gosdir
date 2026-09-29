import type { Project } from '../types';

export default {
  id: 'places-manager',
  name: 'GOV.UK Places Manager',
  summary:
    'GDS production API and management application for geocoded location datasets used by GOV.UK Find My Nearest services.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Location services',
  openSourceYear: 2016,
  license: 'MIT (application source; managed datasets retain their own terms)',
  repository: 'https://github.com/alphagov/places-manager',
  officialUrl:
    'https://docs.publishing.service.gov.uk/repos/places-manager.html',
  evidenceUrl:
    'https://docs.publishing.service.gov.uk/repos/places-manager/adding-a-new-service.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'locations', 'api', 'public service'],
} satisfies Project;
