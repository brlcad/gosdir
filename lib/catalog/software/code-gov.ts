import type { Project } from '../types';

export default {
  id: 'code-gov',
  name: 'Code.gov',
  summary:
    'The federal source-code policy program and public inventory work created to improve discoverability and reuse.',
  sponsor: 'General Services Administration',
  agencyIds: ['us-gsa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Code inventory',
  license: 'Public domain',
  repository: 'https://github.com/GSA/code-gov',
  officialUrl: 'https://code.gov/',
  status: 'Reference',
  verified: '2026-09-03',
  tags: ['inventory', 'policy', 'reuse'],
} satisfies Project;
