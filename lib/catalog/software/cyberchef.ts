import type { Project } from '../types';

export default {
  id: 'cyberchef',
  name: 'CyberChef',
  summary:
    'A browser-based toolkit for encoding, decoding, cryptography, compression, extraction, and interactive data analysis.',
  sponsor: 'Government Communications Headquarters',
  agencyIds: ['uk-gchq'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Cybersecurity',
  openSourceYear: 2016,
  license: 'Apache-2.0',
  repository: 'https://github.com/gchq/CyberChef',
  officialUrl: 'https://gchq.github.io/CyberChef/',
  evidenceUrl: 'https://www.gchq.gov.uk/news/cyberchef-cyber-swiss-army-knife',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['united kingdom', 'security', 'cryptography', 'data analysis'],
} satisfies Project;
