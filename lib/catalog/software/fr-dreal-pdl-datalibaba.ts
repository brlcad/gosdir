import type { Project } from '../types';

export default {
  id: 'fr-dreal-pdl-datalibaba',
  name: 'datalibaba',
  summary:
    'An R library for populating and querying the DREAL Pays de la Loire Datalab PostgreSQL database.',
  sponsor:
    'DREAL Pays de la Loire, Centre de services de la donnée (CSD) / DREAL Datalab.',
  agencyIds: ['fr-dreal-pays-de-la-loire'],
  geography: 'Pays de la Loire, France.',
  jurisdiction: 'International',
  domain: 'Data access and analytics',
  openSourceYear: 2021,
  license: 'GNU General Public License v3.0 (GPL-3.0)',
  repository:
    'https://gitlab-forge.din.developpement-durable.gouv.fr/dreal-pdl/csd/datalibaba',
  officialUrl:
    'https://dreal-pdl.gitlab-pages.din.developpement-durable.gouv.fr/csd/datalibaba/index.html',
  evidenceUrl:
    'https://gitlab-forge.din.developpement-durable.gouv.fr/dreal-pdl/csd/datalibaba',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['france', 'dreal pays de la loire', 'r', 'data access', 'postgresql'],
} satisfies Project;
