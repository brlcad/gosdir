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
  openSourceYear: 2016,
  license: 'Public domain',
  repository: 'https://github.com/GSA/code-gov',
  officialUrl:
    'https://digital.gov/resources/requirements-for-achieving-efficiency-transparency-and-innovation-through-reusable-and-open-source-software/',
  status: 'Archived',
  verified: '2026-09-25',
  tags: ['inventory', 'policy', 'reuse'],
} satisfies Project;
