import type { Project } from '../types';

export default {
  id: 'gc-notify',
  name: 'GC Notify',
  summary:
    'Canada’s government notification service for sending reliable email and text messages at scale.',
  sponsor: 'Canadian Digital Service',
  agencyIds: ['ca-canadian-digital-service'],
  geography: 'Canada',
  jurisdiction: 'International',
  domain: 'Communications',
  license: 'MIT',
  repository: 'https://github.com/cds-snc/notification-api',
  officialUrl: 'https://notification.canada.ca/',
  status: 'Active',
  verified: '2026-09-03',
  tags: ['canada', 'notifications', 'shared service'],
} satisfies Project;
