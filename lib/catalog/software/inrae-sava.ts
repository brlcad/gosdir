import type { Project } from '../types';

export default {
  id: 'inrae-sava',
  name: 'SAVA',
  summary:
    'A versioned INRAE AgroClim Java library for exposing application metrics in Prometheus format across Java SE, EE and Jakarta.',
  sponsor: 'INRAE AgroClim service unit',
  agencyIds: ['fr-inrae-agroclim'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2022,
  license: 'GPL-3.0-only',
  repository: 'https://forge.inrae.fr/agroclim/sava',
  officialUrl: 'https://forge.inrae.fr/agroclim/sava',
  evidenceUrl: 'https://forge.inrae.fr/agroclim/sava/-/blob/main/README.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'inrae', 'java', 'observability'],
} satisfies Project;
