import type { Project } from '../types';

export default {
  id: 'sdgital2030-output',
  name: 'SDGital2030 Output',
  summary:
    'Public reporting app for Swiss Agenda 2030 progress; the input modules remain closed and report generation requires commercial Syncfusion.',
  sponsor: 'Swiss Federal Department of Foreign Affairs (FDFA)',
  agencyIds: ['ch-fdfa'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Government reporting',
  openSourceYear: 2025,
  license: 'MIT (first-party Output code; dependencies separately licensed)',
  repository: 'https://github.com/eda-admin-ch/agenda2030-output',
  officialUrl: 'https://www.sdgital2030.ch/',
  evidenceUrl:
    'https://www.agenda-2030.eda.admin.ch/de/laenderbericht-und-bestandesaufnahme',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: [
    'switzerland',
    'sustainable development',
    'government reporting',
    'public portal',
  ],
} satisfies Project;
