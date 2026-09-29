import type { Project } from '../types';

export default {
  id: 'recommandations-collaboratives',
  name: 'Recommandations-collaboratives (Recoco)',
  summary:
    'A Cerema-operated platform reused by French public bodies to coordinate advice and follow-up for local projects.',
  sponsor: 'Cerema, with DGALN and DINUM sponsorship',
  agencyIds: ['fr-cerema', 'fr-dinum'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Forms & workflows',
  openSourceYear: 2022,
  license: 'AGPL-3.0',
  repository: 'https://github.com/betagouv/recommandations-collaboratives',
  officialUrl: 'https://recommandations-collaboratives.beta.gouv.fr/',
  evidenceUrl: 'https://beta.gouv.fr/startups/recommandations-collaboratives.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'public services', 'local government', 'collaboration'],
} satisfies Project;
