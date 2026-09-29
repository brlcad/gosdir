import type { Project } from '../types';

export default {
  id: 'jgi-genesearch',
  name: 'JGI GeneSearch',
  summary:
    'A Go service for interactive and batch gene-similarity searches, co-developed for the DOE JGI IMG/M and KBase ecosystem.',
  sponsor: 'DOE Joint Genome Institute and Systems Biology Knowledgebase; source copyright Cohere Consulting',
  agencyIds: ['us-doe-joint-genome-institute'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Genomics',
  openSourceYear: 2021,
  license: 'BSD-3-Clause-LBNL (service code; external search tools separately licensed)',
  repository: 'https://code.jgi.doe.gov/jgi-kbase/genesearch',
  officialUrl: 'https://www.kbase.us/research/jgi-kbase-codevelopment/',
  evidenceUrl: 'https://code.jgi.doe.gov/jgi-kbase/genesearch/-/blob/main/LICENSE',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['united states', 'genomics', 'sequence similarity', 'research'],
} satisfies Project;
