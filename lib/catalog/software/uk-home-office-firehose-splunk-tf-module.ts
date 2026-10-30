import type { Project } from '../types';

export default {
  id: 'uk-home-office-firehose-splunk-tf-module',
  name: 'Cloud Log Forwarding Terraform Module',
  summary:
    'A Terraform module for forwarding CloudWatch and EventBridge logs to Splunk with configurable filtering and redaction.',
  sponsor: 'Home Office',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom (Home Office cloud infrastructure)',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure and observability',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/firehose-splunk-tf-module',
  officialUrl: 'https://github.com/UKHomeOffice/firehose-splunk-tf-module',
  evidenceUrl:
    'https://github.com/UKHomeOffice/firehose-splunk-tf-module/releases/tag/2.5.0',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Terraform', 'Splunk'],
} satisfies Project;
