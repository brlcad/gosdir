import type { Project } from '../types';

export default {
  id: 'uk-hmcts-mi-adf-integration-runtime',
  name: 'HMCTS Azure Data Factory Integration Runtime Image',
  summary:
    'HMCTS Windows container-image build for the Azure Data Factory self-hosted integration runtime (SHIR).',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom (UK South and UK West deployment regions)',
  jurisdiction: 'International',
  domain: 'Data integration & cloud infrastructure',
  openSourceYear: 2021,
  license: 'MIT (image-build source in this repository only)',
  repository: 'https://github.com/hmcts/mi-adf-integration-runtime',
  officialUrl: 'https://github.com/hmcts/mi-adf-integration-runtime',
  evidenceUrl:
    'https://github.com/hmcts/sds-flux-config/blob/master/apps/mi/mi-adf-shir/prod.yaml',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'azure data factory',
    'windows container',
    'data integration',
  ],
} satisfies Project;
