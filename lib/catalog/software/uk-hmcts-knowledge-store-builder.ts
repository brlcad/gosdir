import type { Project } from '../types';

export default {
  id: 'uk-hmcts-knowledge-store-builder',
  name: 'HMCTS Knowledge Store Builder',
  summary:
    'Command-line tool and plugin that builds a queryable static knowledge graph connecting HMCTS code, commits, tickets, and business features.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Data & information management',
  openSourceYear: 2026,
  license: 'MIT (source in this repository only)',
  repository: 'https://github.com/hmcts/knowledge-store-builder',
  officialUrl: 'https://github.com/hmcts/knowledge-store-builder',
  evidenceUrl: 'https://github.com/hmcts/knowledge-store-builder/releases',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'knowledge graph',
    'developer tools',
    'code intelligence',
  ],
} satisfies Project;
