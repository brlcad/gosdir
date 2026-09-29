import type { Project } from '../types';

export default {
  id: 'govuk-notify-dotnet-client',
  name: 'GOV.UK Notify .NET Client',
  summary:
    'GDS-published .NET SDK for integrating applications with the GOV.UK Notify messaging API.',
  sponsor: 'Government Digital Service (GDS), GOV.UK Notify',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Notification SDKs',
  openSourceYear: 2018,
  license: 'MIT (client source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/notifications-net-client',
  officialUrl: 'https://docs.notifications.service.gov.uk/net.html',
  evidenceUrl: 'https://www.nuget.org/packages/GovukNotify',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk notify', '.net', 'sdk', 'notifications'],
} satisfies Project;
