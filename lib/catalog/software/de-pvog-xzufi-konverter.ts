import type { Project } from '../types';

export default {
  id: 'de-pvog-xzufi-konverter',
  name: 'PVOG XZuFi-Konverter',
  summary:
    'A Java library for converting administrative-service data between XZuFi format versions for the Portalverbund Online-Gateway.',
  sponsor:
    'IT-Planungsrat (PVOG product); product management by FITKO, implementation/support by Dataport AöR.',
  agencyIds: ['de-it-planungsrat', 'de-fitko', 'de-dataport'],
  geography: 'Germany; federal and Länder Portalverbund systems.',
  jurisdiction: 'International',
  domain: 'Digital government interoperability and administrative services',
  openSourceYear: 2024,
  license: 'EUPL-1.2 for the converter library source.',
  repository:
    'https://gitlab.opencode.de/fitko/pvog/produkt/bibliotheken/xzufi-konverter',
  officialUrl: 'https://produktportal.pvog.fitko.de/docs/konverter/ueberblick/',
  evidenceUrl: 'https://docs.fitko.de/resources/pvog/',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'germany',
    'pvog',
    'xzufi',
    'interoperability',
    'administrative services',
    'java',
  ],
} satisfies Project;
