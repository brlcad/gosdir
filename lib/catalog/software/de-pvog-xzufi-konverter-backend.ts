import type { Project } from '../types';

export default {
  id: 'de-pvog-xzufi-konverter-backend',
  name: 'PVOG XZuFi-Konverter Backend',
  summary:
    'A REST service for converting Portalverbund Online-Gateway administrative-service objects between XZuFi format versions.',
  sponsor:
    'IT-Planungsrat (PVOG product); product management by FITKO, implementation and support by Dataport AöR.',
  agencyIds: ['de-it-planungsrat', 'de-fitko', 'de-dataport'],
  geography: 'Germany; federal and Länder Portalverbund systems.',
  jurisdiction: 'International',
  domain: 'Digital government interoperability and administrative services',
  openSourceYear: 2025,
  license: 'EUPL-1.2 for backend source code.',
  repository:
    'https://gitlab.opencode.de/fitko/pvog/produkt/xzufi-konverter-backend',
  officialUrl:
    'https://produktportal.pvog.fitko.de/api/konverter/portalverbund-konverter-rest-api/',
  evidenceUrl: 'https://docs.fitko.de/resources/pvog/',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'germany',
    'pvog',
    'xzufi',
    'interoperability',
    'rest api',
    'spring boot',
  ],
} satisfies Project;
