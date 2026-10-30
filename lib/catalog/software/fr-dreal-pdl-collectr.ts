import type { Project } from '../types';

export default {
  id: 'fr-dreal-pdl-collectr',
  name: 'collectr',
  summary:
    'An R package for collecting and consolidating tabular and geographic files and importing the resulting tables into PostgreSQL.',
  sponsor:
    'DREAL Pays de la Loire, Centre de services de la donnée (CSD), ADL subgroup.',
  agencyIds: ['fr-dreal-pays-de-la-loire'],
  geography: 'Pays de la Loire, France.',
  jurisdiction: 'International',
  domain: 'Data ingestion and database tooling',
  openSourceYear: 2023,
  license: 'MIT License',
  repository:
    'https://gitlab-forge.din.developpement-durable.gouv.fr/dreal-pdl/csd/adl/collectr',
  officialUrl:
    'https://dreal-pdl.gitlab-pages.din.developpement-durable.gouv.fr/csd/adl/collectr/',
  evidenceUrl:
    'https://gitlab-forge.din.developpement-durable.gouv.fr/dreal-pdl/csd/adl/collectr/-/blob/main/README.Rmd',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'france',
    'dreal pays de la loire',
    'r',
    'data ingestion',
    'postgresql',
  ],
} satisfies Project;
