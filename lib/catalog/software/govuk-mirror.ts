import type { Project } from '../types';

export default {
  id: 'govuk-mirror',
  name: 'GOV.UK Mirror',
  summary:
    'GDS crawler that populates static GOV.UK content mirrors used as a fallback when the main site origin is unavailable.',
  sponsor: 'Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Digital infrastructure',
  openSourceYear: 2023,
  license:
    'MIT (public crawler source; storage, CDN, and sync components excluded)',
  repository: 'https://github.com/alphagov/govuk-mirror',
  officialUrl:
    'https://docs.publishing.service.gov.uk/manual/fall-back-to-mirror.html',
  evidenceUrl:
    'https://github.com/alphagov/govuk-mirror/commit/41c6fa519c085341c342aec20f6255cea00e1b89',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'resilience', 'web crawling'],
} satisfies Project;
