import type { Project } from '../types';

export default {
  id: 'etabli',
  name: 'Établi',
  summary:
    'A public directory and search service for French public-sector digital initiatives, their websites, and source repositories.',
  sponsor: 'beta.gouv.fr, within the French interministerial digital-service ecosystem',
  agencyIds: ['fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Public services',
  openSourceYear: 2023,
  license: 'MIT (current; initially AGPL-3.0)',
  repository: 'https://github.com/betagouv/etabli',
  officialUrl: 'https://etabli.incubateur.net/',
  evidenceUrl: 'https://www.data.gouv.fr/datasets/un-annuaire-des-initiatives-publiques-numeriques',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'dinum', 'public services', 'directory', 'digital initiatives'],
} satisfies Project;
