import type { Project } from '../types';

export default {
  id: 'govuk-notify-ruby-client',
  name: 'GOV.UK Notify Ruby Client',
  summary:
    'GDS-published Ruby SDK for integrating applications with the GOV.UK Notify messaging API.',
  sponsor: 'UK Government Digital Service (GDS), GOV.UK Notify',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Notification SDKs',
  openSourceYear: 2016,
  license: 'MIT (client source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/notifications-ruby-client',
  officialUrl: 'https://docs.notifications.service.gov.uk/ruby.html',
  evidenceUrl: 'https://rubygems.org/gems/notifications-ruby-client',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk notify', 'ruby', 'sdk', 'notifications'],
} satisfies Project;
