import type { Project } from '../types';

export default {
  id: 'govuk-chat',
  name: 'GOV.UK Chat',
  summary:
    'GDS application powering the AI chat feature in the GOV.UK mobile app, grounded in official government content.',
  sponsor:
    'Government Digital Service (GDS), Department for Science, Innovation and Technology (DSIT)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Digital public services',
  openSourceYear: 2024,
  license:
    'MIT (public application source; private configuration gem excluded)',
  repository: 'https://github.com/alphagov/govuk-chat',
  officialUrl: 'https://www.gov.uk/guidance/download-the-govuk-app',
  evidenceUrl: 'https://gds.blog.gov.uk/2026/05/14/gov-uk-chat-launches/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'chat', 'artificial intelligence'],
} satisfies Project;
