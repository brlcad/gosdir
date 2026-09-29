import type { Project } from '../types';

export default {
  id: 'signalen',
  name: 'Signalen',
  summary:
    'Amsterdam’s public-space reporting and case-management system; its reviewed Django backend and citizen-facing frontend are open source.',
  sponsor: 'Municipality of Amsterdam (Gemeente Amsterdam)',
  agencyIds: ['nl-municipality-amsterdam'],
  geography: 'Netherlands (Amsterdam)',
  jurisdiction: 'International',
  domain: 'Civic services',
  openSourceYear: 2018,
  license: 'MPL-2.0 (reviewed backend and frontend repositories)',
  repository: 'https://github.com/Amsterdam/signals',
  officialUrl: 'https://www.amsterdam.nl/leefomgeving/een-melding-doen/',
  evidenceUrl: 'https://oss.developer.overheid.nl/repositories/48504562-16d8-446e-b87b-d012a47ac4c1',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['netherlands', 'amsterdam', 'public reporting', 'case management'],
} satisfies Project;
