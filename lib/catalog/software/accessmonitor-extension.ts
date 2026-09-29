import type { Project } from '../types';

export default {
  id: 'accessmonitor-extension',
  name: 'AccessMonitor Browser Extension',
  summary:
    'An official Chrome and Edge extension that evaluates authenticated, development, and changing-state web pages using AccessMonitor accessibility checks.',
  sponsor: 'Agency for the Technological Reform of the State (ARTE)',
  agencyIds: ['pt-arte'],
  geography: 'Portugal',
  jurisdiction: 'International',
  domain: 'Web accessibility',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/amagovpt/accessmonitor-ce',
  officialUrl:
    'https://chromewebstore.google.com/detail/accessmonitor-extension/knjdoonhhnjfmigigfgoehhihodndaii',
  evidenceUrl: 'https://mosaico.gov.pt/ferramentas/accessmonitor',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['portugal', 'accessibility', 'browser extension', 'WCAG', 'MIT'],
} satisfies Project;
