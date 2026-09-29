import type { Project } from '../types';

export default {
  id: 'schema-data-gouv',
  name: 'schema.data.gouv.fr',
  summary:
    'France’s public-data schema registry and aggregation website for discovering, validating, and publishing reusable schemas.',
  sponsor: 'DINUM / Etalab, as a data.gouv.fr initiative',
  agencyIds: ['fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Open data',
  openSourceYear: 2019,
  license: 'MIT (website and aggregation code; schema data separately Licence Ouverte 2.0)',
  repository: 'https://github.com/datagouv/schema.data.gouv.fr',
  officialUrl: 'https://schema.data.gouv.fr/',
  evidenceUrl: 'https://schema.data.gouv.fr/validation.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'dinum', 'open data', 'schemas', 'registry'],
} satisfies Project;
