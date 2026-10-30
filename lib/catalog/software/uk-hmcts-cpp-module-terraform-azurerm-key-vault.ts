import type { Project } from '../types';

export default {
  id: 'uk-hmcts-cpp-module-terraform-azurerm-key-vault',
  name: 'HMCTS Azure Key Vault Terraform Module',
  summary:
    'Reusable HMCTS Terraform module for provisioning Azure Key Vaults with RBAC role assignments and policy configuration.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure & secrets management',
  openSourceYear: 2023,
  license:
    'MIT (Terraform module repository source only; Azure services, provider modules and dependencies excluded)',
  repository: 'https://github.com/hmcts/cpp-module-terraform-azurerm-key-vault',
  officialUrl:
    'https://github.com/hmcts/cpp-module-terraform-azurerm-key-vault',
  evidenceUrl:
    'https://github.com/hmcts/cpp-module-terraform-azurerm-key-vault/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'terraform',
    'azure key vault',
    'cloud infrastructure',
    'secrets management',
  ],
} satisfies Project;
