import type { Project } from '../types';

export default {
  id: 'developers-italia-api',
  name: 'Developers Italia Open Catalog API',
  summary:
    'A reusable REST API for public-administration software catalogs that powers the Italian Developers Italia software catalog.',
  sponsor: 'Developers Italia (Department for Digital Transformation and AgID)',
  agencyIds: ['it-dtd', 'it-agid'],
  geography: 'Italy',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2022,
  license: 'AGPL-3.0',
  repository: 'https://github.com/italia/developers-italia-api',
  officialUrl: 'https://developers.italia.it/it/api/developers-italia',
  evidenceUrl:
    'https://developers.italia.it/it/news/2022/11/29/verso-un-catalogo-europeo-software-open-source',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['italy', 'software catalog', 'REST API', 'public administrations'],
} satisfies Project;
