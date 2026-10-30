import type { Project } from '../types';

export default {
  id: 'uk-companies-house-overseas-entities',
  name: 'Companies House Register of Overseas Entities',
  summary:
    'The public service for registering, updating, and removing overseas entities that own UK land.',
  sponsor:
    'Companies House, an executive agency of the Department for Business and Trade',
  agencyIds: ['uk-companies-house'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Business & government services',
  openSourceYear: 2022,
  license: 'MIT (separately verified for the web and API repositories)',
  repository: 'https://github.com/companieshouse/overseas-entities-web',
  officialUrl: 'https://www.gov.uk/guidance/register-an-overseas-entity',
  evidenceUrl:
    'https://github.com/companieshouse/overseas-entities-api/blob/main/LICENSE',
  status: 'Active',
  verified: '2026-10-14',
  tags: [
    'uk',
    'companies house',
    'business registration',
    'overseas entities',
    'government services',
  ],
} satisfies Project;
