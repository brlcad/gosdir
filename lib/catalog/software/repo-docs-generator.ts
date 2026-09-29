import type { Project } from '../types';

export default {
  id: 'repo-docs-generator',
  name: 'Repo Docs Generator',
  summary:
    'A Dutch government developer-portal web app and CLI that generates publiccode metadata and standard repository documentation.',
  sponsor: 'Dutch government developer portal (developer.overheid.nl), maintained through Geonovum',
  agencyIds: ['nl-geonovum'],
  geography: 'Netherlands',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2025,
  license: 'EUPL-1.2 (initial public source was MIT)',
  repository: 'https://github.com/developer-overheid-nl/repo-docs-generator',
  officialUrl: 'https://developer.overheid.nl/kennisbank/open-source/tutorials/tutorial-repo-docs-generator',
  evidenceUrl: 'https://github.com/developer-overheid-nl/repo-docs-generator/blob/main/publiccode.yml',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'publiccode', 'repository documentation', 'developer tools'],
} satisfies Project;
