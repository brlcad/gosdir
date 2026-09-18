import type { Project } from '../types';

export default {
  id: 'hirs',
  name: 'HIRS',
  summary:
    'An NSA proof-of-concept for trusted-computing provisioning, platform integrity reporting, and hardware attestation; its repository warns that it is not production-ready.',
  sponsor: 'NSA Cybersecurity',
  agencyIds: ['us-nsa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Supply chain security',
  license: 'Apache-2.0 / Public domain',
  repository: 'https://github.com/nsacyber/HIRS',
  officialUrl: 'https://github.com/nsacyber/HIRS',
  evidenceUrl: 'https://code.mil/oss-faq.html',
  status: 'Reference',
  verified: '2026-09-12',
  tags: ['nsa', 'hardware', 'attestation', 'tpm', 'experimental'],
} satisfies Project;
