import type { Project } from '../types';

export default {
  id: 'uk-hmcts-sptribs-frontend',
  name: 'HMCTS Criminal Injuries Compensation Tribunal Online Appeal Service',
  summary:
    'Frontend source for the HMCTS Criminal Injuries Compensation Tribunal online appeal service.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography:
    'United Kingdom (First-tier Tribunal, Criminal Injuries Compensation)',
  jurisdiction: 'International',
  domain: 'Legal services & tribunals',
  openSourceYear: 2022,
  license: 'MIT (frontend source in this repository only)',
  repository: 'https://github.com/hmcts/sptribs-frontend',
  officialUrl:
    'https://www.gov.uk/criminal-injuries-compensation-tribunal/appeal-to-tribunal',
  evidenceUrl:
    'https://github.com/hmcts/sptribs-frontend/blob/a3b452a75bb69095aff1148a840a9a7030e79963/src/main/steps/accessibility-statement/content.ts',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'tribunal',
    'criminal injuries compensation',
    'online appeal',
  ],
} satisfies Project;
