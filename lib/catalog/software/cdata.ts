import type { Project } from '../types';

export default {
  id: 'cdata',
  name: 'data.gouv.fr frontend (cdata)',
  summary:
    'The frontend application for France’s national open-data platform, published with setup and production-build guidance.',
  sponsor: 'Direction interministérielle du numérique (DINUM), Opérateur des Produits Interministériels',
  agencyIds: ['fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Open data',
  openSourceYear: 2025,
  license: 'MIT (code; excludes Marianne font and images in public/)',
  repository: 'https://github.com/datagouv/cdata',
  officialUrl: 'https://www.data.gouv.fr/',
  evidenceUrl: 'https://www.data.gouv.fr/pages/legal/legal-notice',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'dinum', 'open data', 'frontend', 'data.gouv.fr'],
} satisfies Project;
