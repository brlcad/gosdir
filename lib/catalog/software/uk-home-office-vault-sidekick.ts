import type { Project } from '../types';

export default {
  id: 'uk-home-office-vault-sidekick',
  name: 'Vault Sidekick',
  summary:
    'A reusable tool for integrating applications and deployments with Vault secrets and credentials workflows.',
  sponsor: 'UK Home Office',
  agencyIds: ['uk-home-office'],
  geography: 'UK Home Office infrastructure; reusable by other operators',
  jurisdiction: 'International',
  domain: 'Developer tooling and security',
  openSourceYear: 2015,
  license: 'Apache-2.0',
  repository: 'https://github.com/UKHomeOffice/vault-sidekick',
  officialUrl: 'https://github.com/UKHomeOffice/vault-sidekick',
  evidenceUrl: 'https://github.com/UKHomeOffice/vault-sidekick/releases',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'Vault', 'Security'],
} satisfies Project;
