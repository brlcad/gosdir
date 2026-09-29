import type { Project } from '../types';

export default {
  id: 'quality-time',
  name: 'Quality-time',
  summary:
    'A dashboard that aggregates software quality, security, maintainability, testing, and delivery metrics from development and operations tools.',
  sponsor: 'Stichting ICTU',
  agencyIds: ['nl-ictu'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Software analysis',
  openSourceYear: 2018,
  license: 'Apache-2.0',
  repository: 'https://github.com/ICTU/quality-time',
  officialUrl: 'https://quality-time.readthedocs.io/en/latest/',
  evidenceUrl:
    'https://oss.developer.overheid.nl/repositories/0d7c08f6-9f8d-41fd-bd40-1b80f015ce5f',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['netherlands', 'software quality', 'metrics', 'devops'],
} satisfies Project;
