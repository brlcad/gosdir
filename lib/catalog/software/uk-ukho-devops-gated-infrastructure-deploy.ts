import type { Project } from '../types';

export default {
  id: 'uk-ukho-devops-gated-infrastructure-deploy',
  name: 'UKHO Gated Infrastructure Deploy',
  summary:
    'An Azure DevOps template for gated Terraform planning and deployment.',
  sponsor:
    'UK Hydrographic Office (UKHO), an executive agency sponsored by the Ministry of Defence',
  agencyIds: ['uk-ukho'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Infrastructure as code and CI/CD',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/UKHO/devops-gated-infrastructure-deploy',
  officialUrl: 'https://github.com/UKHO/devops-gated-infrastructure-deploy',
  evidenceUrl:
    'https://github.com/UKHO/devops-gated-infrastructure-deploy/releases',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKHO', 'Terraform', 'Azure DevOps'],
} satisfies Project;
