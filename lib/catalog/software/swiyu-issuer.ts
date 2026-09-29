import type { Project } from '../types';

export default {
  id: 'swiyu-issuer',
  name: 'swiyu Generic Issuer',
  summary:
    'A deployable issuer service for verifiable credentials in Switzerland’s federal e-ID trust infrastructure.',
  sponsor:
    'Swiss Federal Office of Justice (programme owner); Federal Office of Information Technology, Systems and Telecommunication (software provider)',
  agencyIds: ['ch-foj', 'ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Digital identity',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/swiyu-admin-ch/swiyu-issuer',
  officialUrl: 'https://swiyu-admin-ch.github.io/introduction/',
  evidenceUrl: 'https://www.opensource.admin.ch/en/softwares/urz8n3/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'digital identity', 'verifiable credentials'],
} satisfies Project;
