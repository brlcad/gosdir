import type { Project } from '../types';

export default {
  id: 'uk-hmcts-module-terraform-azurerm-backup-vault',
  name: 'HMCTS Azure Backup Vault Terraform Module',
  summary:
    'Reusable Terraform module for Azure Backup Vault configuration and immutable Postgres backup policies.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom (UK South and UK West backup regions)',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure & backup',
  openSourceYear: 2026,
  license: 'MIT (module source in this repository only)',
  repository: 'https://github.com/hmcts/module-terraform-azurerm-backup-vault',
  officialUrl: 'https://github.com/hmcts/module-terraform-azurerm-backup-vault',
  evidenceUrl:
    'https://github.com/hmcts/azure-backup-vault/blob/master/components/cnp/main.tf',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'terraform',
    'azure backup',
    'cloud infrastructure',
  ],
} satisfies Project;
