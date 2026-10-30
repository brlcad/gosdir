import type { Project } from '../types';

export default {
  id: 'glifo',
  name: 'Glifo',
  summary:
    'A digital-stamp application from the Province of Forlì-Cesena for QR-linked verification of digitally signed originals.',
  sponsor: 'Amministrazione Provinciale di Forlì-Cesena',
  agencyIds: ['it-provincia-forli-cesena'],
  geography: 'Forlì-Cesena, Emilia-Romagna, Italy',
  jurisdiction: 'International',
  domain: 'Digital government services',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/prov-fc/glifo',
  officialUrl: 'https://github.com/prov-fc/glifo',
  evidenceUrl: 'https://github.com/prov-fc/glifo/blob/main/publiccode.yml',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'Italy',
    'Forlì-Cesena',
    'digital services',
    'digital signatures',
    'MIT',
  ],
} satisfies Project;
