import type { Project } from '../types';

export default {
  id: 'oas-generator',
  name: 'OAS Generator',
  summary:
    'A Geonovum-published browser and CLI tool that generates OpenAPI specifications aligned with Dutch government API Design Rules.',
  sponsor: 'Stichting Geonovum and the Dutch government developer portal',
  agencyIds: ['nl-geonovum'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2025,
  license: 'EUPL-1.2 (initial public source was MIT)',
  repository: 'https://github.com/developer-overheid-nl/oas-generator',
  officialUrl: 'https://developer.overheid.nl/kennisbank/api-ontwikkeling/tools/openapi-specification-generator',
  evidenceUrl: 'https://github.com/developer-overheid-nl/oas-generator/blob/main/publiccode.yml',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'openapi', 'api design rules', 'developer tools'],
} satisfies Project;
