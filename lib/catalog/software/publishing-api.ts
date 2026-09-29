import type { Project } from '../types';

export default {
  id: 'publishing-api',
  name: 'GOV.UK Publishing API',
  summary:
    'GDS shared content-workflow and publication API that stores drafts and publishes content to GOV.UK downstream services.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Publishing infrastructure',
  openSourceYear: 2014,
  license: 'MIT (application source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/publishing-api',
  officialUrl:
    'https://docs.publishing.service.gov.uk/repos/publishing-api.html',
  evidenceUrl:
    'https://docs.publishing.service.gov.uk/repos/publishing-api/api.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'publishing', 'api', 'infrastructure'],
} satisfies Project;
