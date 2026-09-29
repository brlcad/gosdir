import type { Project } from '../types';

export default {
  id: 'la-suite-docs',
  name: 'La Suite Docs',
  summary:
    'A DINUM-operated collaborative editor for real-time government document authoring, sharing, publishing, and export to open and common office formats.',
  sponsor: 'French Interministerial Digital Directorate',
  agencyIds: ['fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Communications',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/suitenumerique/docs',
  officialUrl: 'https://lasuite.numerique.gouv.fr/produits/docs',
  evidenceUrl:
    'https://lasuite.numerique.gouv.fr/legal/docs/modalite-utilisation',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['france', 'documents', 'collaboration', 'productivity'],
} satisfies Project;
