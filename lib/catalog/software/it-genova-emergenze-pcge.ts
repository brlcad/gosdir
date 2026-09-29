import type { Project } from '../types';

export default {
  id: 'it-genova-emergenze-pcge',
  name: 'Nuovo Sistema Emergenze Protezione Civile (EMERGENZE)',
  summary:
    'A web-based geospatial incident and intervention management system for Comune di Genova Civil Protection staff and partner responders.',
  sponsor:
    'Comune di Genova — Protezione Civile and Information Systems Directorate; built by Gter S.r.l. with PON Metro funding',
  agencyIds: ['it-comune-di-genova'],
  geography: 'Italy (Genoa, Liguria)',
  jurisdiction: 'International',
  domain: 'Emergency management & civil protection',
  openSourceYear: 2024,
  license:
    'GPL-3.0-only for first-party source in this repository; separately licensed vendor libraries retain their own terms',
  repository: 'https://github.com/ComuneDiGenova/emergenze-pcge',
  officialUrl: 'https://emergenze.comune.genova.it/emergenze',
  evidenceUrl:
    'https://smart.comune.genova.it/comunicati-stampa-articoli/premiato-il-sistema-di-gestione-emergenze-del-comune-di-genova',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['italy', 'genoa', 'civil protection', 'emergency management', 'gis'],
} satisfies Project;
