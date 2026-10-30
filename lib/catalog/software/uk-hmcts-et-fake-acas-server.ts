import type { Project } from '../types';

export default {
  id: 'uk-hmcts-et-fake-acas-server',
  name: 'Employment Tribunals Fake ACAS Server',
  summary:
    'A development and testing service that supplies deterministic ACAS certificate responses for Employment Tribunals applications.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom; the exact component deployment jurisdiction is not separately mapped',
  jurisdiction: 'International',
  domain: 'Developer tools & libraries',
  openSourceYear: 2018,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/et_fake_acas_server',
  officialUrl: 'https://github.com/hmcts/et_fake_acas_server',
  evidenceUrl:
    'https://github.com/hmcts/et_fake_acas_server/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'employment tribunals',
    'acas',
    'testing',
    'ruby',
  ],
} satisfies Project;
