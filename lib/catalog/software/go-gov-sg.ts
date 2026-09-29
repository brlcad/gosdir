import type { Project } from '../types';

export default {
  id: 'go-gov-sg',
  name: 'GoGovSG',
  summary:
    'The official Singapore government link shortener, used by public officers to publish recognizable government links and measure their reach.',
  sponsor:
    'Open Government Products, Government Technology Agency of Singapore',
  agencyIds: ['sg-open-government-products'],
  geography: 'Singapore',
  jurisdiction: 'International',
  domain: 'Communications',
  openSourceYear: 2020,
  license: 'MIT (code; government marks excluded)',
  repository: 'https://github.com/opengovsg/GoGovSG',
  officialUrl: 'https://go.gov.sg/',
  evidenceUrl: 'https://www.open.gov.sg/for-developers/open-source/',
  status: 'Maintained',
  verified: '2026-09-26',
  tags: ['singapore', 'links', 'communications'],
} satisfies Project;
