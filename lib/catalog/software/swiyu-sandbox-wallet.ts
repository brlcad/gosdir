import type { Project } from '../types';

export default {
  id: 'swiyu-sandbox-wallet',
  name: 'swiyu Sandbox Wallet',
  summary:
    'Android and iOS wallet apps for issuers and verifiers to test credentials in Switzerland’s sandbox trust infrastructure; they cannot use production registries.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication (FOITT)',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2024,
  license: 'MIT (separately verified Android and iOS application source)',
  repository: 'https://github.com/swiyu-admin-ch/eidch-android-wallet',
  officialUrl:
    'https://www.eid.admin.ch/en/20260903-public-beta-becomes-sandbox',
  evidenceUrl: 'https://swiyu-admin-ch.github.io/open-source-components/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'digital identity', 'wallet', 'sandbox'],
} satisfies Project;
