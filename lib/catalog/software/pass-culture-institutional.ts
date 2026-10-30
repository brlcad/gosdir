import type { Project } from '../types';

export default {
  id: 'pass-culture-institutional',
  name: 'pass Culture institutional platform',
  summary:
    'The institutional website and content-management application operated by pass Culture SAS, distinct from the consumer/professional application.',
  sponsor:
    'pass Culture SAS, majority-owned by the French State and overseen by the Ministry of Culture',
  agencyIds: ['fr-pass-culture-sas'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Culture and public services',
  openSourceYear: 2023,
  license: 'MPL-2.0',
  repository: 'https://github.com/pass-culture/pass-culture-institutional',
  officialUrl: 'https://pass.culture.fr/',
  evidenceUrl: 'https://pass.culture.fr/schema-pluriannuel-2025-2027',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'culture', 'public service', 'MPL-2.0'],
} satisfies Project;
