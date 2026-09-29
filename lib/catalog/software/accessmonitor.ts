import type { Project } from '../types';

export default {
  id: 'accessmonitor',
  name: 'AccessMonitor Web Validator',
  summary:
    'A Portuguese government web service and standalone validator that assesses web accessibility against WCAG 2.1 and helps public bodies identify barriers.',
  sponsor:
    'Agency for the Technological Reform of the State (ARTE), in partnership with the Faculty of Sciences, University of Lisbon (FCUL)',
  agencyIds: ['pt-arte', 'pt-ul-ciencias'],
  geography: 'Portugal; reused internationally',
  jurisdiction: 'International',
  domain: 'Web accessibility',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/amagovpt/AccessMonitor',
  officialUrl: 'https://accessmonitor.acessibilidade.gov.pt/',
  evidenceUrl: 'https://mosaico.gov.pt/ferramentas/accessmonitor',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['portugal', 'accessibility', 'WCAG', 'web', 'MIT'],
} satisfies Project;
