import type { Project } from '../types';

export default {
  id: 'login-gov',
  name: 'Login.gov',
  summary:
    'A shared sign-in service that gives the public simple, secure access to participating U.S. government programs.',
  sponsor: 'General Services Administration',
  agencyIds: ['us-gsa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Digital identity',
  license: 'Public domain / CC0',
  repository: 'https://github.com/18F/identity-idp',
  officialUrl: 'https://www.login.gov/',
  status: 'Active',
  featured: true,
  verified: '2026-09-03',
  tags: ['identity', 'security', 'shared service'],
} satisfies Project;
