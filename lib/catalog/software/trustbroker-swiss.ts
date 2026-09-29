import type { Project } from '../types';

export default {
  id: 'trustbroker-swiss',
  name: 'trustbroker.swiss',
  summary:
    'The Swiss federal identity-federation service connecting relying parties and identity providers through SAML and OpenID Connect.',
  sponsor: 'Federal Office of Information Technology, Systems and Telecommunication',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2025,
  license: 'AGPL-3.0-or-later',
  repository: 'https://github.com/swiss/trustbroker.swiss',
  officialUrl: 'https://docs.eiam.admin.ch/?c=btbinfos&l=en',
  evidenceUrl: 'https://github.com/swiss/trustbroker.swiss/commit/1fcf11f16a76470b61eac5584b2be59d21277100',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'identity', 'federation', 'authentication'],
} satisfies Project;
