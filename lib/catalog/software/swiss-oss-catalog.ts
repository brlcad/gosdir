import type { Project } from '../types';

export default {
  id: 'swiss-oss-catalog',
  name: 'Swiss Open Source Software Catalog',
  summary:
    'The federal catalogue that collects and publishes publiccode metadata for open-source software developed by Swiss authorities.',
  sponsor: 'Swiss Federal Chancellery',
  agencyIds: ['ch-federal-chancellery'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Open source governance',
  openSourceYear: 2025,
  license: 'AGPL-3.0-or-later',
  repository: 'https://github.com/swiss/oss-catalog',
  officialUrl: 'https://www.opensource.admin.ch/en/',
  evidenceUrl: 'https://github.com/swiss/oss-catalog/commit/9b55c51ae4ced60c1df13c243583c3c2c9e9d3d6',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'software catalog', 'publiccode', 'government reuse'],
} satisfies Project;
