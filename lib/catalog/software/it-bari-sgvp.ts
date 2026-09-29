import type { Project } from '../types';

export default {
  id: 'it-bari-sgvp',
  name: 'SGVP Gestione e Verifica Pass',
  summary:
    'The Comune di Bari’s application for managing municipal-issued passes and verifying them through QR codes.',
  sponsor: 'Comune di Bari',
  agencyIds: ['it-comune-di-bari'],
  geography: 'Italy (Bari, Apulia)',
  jurisdiction: 'International',
  domain: 'Digital government & municipal services',
  openSourceYear: 2023,
  license:
    'EUPL-1.2 for first-party SGVP application source in this repository; separately licensed dependencies and assets retain their own terms',
  repository: 'https://github.com/comunedibari/sgvp',
  officialUrl:
    'https://trasparenza.comune.bari.it/comunebari/archivio/174901-relazione-sulla-performance/doc/870',
  evidenceUrl:
    'https://trasparenza.comune.bari.it/comunebari/archivio/174901-relazione-sulla-performance/doc/870',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['italy', 'bari', 'passes', 'qr verification', 'municipal services'],
} satisfies Project;
