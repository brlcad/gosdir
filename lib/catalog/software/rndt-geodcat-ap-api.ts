import type { Project } from '../types';

export default {
  id: 'rndt-geodcat-ap-api',
  name: 'RNDT GeoDCAT-AP API',
  summary:
    'A public API that transforms Italian RNDT territorial-data metadata into GeoDCAT-AP/DCAT-AP_IT representations for discovery through general open-data portals.',
  sponsor: 'Agency for Digital Italy (AgID); developed by ESRI Italia under public procurement',
  agencyIds: ['it-agid'],
  geography: 'Italy',
  jurisdiction: 'International',
  domain: 'Geospatial interoperability',
  openSourceYear: 2020,
  license: 'EUPL-1.2',
  repository: 'https://github.com/AgID/rndt-geodcat-ap-api',
  officialUrl: 'https://geodati.gov.it/geodcat-ap_it/',
  evidenceUrl:
    'https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2020/09/30/rndt-20-disponibile-il-codice-suite-il-riuso',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['italy', 'geospatial', 'metadata', 'DCAT-AP', 'EUPL'],
} satisfies Project;
