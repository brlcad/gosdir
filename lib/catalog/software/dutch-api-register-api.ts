import type { Project } from '../types';

export default {
  id: 'dutch-api-register-api',
  name: 'Dutch API Register API',
  summary:
    'The open-source backend API for the Dutch government register of public-sector APIs, with local deployment instructions.',
  sponsor:
    'Stichting Geonovum, for the BZK-supported developer.overheid.nl platform',
  agencyIds: ['nl-geonovum', 'nl-ministry-interior-kingdom-relations'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2025,
  license: 'EUPL-1.2 (backend API repository)',
  repository: 'https://github.com/developer-overheid-nl/don-api-register',
  officialUrl: 'https://apis.developer.overheid.nl/',
  evidenceUrl:
    'https://github.com/developer-overheid-nl/don-api-register/commit/7f12b80f9fd26f4f744ffb654de43b73a3254367',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'api register', 'interoperability', 'geonovum'],
} satisfies Project;
