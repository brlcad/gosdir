import type { Project } from '../types';

export default {
  id: 'mockpass',
  name: 'MockPass',
  summary:
    'A local development service that mocks Singpass, Corppass, MyInfo, and sgID so teams can integrate without connecting to production identity services.',
  sponsor:
    'Open Government Products, Government Technology Agency of Singapore',
  agencyIds: ['sg-open-government-products'],
  geography: 'Singapore',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2018,
  license: 'MIT',
  repository: 'https://github.com/opengovsg/mockpass',
  officialUrl: 'https://www.open.gov.sg/for-developers/open-source/',
  evidenceUrl:
    'https://github.com/opengovsg/mockpass/commit/b2be61ce9242652466c69442db60d2c262502384',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['singapore', 'identity', 'developer tools'],
} satisfies Project;
