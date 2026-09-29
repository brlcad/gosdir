import type { Project } from '../types';

export default {
  id: 'cfs',
  name: 'core Flight System (cFS)',
  summary:
    'NASA’s reusable flight-software architecture and application suite for spacecraft, instruments, and mission systems.',
  sponsor: 'NASA Goddard Space Flight Center',
  agencyIds: ['us-nasa-goddard-space-flight-center'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2015,
  license: 'Apache-2.0',
  repository: 'https://github.com/nasa/cFS',
  officialUrl: 'https://etd.gsfc.nasa.gov/capabilities/core-flight-system',
  evidenceUrl:
    'https://www.nasa.gov/news-release/nasa-goddard-releases-open-source-core-flight-software-system-application-suite-to-public/',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['nasa', 'flight software', 'spacecraft'],
} satisfies Project;
