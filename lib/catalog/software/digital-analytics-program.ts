import type { Project } from '../types';

export default {
  id: 'digital-analytics-program',
  name: 'Digital Analytics Program dashboard',
  summary:
    'The public analytics.usa.gov dashboard reporting aggregated traffic to participating U.S. federal websites.',
  sponsor: 'GSA Technology Transformation Services, Digital Analytics Program',
  agencyIds: ['us-gsa-tts'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Public service analytics',
  openSourceYear: 2015,
  license: 'U.S. public domain and CC0-1.0 (vendor assets separately licensed)',
  repository: 'https://github.com/18F/analytics.usa.gov',
  officialUrl: 'https://analytics.usa.gov/',
  evidenceUrl: 'https://open.gsa.gov/api/dap/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'analytics', 'public services', 'open data'],
} satisfies Project;
