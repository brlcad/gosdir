import type { Project } from '../types';

export default {
  id: 'cloud-gov',
  name: 'cloud.gov',
  summary:
    'A secure, compliant platform that helps U.S. agencies deliver applications without rebuilding cloud infrastructure.',
  sponsor: 'General Services Administration',
  agencyIds: ['us-gsa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Cloud platform',
  license: 'Public domain / CC0',
  repository: 'https://github.com/cloud-gov',
  officialUrl: 'https://cloud.gov/',
  status: 'Active',
  verified: '2026-09-03',
  tags: ['cloud', 'platform', 'security'],
} satisfies Project;
