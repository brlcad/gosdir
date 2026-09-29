import type { Project } from '../types';

export default {
  id: 'govuk-notify-java-client',
  name: 'GOV.UK Notify Java Client',
  summary:
    'GDS-published Java SDK for sending email, text, and letter messages through GOV.UK Notify.',
  sponsor: 'Government Digital Service (GDS), GOV.UK Notify',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Notification SDKs',
  openSourceYear: 2016,
  license: 'MIT (client source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/notifications-java-client',
  officialUrl: 'https://docs.notifications.service.gov.uk/java.html',
  evidenceUrl:
    'https://central.sonatype.com/artifact/uk.gov.service.notify/notifications-java-client',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk notify', 'java', 'sdk', 'notifications'],
} satisfies Project;
