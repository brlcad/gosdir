import type { Project } from '../types';

export default {
  id: 'pass-culture-main',
  name: 'pass Culture application and professional service',
  summary:
    'The consumer app, professional service, and supporting API behind France’s pass Culture programme.',
  sponsor:
    'pass Culture SAS, majority-owned by the French State and overseen by the Ministry of Culture',
  agencyIds: ['fr-pass-culture-sas'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Culture and public services',
  openSourceYear: 2019,
  license: 'MPL-2.0',
  repository: 'https://github.com/pass-culture/pass-culture-main',
  officialUrl: 'https://pass.culture.fr/',
  evidenceUrl: 'https://pass.culture.fr/cgu-professionnels',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'culture', 'mobile application', 'MPL-2.0'],
} satisfies Project;
