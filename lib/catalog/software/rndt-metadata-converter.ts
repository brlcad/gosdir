import type { Project } from '../types';

export default {
  id: 'rndt-metadata-converter',
  name: 'RNDT Metadata Converter',
  summary:
    'A web tool that converts territorial-data metadata between ISO 19139-based profiles, including Italian RNDT and European INSPIRE profiles.',
  sponsor: 'Agency for Digital Italy (AgID)',
  agencyIds: ['it-agid'],
  geography: 'Italy; adaptable to European member-state profiles',
  jurisdiction: 'International',
  domain: 'Geospatial data interoperability',
  openSourceYear: 2020,
  license: 'EUPL-1.2',
  repository: 'https://github.com/AgID/rndt-md-converter',
  officialUrl:
    'https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2020/06/22/rndt-metadata-converter-strumento-pa',
  evidenceUrl:
    'https://www.agid.gov.it/it/agenzia/stampa-e-comunicazione/notizie/2020/06/22/rndt-metadata-converter-strumento-pa',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['italy', 'geospatial', 'metadata', 'INSPIRE', 'EUPL'],
} satisfies Project;
