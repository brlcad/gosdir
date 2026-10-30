import type { Project } from '../types';

export default {
  id: 'lanl-panhandle',
  name: 'panhandle',
  summary:
    'An eBPF/Rust service for low-impact user-activity monitoring on high-performance computing systems and clusters.',
  sponsor:
    'U.S. Department of Energy / National Nuclear Security Administration; Los Alamos National Laboratory; NNSA open-source acknowledgement O5058',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States; high-performance computing operations',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing & system monitoring',
  openSourceYear: 2026,
  license:
    'MIT for panhandle software source; the root LICENSE also contains a LANL/Triad government-rights notice',
  repository: 'https://github.com/lanl/panhandle',
  officialUrl: 'https://github.com/lanl/panhandle',
  evidenceUrl: 'https://github.com/lanl/panhandle/releases/tag/v1.0.23',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'nnsa',
    'lanl',
    'hpc',
    'linux',
    'ebpf',
    'rust',
    'system monitoring',
  ],
} satisfies Project;
