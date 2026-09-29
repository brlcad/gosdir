import type { Project } from '../types';

export default {
  id: 'rndt-metadata-catalogue',
  name: 'RNDT Metadata Catalogue',
  summary:
    'The reusable core catalogue application for managing, publishing, and searching Italian public-sector geospatial metadata under national RNDT and European INSPIRE profiles.',
  sponsor: 'Agency for Digital Italy (AgID); developed by ESRI Italia under public procurement',
  agencyIds: ['it-agid'],
  geography: 'Italy',
  jurisdiction: 'International',
  domain: 'Geospatial data infrastructure',
  openSourceYear: 2020,
  license: 'EUPL-1.2',
  repository: 'https://github.com/AgID/rndt-catalogue',
  officialUrl: 'https://geodati.gov.it/',
  evidenceUrl:
    'https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2020/09/30/rndt-20-disponibile-il-codice-suite-il-riuso',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['italy', 'geospatial', 'metadata', 'INSPIRE', 'EUPL'],
} satisfies Project;
