import type { Project } from '../types';

export default {
  id: 'code-mil',
  name: 'Code.mil',
  summary:
    'The Department of Defense initiative for open collaboration and guidance around releasing government code.',
  sponsor: 'Department of Defense',
  agencyIds: ['us-dod'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Code inventory',
  license: 'Public domain / OSI licenses',
  repository: 'https://github.com/Code-dot-mil',
  officialUrl: 'https://code.mil/',
  status: 'Maintained',
  featured: true,
  verified: '2026-09-03',
  tags: ['defense', 'policy', 'collaboration'],
} satisfies Project;
