import type { Project } from '../types';

export default {
  id: 'uk-ukaea-universal-data-access',
  name: 'Universal Data Access (UDA)',
  summary:
    "Universal Data Access (UDA), UKAEA's C++ client/server data access system and associated client wrappers/plugins.",
  sponsor: 'UK Atomic Energy Authority (UKAEA)',
  agencyIds: ['uk-uk-atomic-energy-authority'],
  geography: 'United Kingdom; UKAEA/Culham fusion research',
  jurisdiction: 'International',
  domain: 'Fusion research data systems',
  openSourceYear: 2017,
  license: 'Apache-2.0',
  repository: 'https://github.com/ukaea/uda',
  officialUrl: 'https://ukaea.github.io/UDA/',
  evidenceUrl:
    'https://indico.ukaea.uk/event/163/contributions/257/attachments/77/103/uda231019.pdf',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKAEA', 'Universal', 'Data', 'Access', 'UDA'],
} satisfies Project;
