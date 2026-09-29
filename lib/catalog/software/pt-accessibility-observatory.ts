import type { Project } from '../types';

export default {
  id: 'pt-accessibility-observatory',
  name: 'Portuguese Web Accessibility Observatory',
  summary:
    'The public-facing application for Portugal’s Web Accessibility Observatory, presenting sampled accessibility practices and statistics across websites, sectors, and the country.',
  sponsor: 'Agency for the Technological Reform of the State (ARTE), Portugal',
  agencyIds: ['pt-arte', 'pt-government'],
  geography: 'Portugal',
  jurisdiction: 'International',
  domain: 'Web accessibility',
  openSourceYear: 2025,
  license: 'MIT for first-party Observatory frontend source; dependencies retain their own licenses',
  repository: 'https://github.com/amagovpt/observatory',
  officialUrl: 'https://observatorio.acessibilidade.gov.pt/',
  evidenceUrl: 'https://amagovpt.github.io/ead/acessibilidade.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['portugal', 'accessibility', 'wcag', 'observatory', 'public sector'],
} satisfies Project;
