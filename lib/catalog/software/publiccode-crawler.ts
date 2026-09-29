import type { Project } from '../types';

export default {
  id: 'publiccode-crawler',
  name: 'publiccode.yml Crawler',
  summary:
    'A government-developed crawler that scans registered public-administration repositories for publiccode.yml files to feed the Developers Italia reuse catalog.',
  sponsor: 'Developers Italia (Department for Digital Transformation and AgID)',
  agencyIds: ['it-dtd', 'it-agid'],
  geography: 'Italy',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2018,
  license: 'AGPL-3.0',
  repository: 'https://github.com/italia/publiccode-crawler',
  officialUrl: 'https://github.com/italia/publiccode-crawler',
  evidenceUrl: 'https://github.com/italia/developers-italia-onboarding',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['italy', 'publiccode.yml', 'catalog', 'crawler', 'developer tools'],
} satisfies Project;
