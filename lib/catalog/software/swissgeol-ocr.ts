import type { Project } from '../types';

export default {
  id: 'swissgeol-ocr',
  name: 'SwissGeo OCR Pipeline',
  summary:
    'Swisstopo’s reusable script and API for turning scanned geological PDFs into searchable documents, integrated with its assets and boreholes applications.',
  sponsor: 'Swiss Federal Office of Topography (swisstopo)',
  agencyIds: ['ch-swisstopo'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Geospatial data',
  openSourceYear: 2026,
  license:
    'AGPL-3.0 (repository source; AWS Textract is a separate commercial service)',
  repository: 'https://github.com/swisstopo/swissgeol-ocr',
  officialUrl: 'https://github.com/swisstopo/swissgeol-ocr',
  evidenceUrl:
    'https://github.com/swisstopo/swissgeol-ocr/commit/9445ade80a374e5a902f40fb461329e9fa1f46dc',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'geology', 'ocr', 'documents'],
} satisfies Project;
