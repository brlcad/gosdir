import type { Project } from '../types';

export default {
  id: 'uk-hmcts-cnp-node-base',
  name: 'HMCTS Cloud Native Platform Node.js Base Images',
  summary: 'HMCTS CNP Node.js base container images (`cnp-nodejs-base`).',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2019,
  license:
    'MIT (CNP Node base-image repository source only; runtimes and dependencies excluded)',
  repository: 'https://github.com/hmcts/cnp-node-base',
  officialUrl: 'https://github.com/hmcts/cnp-node-base',
  evidenceUrl: 'https://github.com/hmcts/cnp-node-base/blob/master/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'cloud native platform',
    'node.js',
    'docker',
    'container images',
  ],
} satisfies Project;
