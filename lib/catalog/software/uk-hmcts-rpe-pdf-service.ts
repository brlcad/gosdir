import type { Project } from '../types';

export default {
  id: 'uk-hmcts-rpe-pdf-service',
  name: 'HMCTS RPE PDF Generation Service',
  summary:
    'HMCTS REST service that generates PDFs from HTML/Twig templates and JSON input.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom (the repository does not establish a narrower service jurisdiction)',
  jurisdiction: 'International',
  domain: 'Justice & legal services',
  openSourceYear: 2017,
  license: 'MIT (this repository source only)',
  repository: 'https://github.com/hmcts/rpe-pdf-service',
  officialUrl: 'https://github.com/hmcts/rpe-pdf-service',
  evidenceUrl:
    'https://github.com/hmcts/cnp-flux-config/blob/master/apps/rpe/pdf-service/pdf-service.yaml',
  status: 'Active',
  verified: '2026-10-15',
  tags: ['united kingdom', 'hmcts', 'pdf generation', 'rest api', 'justice'],
} satisfies Project;
