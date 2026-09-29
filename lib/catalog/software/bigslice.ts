import type { Project } from '../types';

export default {
  id: 'bigslice',
  name: 'BiG-SLiCE',
  summary:
    'A scientific tool for large-scale biosynthetic gene-cluster clustering; DOE JGI/LBNL materially supported its version 2 line within an international collaboration.',
  sponsor:
    'DOE Joint Genome Institute / Lawrence Berkeley National Laboratory, collaborating with the Medema Group',
  agencyIds: ['us-doe-joint-genome-institute'],
  geography: 'United States / Netherlands',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2020,
  license: 'AGPL-3.0-or-later',
  repository: 'https://github.com/medema-group/bigslice',
  officialUrl: 'https://github.com/medema-group/bigslice',
  evidenceUrl:
    'https://code.jgi.doe.gov/SAKautsar/bigslice_v2/-/blob/master/README.md',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['doe', 'biosynthetic gene clusters', 'genomics', 'research'],
} satisfies Project;
