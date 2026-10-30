import type { Project } from '../types';

export default {
  id: 'uk-hmcts-launchdarkly-terraform',
  name: 'HMCTS LaunchDarkly Terraform Configuration',
  summary: 'Terraform configuration for HMCTS LaunchDarkly projects and teams.',
  sponsor: 'HM Courts & Tribunals Service (HMCTS), Ministry of Justice',
  agencyIds: ['uk-hm-courts-and-tribunals-service'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cloud infrastructure',
  openSourceYear: 2020,
  license: 'MIT (configuration in this repository only)',
  repository: 'https://github.com/hmcts/launchdarkly-terraform',
  officialUrl:
    'https://hmcts.github.io/cloud-native-platform/new-component/feature-flags.html',
  evidenceUrl:
    'https://hmcts.github.io/ops-runbooks/Services/launchdarkly.html',
  status: 'Active',
  verified: '2026-10-15',
  tags: [
    'united kingdom',
    'hmcts',
    'terraform',
    'feature flags',
    'cloud infrastructure',
  ],
} satisfies Project;
