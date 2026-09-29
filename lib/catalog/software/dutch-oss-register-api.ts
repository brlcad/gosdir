import type { Project } from '../types';

export default {
  id: 'dutch-oss-register-api',
  name: 'Dutch Open Source Register API',
  summary:
    'The open-source backend API for the Dutch government register of public-sector source repositories.',
  sponsor:
    'Stichting Geonovum, for the BZK-supported developer.overheid.nl platform',
  agencyIds: ['nl-geonovum', 'nl-ministry-interior-kingdom-relations'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2025,
  license: 'EUPL-1.2 (backend API repository)',
  repository: 'https://github.com/developer-overheid-nl/don-oss-register',
  officialUrl: 'https://oss.developer.overheid.nl/',
  evidenceUrl:
    'https://github.com/developer-overheid-nl/don-oss-register/commit/5ddecde38cc42312b2b79ee4857f8e33b35f20f4',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'open source register', 'developer tools', 'geonovum'],
} satisfies Project;
