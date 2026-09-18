import type { Project } from '../types';

export default {
  id: 'x-road',
  name: 'X-Road',
  summary:
    'The secure data exchange layer established by Estonia and Finland and now reused internationally.',
  sponsor: 'Estonia & Finland / NIIS',
  agencyIds: ['ee-government', 'fi-government', 'ee-fi-niis'],
  geography: 'Estonia',
  jurisdiction: 'International',
  domain: 'Data exchange',
  license: 'MIT',
  repository: 'https://github.com/nordic-institute/X-Road',
  officialUrl: 'https://x-road.global/',
  status: 'Active',
  featured: true,
  verified: '2026-09-03',
  tags: ['estonia', 'finland', 'interoperability'],
} satisfies Project;
