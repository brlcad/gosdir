import type { Project } from '../types';

export default {
  id: 'e-petitions',
  name: 'UK Government and Parliament Petitions',
  summary:
    'Public service for creating and signing petitions that can receive government responses and parliamentary debate.',
  sponsor: 'UK Parliament and Government Digital Service (GDS)',
  agencyIds: ['uk-parliament', 'uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Civic participation',
  openSourceYear: 2012,
  license: 'MIT (petitions application source)',
  repository: 'https://github.com/alphagov/e-petitions',
  officialUrl: 'https://petition.parliament.uk/',
  evidenceUrl:
    'https://github.com/alphagov/e-petitions/commit/02e26fa4e72101d6a3f6c8d5d22f3b2535d28399',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'parliament', 'petitions', 'ruby'],
} satisfies Project;
