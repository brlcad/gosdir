import type { Project } from '../types';

export default {
  id: 'govuk-notify-python-client',
  name: 'GOV.UK Notify Python Client',
  summary:
    'GDS-published Python SDK for integrating applications with the GOV.UK Notify messaging API.',
  sponsor: 'UK Government Digital Service (GDS), GOV.UK Notify',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Notification SDKs',
  openSourceYear: 2015,
  license: 'MIT (client source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/notifications-python-client',
  officialUrl: 'https://docs.notifications.service.gov.uk/python.html',
  evidenceUrl: 'https://pypi.org/project/notifications-python-client/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk notify', 'python', 'sdk', 'notifications'],
} satisfies Project;
