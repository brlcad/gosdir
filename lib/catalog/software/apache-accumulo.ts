import type { Project } from '../types';

export default {
  id: 'apache-accumulo',
  name: 'Apache Accumulo',
  summary:
    'A distributed sorted key-value store with cell-level security, begun at NSA in 2008 and transferred to independent Apache Software Foundation governance.',
  sponsor: 'Apache Software Foundation; National Security Agency (origin)',
  agencyIds: ['us-nsa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Data infrastructure',
  license: 'Apache-2.0',
  repository: 'https://github.com/apache/accumulo',
  officialUrl: 'https://accumulo.apache.org/',
  evidenceUrl: 'https://code.mil/oss-faq.html',
  status: 'Active',
  featured: true,
  verified: '2026-09-12',
  tags: ['nsa', 'apache', 'database', 'security'],
} satisfies Project;
