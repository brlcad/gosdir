import type { Project } from '../types';

export default {
  id: 'uk-hmcts-em-ccd-orchestrator',
  name: 'Evidence Management CCD Orchestrator',
  summary:
    'HMCTS production backend service coordinating interactions between Core Case Data, Evidence Management Stitching and a calling service.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'England and Wales; exact deployment footprint is not separately established',
  jurisdiction: 'International',
  domain: 'Justice & legal services',
  openSourceYear: 2019,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/em-ccd-orchestrator',
  officialUrl:
    'https://hmcts.github.io/cnp-api-docs/swagger.html?url=https://hmcts.github.io/cnp-api-docs/specs/em-ccd-orchestrator.json',
  evidenceUrl:
    'https://github.com/hmcts/em-ccd-orchestrator/blob/master/catalog-info.yaml',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'evidence management',
    'case data',
    'api',
    'justice',
  ],
} satisfies Project;
