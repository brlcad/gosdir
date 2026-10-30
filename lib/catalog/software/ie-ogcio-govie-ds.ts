import type { Project } from '../types';

export default {
  id: 'ie-ogcio-govie-ds',
  name: 'Government of Ireland Design System',
  summary:
    'A design system with reusable components for consistent, accessible Irish government digital services.',
  sponsor:
    'Office of the Government Chief Information Officer (OGCIO), Ireland',
  agencyIds: ['ie-ogcio'],
  geography: 'Dublin 2, Ireland (national government services)',
  jurisdiction: 'International',
  domain: 'Design systems',
  openSourceYear: 2024,
  license:
    'MIT for first-party repository source; dependencies and government identity assets are separate',
  repository: 'https://github.com/ogcio/govie-ds',
  officialUrl: 'https://ds.services.gov.ie/',
  evidenceUrl: 'https://github.com/ogcio/govie-ds/releases',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'ireland',
    'ogcio',
    'design system',
    'accessibility',
    'government services',
  ],
} satisfies Project;
