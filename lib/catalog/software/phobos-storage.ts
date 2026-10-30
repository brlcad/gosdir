import type { Project } from '../types';

export default {
  id: 'phobos-storage',
  name: 'Phobos object storage',
  summary:
    'A parallel heterogeneous object store for disk and tape storage in high-performance computing environments.',
  sponsor:
    'Commissariat à l’énergie atomique et aux énergies alternatives (CEA), including its HPC/IO-SEA collaboration',
  agencyIds: ['fr-cea'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Storage and high-performance computing',
  openSourceYear: 2017,
  license: 'LGPL-2.1-only',
  repository: 'https://github.com/phobos-storage/phobos',
  officialUrl:
    'https://hpc.cea.fr/en/collaborations/iosea/2022/09/19/hierarchical-storage-management-in-io-sea/index.html',
  evidenceUrl: 'https://hpc.cea.fr/tgcc-public/en/latex/tgcc-public.pdf',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['France', 'storage', 'HPC', 'LGPL-2.1-only'],
} satisfies Project;
