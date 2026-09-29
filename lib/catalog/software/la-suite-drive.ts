import type { Project } from '../types';

export default {
  id: 'la-suite-drive',
  name: 'La Suite Fichiers (Drive)',
  summary:
    'DINUM’s government file-storage and sharing application, with browser-based collaborative document editing and self-hosting guidance.',
  sponsor: 'Direction interministérielle du numérique (DINUM)',
  agencyIds: ['fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Government operations',
  openSourceYear: 2025,
  license: 'MIT (repository code; government content and marks have separate terms)',
  repository: 'https://github.com/suitenumerique/drive',
  officialUrl: 'https://fichiers.numerique.gouv.fr/',
  evidenceUrl: 'https://lasuite.numerique.gouv.fr/legal/drive/modalite-utilisation',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'dinum', 'la suite', 'file sharing', 'collaboration'],
} satisfies Project;
