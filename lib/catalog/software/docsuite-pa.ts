import type { Project } from '../types';

export default {
  id: 'docsuite-pa',
  name: 'DocSuite PA',
  summary:
    'Reusable public-administration suite for electronic document management, protocol, administrative acts, records, and workflow.',
  sponsor: 'Azienda USL di Reggio Emilia (AUSL Reggio Emilia); Dgroove Srl provides commercial maintenance and support',
  agencyIds: ['it-ausl-reggio-emilia'],
  geography: 'Italy (Reggio Emilia, Emilia-Romagna; reused by Italian public administrations)',
  jurisdiction: 'International',
  domain: 'Document and records management',
  openSourceYear: 2021,
  license: 'EUPL-1.2 for first-party application source; third-party and proprietary components retain separate terms',
  repository: 'https://github.com/ausl-reggioemilia/docsuitepa',
  officialUrl: 'https://ged.dgroove.it/hc/it/categories/115000605769-DocSuite-PA',
  evidenceUrl: 'https://www.enas.sardegna.it/dettagli/bando/5126',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['italy', 'ausl-reggio-emilia', 'document-management', 'protocol', 'workflow'],
} satisfies Project;
