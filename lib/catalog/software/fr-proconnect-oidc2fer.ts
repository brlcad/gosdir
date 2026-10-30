import type { Project } from '../types';

export default {
  id: 'fr-proconnect-oidc2fer',
  name: 'oidc2fer',
  summary:
    'An OpenID Connect gateway to the French RENATER education federation, currently a prototype.',
  sponsor: 'French Interministerial Digital Directorate (DINUM) / ProConnect',
  agencyIds: ['fr-dinum'],
  geography: 'France (DINUM; RENATER education federation integration)',
  jurisdiction: 'International',
  domain: 'Digital identity & federation interoperability',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/proconnect-gouv/oidc2fer',
  officialUrl: 'https://www.proconnect.gouv.fr/',
  evidenceUrl:
    'https://github.com/proconnect-gouv/oidc2fer/releases/tag/v1.0.16',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['france', 'dinum', 'proconnect', 'openid connect', 'renater'],
} satisfies Project;
