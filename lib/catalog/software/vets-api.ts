import type { Project } from '../types';

export default {
  id: 'vets-api',
  name: 'VA.gov Vets API',
  summary:
    'The API platform that powers veteran-facing services and integrations across VA.gov.',
  sponsor: 'Department of Veterans Affairs',
  agencyIds: ['us-va'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Public benefits',
  license: 'CC0-1.0',
  repository: 'https://github.com/department-of-veterans-affairs/vets-api',
  officialUrl: 'https://developer.va.gov/',
  status: 'Active',
  verified: '2026-09-03',
  tags: ['veterans', 'api', 'benefits'],
} satisfies Project;
