import type { Project } from '../types';

export default {
  id: 'inrae-dev-cas',
  name: 'dev-cas',
  summary:
    'A versioned INRAE AgroClim fake CAS server for developing and testing authenticated local applications, not a production identity service.',
  sponsor: 'INRAE AgroClim service unit',
  agencyIds: ['fr-inrae-agroclim'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2022,
  license: 'GPL-3.0 (some source headers permit later versions)',
  repository: 'https://forge.inrae.fr/agroclim/dev-cas',
  officialUrl: 'https://forge.inrae.fr/agroclim/dev-cas',
  evidenceUrl: 'https://forge.inrae.fr/agroclim/dev-cas/-/blob/main/README.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'inrae', 'cas', 'developer tools'],
} satisfies Project;
