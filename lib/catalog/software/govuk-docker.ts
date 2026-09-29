import type { Project } from '../types';

export default {
  id: 'govuk-docker',
  name: 'GOV.UK Docker',
  summary:
    'GDS local development environment for building, running, and testing GOV.UK microservices and their dependencies.',
  sponsor: 'Government Digital Service, GOV.UK Platform Engineering',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2019,
  license:
    'MIT (GOV.UK Docker source; application stacks retain separate terms)',
  repository: 'https://github.com/alphagov/govuk-docker',
  officialUrl: 'https://docs.publishing.service.gov.uk/repos/govuk-docker.html',
  evidenceUrl:
    'https://github.com/alphagov/govuk-docker/commit/b8caed810a8414b40239047c0802b3e52c2ec3af',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'docker', 'development'],
} satisfies Project;
