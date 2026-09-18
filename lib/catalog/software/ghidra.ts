import type { Project } from '../types';

export default {
  id: 'ghidra',
  name: 'Ghidra',
  summary:
    'A software reverse-engineering framework developed by NSA Research and released publicly as open source in 2019.',
  sponsor: 'National Security Agency',
  agencyIds: ['us-nsa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Software analysis',
  license:
    'Apache-2.0 primary; GPL-3.0 support programs; federal portions Public domain; third-party terms',
  repository: 'https://github.com/NationalSecurityAgency/ghidra',
  officialUrl: 'https://www.nsa.gov/ghidra',
  evidenceUrl: 'https://code.mil/oss-faq.html',
  status: 'Active',
  featured: true,
  verified: '2026-09-12',
  tags: ['nsa', 'cybersecurity', 'reverse engineering', 'analysis'],
} satisfies Project;
