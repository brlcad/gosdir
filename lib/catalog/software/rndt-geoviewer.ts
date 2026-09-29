import type { Project } from '../types';

export default {
  id: 'rndt-geoviewer',
  name: 'RNDT GeoViewer',
  summary:
    'A web viewer for searching and visualizing geographic resources, mapping services, and geospatial files in Italy’s national territorial-data catalogue.',
  sponsor:
    'Agency for Digital Italy (AgID); developed by ESRI Italia under public procurement',
  agencyIds: ['it-agid'],
  geography: 'Italy',
  jurisdiction: 'International',
  domain: 'Geospatial data',
  openSourceYear: 2020,
  license: 'EUPL-1.2',
  repository: 'https://github.com/AgID/rndt-geoviewer',
  officialUrl: 'https://geodati.gov.it/geoportale/',
  evidenceUrl:
    'https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2020/09/30/rndt-20-disponibile-il-codice-suite-il-riuso',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['italy', 'geospatial', 'mapping', 'EUPL'],
} satisfies Project;
