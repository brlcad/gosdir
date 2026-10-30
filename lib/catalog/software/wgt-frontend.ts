import type { Project } from '../types';

export default {
  id: 'wgt-frontend',
  name: 'WGT Frontend',
  summary:
    'The Provincia autonoma di Trento reusable frontend for its Web GIS cross-cutting application.',
  sponsor:
    'Provincia autonoma di Trento, with Trentino Digitale as technical operator',
  agencyIds: ['it-provincia-autonoma-trento'],
  geography:
    'Trentino, Italy; README also documents reuse by European public authorities',
  jurisdiction: 'International',
  domain: 'Geographic information systems',
  openSourceYear: 2017,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ProvinciaAutonomaTrento/wgt-frontend',
  officialUrl: 'https://webgis.provincia.tn.it/wgt/',
  evidenceUrl:
    'https://github.com/ProvinciaAutonomaTrento/wgt-frontend/blob/master/README.md',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['Italy', 'Trentino', 'Web GIS', 'mapping', 'BSD-3-Clause'],
} satisfies Project;
