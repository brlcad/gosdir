import type { Project } from '../types';

export default {
  id: 'uk-home-office-file-vault',
  name: 'Home Office File Vault',
  summary:
    'A REST service for receiving, virus-scanning, and retrieving files uploaded through Home Office Forms applications.',
  sponsor: 'Home Office',
  agencyIds: ['uk-home-office'],
  geography: 'United Kingdom (shared Home Office application infrastructure)',
  jurisdiction: 'International',
  domain: 'Digital services and secure file handling',
  openSourceYear: 2017,
  license: 'MIT',
  repository: 'https://github.com/UKHomeOffice/file-vault',
  officialUrl: 'https://github.com/UKHomeOffice/file-vault',
  evidenceUrl: 'https://github.com/UKHomeOffice/file-vault/releases/tag/v3.3.0',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'Home Office', 'File handling', 'Security'],
} satisfies Project;
