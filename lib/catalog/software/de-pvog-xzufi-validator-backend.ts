import type { Project } from '../types';

export default {
  id: 'de-pvog-xzufi-validator-backend',
  name: 'PVOG XZuFi Validator Backend',
  summary:
    'A REST service for technical and business-rule validation of XZuFi administrative-service documents.',
  sponsor:
    'IT-Planungsrat (PVOG product); product management by FITKO, implementation and support by Dataport AöR.',
  agencyIds: ['de-it-planungsrat', 'de-fitko', 'de-dataport'],
  geography: 'Germany; federal and Länder Portalverbund systems.',
  jurisdiction: 'International',
  domain: 'Digital government interoperability and administrative services',
  openSourceYear: 2026,
  license: 'EUPL-1.2 for the backend source.',
  repository:
    'https://gitlab.opencode.de/fitko/pvog/produkt/xzufi-validator-backend',
  officialUrl: 'https://produktportal.pvog.fitko.de/docs/validator/ueberblick/',
  evidenceUrl: 'https://docs.fitko.de/resources/pvog/',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'germany',
    'pvog',
    'xzufi',
    'interoperability',
    'validation',
    'spring boot',
  ],
} satisfies Project;
