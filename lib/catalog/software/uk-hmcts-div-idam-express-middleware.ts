import type { Project } from '../types';

export default {
  id: 'uk-hmcts-div-idam-express-middleware',
  name: 'Divorce IDAM Express Middleware',
  summary:
    'Reusable HMCTS Divorce IDAM Express middleware for authentication, protected routes, landing pages and logout.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'England and Wales; exact deployment footprint is not separately established',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2018,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/div-idam-express-middleware',
  officialUrl: 'https://github.com/hmcts/div-idam-express-middleware',
  evidenceUrl:
    'https://github.com/hmcts/div-idam-express-middleware/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'identity',
    'express.js',
    'middleware',
    'developer tools',
  ],
} satisfies Project;
