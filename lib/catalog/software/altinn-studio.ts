import type { Project } from '../types';

export default {
  id: 'altinn-studio',
  name: 'Altinn Studio',
  summary:
    'The Norwegian public sector’s application-development environment and designer for building, deploying, and operating digital services on Altinn 3.',
  sponsor: 'Norwegian Digitalisation Agency (Digdir)',
  agencyIds: ['no-digdir'],
  geography: 'Norway',
  jurisdiction: 'International',
  domain: 'Digital government services',
  openSourceYear: 2018,
  license: 'MIT',
  repository: 'https://github.com/Altinn/altinn-studio',
  officialUrl: 'https://docs.altinn.studio/en/',
  evidenceUrl:
    'https://samarbeid.digdir.no/altinn/over-500-tjenester-i-altinn-studio-og-flere-pa-vei/3417',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['norway', 'digital services', 'application development', 'MIT'],
} satisfies Project;
