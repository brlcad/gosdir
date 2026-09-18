import type { Project } from '../types';

export default {
  id: 'mage',
  name: 'MAGE',
  summary:
    'A mobile field-data collection and situational-awareness platform designed for low-bandwidth and disconnected environments.',
  sponsor: 'National Geospatial-Intelligence Agency',
  agencyIds: ['us-nga'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Field data',
  license: 'Apache-2.0',
  repository: 'https://github.com/ngageoint/MAGE',
  officialUrl: 'https://www.nga.mil/assets/files/2024_MAGE_Fact_Sheet.pdf',
  evidenceUrl: 'https://github.com/ngageoint/MAGE',
  status: 'Active',
  verified: '2026-09-12',
  tags: ['nga', 'mobile', 'geospatial', 'offline'],
} satisfies Project;
