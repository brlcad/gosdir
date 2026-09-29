import type { Project } from '../types';

export default {
  id: 'govuk-notify-php-client',
  name: 'GOV.UK Notify PHP Client',
  summary:
    'GDS-published PHP SDK for integrating applications with the GOV.UK Notify messaging API.',
  sponsor: 'Government Digital Service (GDS), GOV.UK Notify',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Notification SDKs',
  openSourceYear: 2016,
  license: 'MIT (client source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/notifications-php-client',
  officialUrl: 'https://docs.notifications.service.gov.uk/php.html',
  evidenceUrl:
    'https://packagist.org/packages/alphagov/notifications-php-client',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk notify', 'php', 'sdk', 'notifications'],
} satisfies Project;
