import type { Project } from '../types';

export default {
  id: 'publiccode-validator-api',
  name: 'publiccode.yml Validator API',
  summary:
    'An Italian government-published REST API for validating publiccode.yml files and returning field-level errors and warnings.',
  sponsor:
    'Italian Digital Transformation Team, Presidency of the Council of Ministers (Developers Italia)',
  agencyIds: ['it-dtd'],
  geography: 'Italy',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2019,
  license: 'AGPL-3.0',
  repository: 'https://github.com/italia/publiccode-validator-api',
  officialUrl: 'https://github.com/italia/publiccode-validator-api',
  evidenceUrl: 'https://developers.italia.it/it',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['italy', 'publiccode.yml', 'REST API', 'validation', 'developer tools'],
} satisfies Project;
