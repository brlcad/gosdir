import type { Project } from '../types';

export default {
  id: 'catala',
  name: 'Catala',
  summary:
    'An Inria-developed language and compiler for expressing legislation as executable programs, tested with French public agencies.',
  sponsor: 'Inria, with Caisse nationale des allocations familiales research support',
  agencyIds: ['fr-inria'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Rules as code',
  openSourceYear: 2019,
  license: 'Apache-2.0',
  repository: 'https://github.com/CatalaLang/catala',
  officialUrl: 'https://catala-lang.org/',
  evidenceUrl: 'https://radar.inria.fr/report/2024/prosecco/index.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'legislation', 'compiler', 'research'],
} satisfies Project;
