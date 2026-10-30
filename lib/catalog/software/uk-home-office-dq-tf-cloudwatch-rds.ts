import type { Project } from '../types';

export default {
  id: 'uk-home-office-dq-tf-cloudwatch-rds',
  name: 'Home Office CloudWatch RDS Terraform Module',
  summary:
    'Home Office Terraform module for CloudWatch monitoring and alerts on Amazon RDS instances.',
  sponsor: 'Home Office',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Monitoring and observability',
  openSourceYear: 2019,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/dq-tf-cloudwatch-rds',
  officialUrl: 'https://github.com/UKHomeOffice/dq-tf-cloudwatch-rds',
  evidenceUrl:
    'https://github.com/UKHomeOffice/dq-tf-cloudwatch-rds/releases/tag/v1.0.0',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Terraform', 'Amazon RDS'],
} satisfies Project;
