import type { Project } from '../types';

export default {
  id: 'uk-ons-dp-vault',
  name: 'ONS dp-vault',
  summary:
    'Reusable Go library for HashiCorp Vault access and health checks in ONS Dissemination Platform services.',
  sponsor: 'Office for National Statistics (ONS), Digital Publishing',
  agencyIds: ['uk-office-for-national-statistics'],
  geography: 'United Kingdom (national ONS services)',
  jurisdiction: 'International',
  domain: 'Data infrastructure and libraries',
  openSourceYear: 2020,
  license:
    'MIT for dp-vault library source; HashiCorp Vault, dependencies, and user secrets are separate',
  repository: 'https://github.com/ONSdigital/dp-vault',
  officialUrl: 'https://github.com/ONSdigital/dp-vault',
  evidenceUrl: 'https://github.com/ONSdigital/dp-vault/blob/main/README.md',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'united kingdom',
    'ons',
    'go',
    'hashicorp vault',
    'security',
    'library',
  ],
} satisfies Project;
