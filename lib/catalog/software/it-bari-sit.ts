import type { Project } from '../types';

export default {
  id: 'it-bari-sit',
  name: 'Sistema Informativo Territoriale (SIT AV Bari)',
  summary:
    'The Area Vasta Metropoli Terra di Bari’s multi-municipality web GIS for public map consultation, territorial and planning layers, and related municipal spatial services.',
  sponsor:
    'Area Vasta Metropoli Terra di Bari (AVMTB); Comune di Bari is the documented source steward and repository host',
  agencyIds: [
    'it-area-vasta-metropoli-terra-di-bari',
    'it-comune-di-bari',
  ],
  geography: 'Italy (Metropolitan Bari area, Apulia)',
  jurisdiction: 'International',
  domain: 'Geospatial services',
  openSourceYear: 2022,
  license:
    'AGPL-3.0-or-later for the SIT AV Bari project source and custom modules in this repository; upstream G3W Suite and third-party components retain their own licenses',
  repository: 'https://github.com/comunedibari/SIT',
  officialUrl: 'https://sit.egov.ba.it/it/',
  evidenceUrl:
    'https://trasparenza.comune.bari.it/comunebari/archivio/174901-relazione-sulla-performance/doc/870',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['italy', 'apulia', 'bari', 'geospatial', 'municipal services'],
} satisfies Project;
