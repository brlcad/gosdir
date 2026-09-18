import type { Project } from '../types';

export default {
  id: 'paccor',
  name: 'paccor',
  summary:
    'NSA tooling for creating, signing, inspecting, and validating platform attribute certificates used in hardware and software supply-chain attestation.',
  sponsor: 'NSA Cybersecurity',
  agencyIds: ['us-nsa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Supply chain security',
  license: 'Apache-2.0',
  repository: 'https://github.com/nsacyber/paccor',
  officialUrl: 'https://nsacyber.github.io/paccor/',
  status: 'Active',
  verified: '2026-09-12',
  tags: ['nsa', 'hardware', 'attestation', 'certificates'],
} satisfies Project;
