import type { Project } from '../types';

export default {
  id: 'govspeak-preview',
  name: 'Govspeak Preview',
  summary:
    'Live GOV.UK publishing tool for converting formatted documents to Govspeak and previewing their rendered appearance.',
  sponsor: 'UK Government Digital Service, Publishing Platform',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Publishing tools',
  openSourceYear: 2018,
  license:
    'MIT (Govspeak Preview application source; dependencies retain separate terms)',
  repository: 'https://github.com/alphagov/govspeak-preview',
  officialUrl: 'https://govspeak-preview.publishing.service.gov.uk/',
  evidenceUrl: 'https://github.com/alphagov/govspeak-preview',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'publishing', 'preview'],
} satisfies Project;
