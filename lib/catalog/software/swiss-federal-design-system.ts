import type { Project } from '../types';

export default {
  id: 'swiss-federal-design-system',
  name: 'Design System for the Swiss Confederation',
  summary:
    'Federal Chancellery web design system with reusable HTML structures, CSS assets, components, and layout guidance.',
  sponsor: 'Swiss Federal Chancellery',
  agencyIds: ['ch-federal-chancellery'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Design systems',
  openSourceYear: 2024,
  license:
    'MIT (software assets; Swiss government logo, favicon, and branding excluded)',
  repository: 'https://github.com/swiss/designsystem',
  officialUrl: 'https://swiss.github.io/designsystem/',
  evidenceUrl: 'https://github.com/swiss/designsystem/blob/main/publiccode.yml',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'federal', 'design system', 'css'],
} satisfies Project;
