import type { Project } from '../types';

export default {
  id: 'govuk-notify',
  name: 'GOV.UK Notify',
  summary:
    'A reusable notification service for public-sector email, text messages, and letters.',
  sponsor: 'UK Government Digital Service',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Communications',
  license: 'MIT',
  repository: 'https://github.com/alphagov/notifications-api',
  officialUrl: 'https://www.notifications.service.gov.uk/',
  status: 'Active',
  verified: '2026-09-03',
  tags: ['united kingdom', 'notifications', 'shared service'],
} satisfies Project;
