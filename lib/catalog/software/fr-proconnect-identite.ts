import type { Project } from '../types';

export default {
  id: 'fr-proconnect-identite',
  name: 'ProConnect Identité',
  summary:
    'The OpenID Connect identity-provider application for the French ProConnect federation.',
  sponsor:
    'French Interministerial Digital Directorate (DINUM), under the Prime Minister',
  agencyIds: ['fr-dinum'],
  geography: 'France (DINUM, Paris)',
  jurisdiction: 'International',
  domain: 'Digital identity & authentication',
  openSourceYear: 2018,
  license: 'MIT',
  repository: 'https://github.com/proconnect-gouv/proconnect-identite',
  officialUrl: 'https://identite.proconnect.gouv.fr/',
  evidenceUrl:
    'https://partenaires.proconnect.gouv.fr/docs/fournisseur-identite',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'france',
    'dinum',
    'proconnect',
    'identity provider',
    'openid connect',
  ],
} satisfies Project;
