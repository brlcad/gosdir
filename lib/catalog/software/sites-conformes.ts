import type { Project } from '../types';

export default {
  id: 'sites-conformes',
  name: 'Sites Conformes',
  summary:
    'A Wagtail-based CMS for publishing French public-service websites with the State Design System.',
  sponsor: 'French Interministerial Digital Directorate (DINUM), beta.gouv.fr',
  agencyIds: ['fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Government websites',
  openSourceYear: 2023,
  license: 'AGPL-3.0 code; French State design identity and assets restricted',
  repository: 'https://github.com/numerique-gouv/sites-conformes',
  officialUrl: 'https://sites.beta.gouv.fr/',
  evidenceUrl: 'https://github.com/numerique-gouv/sites-conformes',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'cms', 'web publishing', 'public services'],
} satisfies Project;
