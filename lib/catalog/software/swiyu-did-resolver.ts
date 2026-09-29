import type { Project } from '../types';

export default {
  id: 'swiyu-did-resolver',
  name: 'swiyu DID Resolver',
  summary:
    'FOITT-supported Rust library for resolving decentralized identifiers used by Switzerland’s credential trust infrastructure.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication (FOITT)',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2025,
  license: 'MIT (DID Resolver source; dependencies retain separate terms)',
  repository: 'https://github.com/swiyu-admin-ch/didresolver',
  officialUrl: 'https://swiyu-admin-ch.github.io/open-source-components/',
  evidenceUrl:
    'https://github.com/swiyu-admin-ch/didresolver/commit/b1e13ff7b816b53f74830b2ab36c19268146c300',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'digital identity', 'did', 'rust'],
} satisfies Project;
