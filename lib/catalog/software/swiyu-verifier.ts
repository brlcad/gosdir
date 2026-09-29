import type { Project } from '../types';

export default {
  id: 'swiyu-verifier',
  name: 'swiyu Generic Verifier',
  summary:
    'FOITT-provided reference service for validating verifiable credential presentations in the Swiss Trust Infrastructure.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication (FOITT)',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2025,
  license: 'MIT (Generic Verifier source; dependencies retain separate terms)',
  repository: 'https://github.com/swiyu-admin-ch/swiyu-verifier',
  officialUrl: 'https://swiyu-admin-ch.github.io/open-source-components/',
  evidenceUrl:
    'https://github.com/swiyu-admin-ch/swiyu-verifier/commit/8b968ad8ca7e30b95727b93fd0f3340bd442d6e3',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'digital identity', 'verifiable credentials', 'java'],
} satisfies Project;
