import type { Project } from '../types';

export default {
  id: 'fr-proconnect-hyyypertool',
  name: 'Hyyypertool',
  summary: 'The ProConnect Identité back-office moderation application.',
  sponsor:
    'French Interministerial Digital Directorate (DINUM), under the Prime Minister',
  agencyIds: ['fr-dinum'],
  geography: 'France (DINUM, Paris)',
  jurisdiction: 'International',
  domain: 'Digital identity & service operations',
  openSourceYear: 2023,
  license: 'GPL-3.0',
  repository: 'https://github.com/proconnect-gouv/hyyypertool',
  officialUrl: 'https://www.proconnect.gouv.fr/',
  evidenceUrl:
    'https://github.com/proconnect-gouv/hyyypertool/releases/tag/2026.10.2',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['france', 'dinum', 'proconnect', 'identity', 'moderation'],
} satisfies Project;
