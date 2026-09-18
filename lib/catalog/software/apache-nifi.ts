import type { Project } from '../types';

export default {
  id: 'apache-nifi',
  name: 'Apache NiFi',
  summary:
    'A secure dataflow automation platform that originated at NSA as NiagaraFiles and moved to independent Apache Software Foundation governance in 2014.',
  sponsor: 'Apache Software Foundation; National Security Agency (origin)',
  agencyIds: ['us-nsa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Data integration',
  license: 'Apache-2.0',
  repository: 'https://github.com/apache/nifi',
  officialUrl: 'https://nifi.apache.org/',
  evidenceUrl: 'https://code.mil/oss-faq.html',
  status: 'Active',
  verified: '2026-09-12',
  tags: ['nsa', 'apache', 'dataflow', 'provenance'],
} satisfies Project;
