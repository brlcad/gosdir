import type { Project } from '../types';

export default {
  id: 'spacerextractor',
  name: 'SpacerExtractor',
  summary:
    'A JGI command-line tool for extracting CRISPR spacers from metagenomic reads at scale.',
  sponsor:
    'DOE Joint Genome Institute, Viral Genomics Group / Lawrence Berkeley National Laboratory',
  agencyIds: ['us-doe-joint-genome-institute'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2024,
  license: 'GPL-3.0-or-later',
  repository: 'https://code.jgi.doe.gov/SRoux/spacerextractor',
  officialUrl:
    'https://jgi.doe.gov/who-we-are/program-platform-leads/groups/viral-genomics-group',
  evidenceUrl: 'https://www.nature.com/articles/s41467-026-73084-2',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['doe', 'crispr', 'metagenomics', 'research'],
} satisfies Project;
