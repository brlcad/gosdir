import type { Project } from '../types';

export default {
  id: 'uk-ons-cloud-status-alerter',
  name: 'Cloud Status Alerter',
  summary:
    'A reusable ONS tool that polls cloud/service status feeds and posts deduplicated Slack alerts.',
  sponsor: 'Office for National Statistics (ONS), ONS Digital, UK Government',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom (ONS headquarters, Newport, Wales)',
  jurisdiction: 'International',
  domain: 'Cloud operations and monitoring',
  openSourceYear: 2019,
  license:
    'MIT for first-party source; external services and dependencies are separate',
  repository: 'https://github.com/ONSdigital/cloud-status-alerter',
  officialUrl: 'https://github.com/ONSdigital/cloud-status-alerter',
  evidenceUrl:
    'https://github.com/ONSdigital/cloud-status-alerter/releases/tag/v2.2.0',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['united kingdom', 'ons', 'status monitoring', 'slack', 'kubernetes'],
} satisfies Project;
