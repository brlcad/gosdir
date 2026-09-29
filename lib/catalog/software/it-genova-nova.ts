import type { Project } from '../types';

export default {
  id: 'it-genova-nova',
  name: 'NOVA',
  summary:
    'The Comune di Genova’s web marketplace connecting businesses with services, opportunities, and local innovation stakeholders.',
  sponsor:
    'Comune di Genova — Direzione Sviluppo Economico; developed with Liguria Digitale and BBS S.r.l. under PON Metro',
  agencyIds: ['it-comune-di-genova'],
  geography: 'Italy (Genoa, Liguria)',
  jurisdiction: 'International',
  domain: 'Business services & economic development',
  openSourceYear: 2023,
  license:
    'GPL-3.0-or-later for first-party NOVA code in this repository; Drupal core, upstream modules, and other dependencies retain their own licenses',
  repository: 'https://github.com/ComuneDiGenova/NOVA',
  officialUrl: 'https://nova.comune.genova.it/',
  evidenceUrl:
    'https://smart.comune.genova.it/sites/default/files/uploads/2025/Piano%202022-2024%20-%20Comune%20di%20Genova.pdf',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['italy', 'genoa', 'business services', 'economic development', 'digital government'],
} satisfies Project;
