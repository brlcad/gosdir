import type { Project } from '../types';

export default {
  id: 'my-monitor',
  name: 'MyMonitor Web Accessibility Monitor',
  summary:
    'ARTE’s web application for public and private entities to monitor website accessibility continuously, analyze multiple pages, and review detailed reports for remediation.',
  sponsor: 'Agency for the Technological Reform of the State (ARTE), Portugal',
  agencyIds: ['pt-arte'],
  geography: 'Portugal',
  jurisdiction: 'International',
  domain: 'Web accessibility',
  openSourceYear: 2025,
  license: 'MIT for first-party MyMonitor application source; dependencies retain their own licenses',
  repository: 'https://github.com/amagovpt/MyMonitor',
  officialUrl: 'https://mosaico.gov.pt/ferramentas/my-monitor',
  evidenceUrl: 'https://amagovpt.github.io/ead/acessibilidade.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['portugal', 'accessibility', 'wcag', 'web', 'observatory'],
} satisfies Project;
