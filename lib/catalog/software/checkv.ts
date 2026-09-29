import type { Project } from '../types';

export default {
  id: 'checkv',
  name: 'CheckV',
  summary:
    'A research pipeline that assesses and improves the quality of viral genomes assembled from metagenomic data.',
  sponsor: 'DOE Joint Genome Institute, Lawrence Berkeley National Laboratory',
  agencyIds: ['us-doe-joint-genome-institute'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Genomics',
  openSourceYear: 2020,
  license: 'BSD-3-Clause-LBNL',
  repository: 'https://bitbucket.org/berkeleylab/checkv',
  officialUrl:
    'https://biosciences.lbl.gov/2020/12/22/jgi-checkv-tool-assess-virus-data-quality/',
  evidenceUrl:
    'https://biosciences.lbl.gov/2020/12/22/jgi-checkv-tool-assess-virus-data-quality/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'genomics', 'viruses', 'research'],
} satisfies Project;
