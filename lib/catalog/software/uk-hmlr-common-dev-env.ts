import type { Project } from '../types';

export default {
  id: 'uk-hmlr-common-dev-env',
  name: 'HM Land Registry Common Development Environment',
  summary:
    'A reusable development environment for HM Land Registry teams and projects.',
  sponsor: 'HM Land Registry (HMLR), UK non-ministerial government department',
  agencyIds: ['uk-hm-land-registry'],
  geography: 'England and Wales',
  jurisdiction: 'International',
  domain: 'Developer tools',
  openSourceYear: 2018,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/landregistry/common-dev-env',
  officialUrl: 'https://www.gov.uk/government/organisations/land-registry',
  evidenceUrl:
    'https://github.com/LandRegistry/common-dev-env/releases/tag/v3.4.0',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hm land registry',
    'developer tools',
    'development environment',
    'docker',
  ],
} satisfies Project;
