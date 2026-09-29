import type { Project } from '../types';

export default {
  id: 'jeap-crypto',
  name: 'jEAP Crypto',
  summary:
    'FOITT Java library for client-side AES-GCM encryption at rest with Spring Boot and key-management integrations.',
  sponsor:
    'Swiss Federal Office of Information Technology, Systems and Telecommunication',
  agencyIds: ['ch-foitt'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Security & privacy',
  openSourceYear: 2024,
  license: 'Apache-2.0 (jEAP Crypto source; key-management services separate)',
  repository: 'https://github.com/jeap-admin-ch/jeap-crypto',
  officialUrl: 'https://www.opensource.admin.ch/en/softwares/mtk8ad/',
  evidenceUrl:
    'https://github.com/jeap-admin-ch/jeap-crypto/commit/8393b0c812e461cef940a206b1ed4dbbabc28620',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'jEAP', 'encryption', 'java'],
} satisfies Project;
