import type { Project } from '../types';

export default {
  id: 'synbioqc-pbj',
  name: 'SynBioQC-PBJ',
  summary:
    'A DOE JGI synthetic-biology workflow for PacBio sequence validation and construct quality control, with public execution guidance.',
  sponsor: 'DOE Joint Genome Institute, Lawrence Berkeley National Laboratory',
  agencyIds: ['us-doe-joint-genome-institute'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Genomics',
  openSourceYear: 2024,
  license: 'BSD-3-Clause-LBNL (workflow source; external services and tools separately licensed)',
  repository: 'https://code.jgi.doe.gov/jgi-synbio-public/synbioqc-pbj',
  officialUrl: 'https://code.jgi.doe.gov/jgi-synbio-public/synbioqc-pbj',
  evidenceUrl: 'https://code.jgi.doe.gov/jgi-synbio-public/synbioqc-pbj/-/blob/main/README.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'genomics', 'synthetic biology', 'quality control'],
} satisfies Project;
