import type { Project } from '../types';

export default {
  id: 'postman-sg',
  name: 'Postman.gov.sg (original messaging platform)',
  summary:
    'The original government email and SMS messaging platform; its public source now underpins the legacy email service, not the separately rebuilt SMS v2.',
  sponsor: 'Open Government Products, Government Technology Agency of Singapore',
  agencyIds: ['sg-open-government-products'],
  geography: 'Singapore',
  jurisdiction: 'International',
  domain: 'Communications',
  openSourceYear: 2020,
  license: 'MIT (code; government identity assets excluded)',
  repository: 'https://github.com/opengovsg/postmangovsg',
  officialUrl: 'https://legacy.postman.gov.sg/',
  evidenceUrl: 'https://www.open.gov.sg/for-developers/open-source/',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['singapore', 'messaging', 'email', 'public services'],
} satisfies Project;
