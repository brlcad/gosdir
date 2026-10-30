import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-memgaze',
  name: 'MemGaze',
  summary:
    'MemGaze is a high-resolution memory-trace analysis toolset that includes the MemFriend spatial-temporal affinity module.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing and memory analysis',
  openSourceYear: 2022,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/pnnl/memgaze',
  officialUrl:
    'https://www.pnnl.gov/publications/memfriend-understanding-memory-performance-spatial-temporal-affinity',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/80662',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'pnnl',
    'high-performance computing',
    'memory analysis',
    'performance',
  ],
} satisfies Project;
