import type { Project } from '../types';

export default {
  id: 'link-checker-api',
  name: 'GOV.UK Link Checker API',
  summary:
    'GDS production API that checks URIs and redirects before they are linked from GOV.UK content.',
  sponsor: 'Government Digital Service (GDS), GOV.UK Content APIs team',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Publishing APIs',
  openSourceYear: 2017,
  license: 'MIT',
  repository: 'https://github.com/alphagov/link-checker-api',
  officialUrl:
    'https://docs.publishing.service.gov.uk/repos/link-checker-api.html',
  evidenceUrl:
    'https://docs.publishing.service.gov.uk/repos/link-checker-api.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'link checking', 'publishing api'],
} satisfies Project;
