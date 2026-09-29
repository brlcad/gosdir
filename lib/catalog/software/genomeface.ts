import type { Project } from '../types';

export default {
  id: 'genomeface',
  name: 'GenomeFace',
  summary:
    'A Berkeley Lab-maintained metagenome-binning application combining sequence, abundance, and marker-gene signals; the source includes installation and command-line guidance.',
  sponsor: 'Lawrence Berkeley National Laboratory; used in the DOE Joint Genome Institute metagenomics toolbox',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe-joint-genome-institute'],
  geography: 'United States (California)',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2026,
  license: 'BSD-3-Clause-LBNL (repository software; third-party assets retain their own terms)',
  repository: 'https://bitbucket.org/berkeleylab/genomeface',
  officialUrl: 'https://portal.nersc.gov/project/m1982/genomeface_repo_euk/',
  evidenceUrl: 'https://usermeeting.jgi.doe.gov/past-meetings/2024-meeting/2024-workshops/',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['doe', 'lbnl', 'jgi', 'metagenomics', 'binning'],
} satisfies Project;
