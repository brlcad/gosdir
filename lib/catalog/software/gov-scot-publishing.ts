import type { Project } from '../types';

export default {
  id: 'gov-scot-publishing',
  name: 'gov.scot Publishing Platform',
  summary:
    'The Scottish Government’s public source for its Hippo CMS-based website and publishing environment.',
  sponsor: 'Scottish Government Digital Publishing team',
  agencyIds: ['uk-scottish-government'],
  geography: 'United Kingdom (Scotland)',
  jurisdiction: 'International',
  domain: 'Government publishing',
  openSourceYear: 2018,
  license: 'MIT (gov-scot repository code)',
  repository: 'https://github.com/scottishgovernment/gov-scot',
  officialUrl: 'https://www.gov.scot/',
  evidenceUrl: 'https://github.com/scottishgovernment',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united kingdom', 'scotland', 'content management', 'publishing'],
} satisfies Project;
