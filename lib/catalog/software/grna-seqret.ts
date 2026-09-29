import type { Project } from '../types';

export default {
  id: 'grna-seqret',
  name: 'gRNA-SeqRET',
  summary:
    'A DOE Joint Genome Institute tool for genome-scale guide-RNA design and targeted sequence extraction, available as a web service or self-hosted source.',
  sponsor: 'DOE Joint Genome Institute, Lawrence Berkeley National Laboratory',
  agencyIds: ['us-doe-joint-genome-institute'],
  geography: 'United States (California)',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2020,
  license: 'BSD-3-Clause-LBNL',
  repository: 'https://bitbucket.org/berkeleylab/grnadesigner',
  officialUrl: 'https://grna.jgi.doe.gov/',
  evidenceUrl: 'https://bitbucket.org/berkeleylab/grnadesigner/raw/master/LICENSE.txt',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['doe', 'jgi', 'crispr', 'genomics', 'guide rna'],
} satisfies Project;
