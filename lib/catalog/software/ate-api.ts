import type { Project } from '../types';

export default {
  id: 'ate-api',
  name: 'ATE API',
  summary:
    'Active Travel England operational-data API for authorised clients, with public Python service and deployment source.',
  sponsor: 'Active Travel England',
  agencyIds: ['uk-active-travel-england'],
  geography: 'England',
  jurisdiction: 'International',
  domain: 'Government data',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/acteng/ate-api',
  officialUrl: 'https://github.com/acteng/ate-api',
  evidenceUrl: 'https://github.com/acteng/ate-api/releases/tag/1.6.0',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['england', 'active travel', 'government data', 'api'],
} satisfies Project;
