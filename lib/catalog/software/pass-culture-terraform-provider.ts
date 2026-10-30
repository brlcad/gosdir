import type { Project } from '../types';

export default {
  id: 'pass-culture-terraform-provider',
  name: 'Pass Culture Terraform provider',
  summary:
    'A Terraform provider for provisioning Pass Culture infrastructure resources.',
  sponsor:
    'pass Culture SAS, majority-owned by the French State and overseen by the Ministry of Culture',
  agencyIds: ['fr-pass-culture-sas'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Infrastructure and developer tools',
  openSourceYear: 2025,
  license: 'MPL-2.0',
  repository: 'https://github.com/pass-culture/terraform-provider-pc',
  officialUrl: 'https://pass.culture.fr/',
  evidenceUrl:
    'https://github.com/pass-culture/terraform-provider-pc/releases/tag/v0.3.0',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'Terraform', 'infrastructure', 'MPL-2.0'],
} satisfies Project;
