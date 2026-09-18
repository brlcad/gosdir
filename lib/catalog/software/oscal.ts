import type { Project } from '../types';

export default {
  id: 'oscal',
  name: 'OSCAL',
  summary:
    'Machine-readable formats from NIST for expressing system security controls, assessments, and plans.',
  sponsor: 'National Institute of Standards and Technology',
  agencyIds: ['us-nist'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Cybersecurity',
  license: 'Public domain',
  repository: 'https://github.com/usnistgov/OSCAL',
  officialUrl: 'https://pages.nist.gov/OSCAL/',
  status: 'Active',
  featured: true,
  verified: '2026-09-03',
  tags: ['security', 'standards', 'compliance'],
} satisfies Project;
