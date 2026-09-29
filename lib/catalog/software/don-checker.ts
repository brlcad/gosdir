import type { Project } from '../types';

export default {
  id: 'don-checker',
  name: 'DON Checker',
  summary:
    'A Geonovum-published browser and CLI validator for Dutch government API Design Rules and publiccode metadata.',
  sponsor: 'Stichting Geonovum and the Dutch government developer portal',
  agencyIds: ['nl-geonovum'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2026,
  license: 'EUPL-1.2',
  repository: 'https://github.com/developer-overheid-nl/don-checker',
  officialUrl: 'https://developer.overheid.nl/kennisbank/apis/api-design-rules/api-design-rules-linter',
  evidenceUrl: 'https://github.com/developer-overheid-nl/don-checker/blob/main/publiccode.yml',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'api design rules', 'openapi', 'publiccode'],
} satisfies Project;
