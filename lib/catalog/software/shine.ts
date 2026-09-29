import type { Project } from '../types';

export default {
  id: 'shine',
  name: 'SHINE',
  summary:
    'A command-line tool for configuring, starting, repairing, and managing Lustre file systems on computing clusters.',
  sponsor: 'CEA Directorate of Military Applications, Simulation Sciences and Information Department',
  agencyIds: ['fr-cea'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'High-performance computing',
  openSourceYear: 2013,
  license: 'GPL-2.0-only',
  repository: 'https://github.com/cea-hpc/shine',
  officialUrl: 'https://www-hpc.cea.fr/en/Opensources.html',
  evidenceUrl: 'https://www-hpc.cea.fr/en/Opensources.html',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['france', 'lustre', 'storage', 'supercomputing'],
} satisfies Project;
