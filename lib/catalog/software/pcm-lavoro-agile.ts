import type { Project } from '../types';

export default {
  id: 'pcm-lavoro-agile',
  name: 'Gestione accordi di Lavoro Agile',
  summary:
    'An application for managing Italian central-government employees’ agile-work agreements.',
  sponsor:
    'Presidenza del Consiglio dei Ministri (Presidency of the Council of Ministers)',
  agencyIds: ['it-presidency-council-ministers'],
  geography: 'Italy',
  jurisdiction: 'International',
  domain: 'Human resources and public administration',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/PCM-DSS/lavoro-agile',
  officialUrl:
    'https://presidenza.governo.it/AmministrazioneTrasparente/DisposizioniGenerali/PIAO/PIAO_2022-2024.pdf',
  evidenceUrl:
    'https://presidenza.governo.it/AmministrazioneTrasparente/DisposizioniGenerali/PIAO/PIAO_2022-2024.pdf',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['Italy', 'public administration', 'human resources', 'MIT'],
} satisfies Project;
