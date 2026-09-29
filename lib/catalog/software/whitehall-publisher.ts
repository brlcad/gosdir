import type { Project } from '../types';

export default {
  id: 'whitehall-publisher',
  name: 'Whitehall Publisher',
  summary:
    'The GOV.UK content-management application used by civil servants to create and maintain government pages.',
  sponsor: 'UK Government Digital Service',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Government publishing',
  openSourceYear: 2014,
  license: 'MIT',
  repository: 'https://github.com/alphagov/whitehall',
  officialUrl: 'https://docs.publishing.service.gov.uk/repos/whitehall.html',
  evidenceUrl:
    'https://insidegovuk.blog.gov.uk/2024/02/08/moving-our-most-used-publishing-tool-to-the-gov-uk-design-system/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'GOV.UK', 'content management', 'publishing'],
} satisfies Project;
