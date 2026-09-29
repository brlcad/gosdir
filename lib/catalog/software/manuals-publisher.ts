import type { Project } from '../types';

export default {
  id: 'manuals-publisher',
  name: 'GOV.UK Manuals Publisher',
  summary:
    'GDS publishing application used to author and publish GOV.UK manuals, including the Highway Code, MOT guides, and Immigration Rules.',
  sponsor: 'Government Digital Service (GDS), Whitehall Experience team',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Government publishing',
  openSourceYear: 2014,
  license: 'MIT',
  repository: 'https://github.com/alphagov/manuals-publisher',
  officialUrl:
    'https://docs.publishing.service.gov.uk/repos/manuals-publisher.html',
  evidenceUrl:
    'https://docs.publishing.service.gov.uk/repos/manuals-publisher.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'publishing', 'manuals'],
} satisfies Project;
