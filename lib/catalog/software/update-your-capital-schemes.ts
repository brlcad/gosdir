import type { Project } from '../types';

export default {
  id: 'update-your-capital-schemes',
  name: 'Update Your Capital Schemes',
  summary:
    'Active Travel England service through which local authorities update funded capital-scheme progress, spending, and milestones.',
  sponsor: 'Active Travel England',
  agencyIds: ['uk-active-travel-england'],
  geography: 'England',
  jurisdiction: 'International',
  domain: 'Government reporting',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/acteng/update-your-capital-schemes',
  officialUrl:
    'https://update-your-capital-schemes.activetravelengland.gov.uk/',
  evidenceUrl:
    'https://assets.publishing.service.gov.uk/media/687a089ef5eb08157f363993/ate-annual-report-accounts-24-25.pdf',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['england', 'active travel', 'local authorities', 'capital schemes'],
} satisfies Project;
