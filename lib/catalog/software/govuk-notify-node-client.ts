import type { Project } from '../types';

export default {
  id: 'govuk-notify-node-client',
  name: 'GOV.UK Notify Node.js Client',
  summary:
    'GDS-published Node.js SDK for integrating applications with the GOV.UK Notify messaging API.',
  sponsor: 'Government Digital Service (GDS), GOV.UK Notify',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Notification SDKs',
  openSourceYear: 2016,
  license: 'MIT (client source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/notifications-node-client',
  officialUrl: 'https://docs.notifications.service.gov.uk/node.html',
  evidenceUrl: 'https://www.npmjs.com/package/notifications-node-client',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk notify', 'node.js', 'sdk', 'notifications'],
} satisfies Project;
