import type { Project } from '../types';

export default {
  id: 'mbin-docker',
  name: 'Mbin-docker',
  summary:
    'A DOE JGI toolkit and container workflow for metagenome binning in the Integrated Microbial Genomes pipeline.',
  sponsor: 'DOE Joint Genome Institute, Lawrence Berkeley National Laboratory',
  agencyIds: ['us-doe-joint-genome-institute'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Genomics',
  openSourceYear: 2024,
  license: 'GPL-3.0-or-later (Mbin source; bundled third-party tools separately licensed)',
  repository: 'https://code.jgi.doe.gov/metagenome-science-program/mbin-docker',
  officialUrl: 'https://jgi.doe.gov/who-we-are/program-platform-leads/groups/environmental-genomics',
  evidenceUrl: 'https://code.jgi.doe.gov/metagenome-science-program/mbin-docker/-/blob/main/LICENSE',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['united states', 'genomics', 'metagenomics', 'research'],
} satisfies Project;
