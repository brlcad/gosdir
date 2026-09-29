import type { Project } from '../types';

export default {
  id: 'public-asset-checker',
  name: 'GOV.UK Public Asset Checker',
  summary:
    'GDS monitoring application that checks third-party assets used on GOV.UK against known size and version baselines and alerts the owning team.',
  sponsor: 'UK Government Digital Service (GDS)',
  agencyIds: ['uk-government-digital-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Web operations',
  openSourceYear: 2023,
  license: 'MIT (application source; dependencies retain their own terms)',
  repository: 'https://github.com/alphagov/public-asset-checker',
  officialUrl:
    'https://docs.publishing.service.gov.uk/repos/public-asset-checker.html',
  evidenceUrl:
    'https://docs.publishing.service.gov.uk/repos/public-asset-checker.html',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['united kingdom', 'gov.uk', 'monitoring', 'web operations'],
} satisfies Project;
