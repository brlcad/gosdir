import type { Project } from '../types';

export default {
  id: 'img-annotation-pipeline',
  name: 'IMG Annotation Pipeline (IMGAP)',
  summary:
    'The DOE Joint Genome Institute’s open-source pipeline for structural and functional annotation of genomes and metagenomes submitted to IMG.',
  sponsor: 'DOE Joint Genome Institute, Lawrence Berkeley National Laboratory',
  agencyIds: ['us-doe-joint-genome-institute'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Genomics',
  openSourceYear: 2023,
  license: 'GPL-3.0-or-later (pipeline code; external tools and databases separately licensed)',
  repository: 'https://code.jgi.doe.gov/img/img-pipelines/img-annotation-pipeline',
  officialUrl: 'https://img.jgi.doe.gov/docs/pipelineV5/',
  evidenceUrl: 'https://code.jgi.doe.gov/img/img-pipelines/img-annotation-pipeline/-/blob/main/README.md',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['united states', 'genomics', 'metagenomics', 'research'],
} satisfies Project;
