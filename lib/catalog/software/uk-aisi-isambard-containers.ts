import type { Project } from '../types';

export default {
  id: 'uk-aisi-isambard-containers',
  name: 'Isambard Containers',
  summary:
    'AISI Isambard Containers, an HPC container build/launch toolkit and associated standard image workflow for Slurm/Apptainer.',
  sponsor:
    'UK AI Security Institute (AISI), Department for Science, Innovation and Technology',
  agencyIds: ['uk-ai-security-institute'],
  geography: 'United Kingdom; Isambard AI national supercomputing facility',
  jurisdiction: 'International',
  domain: 'High-performance computing and research infrastructure',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/ukgovernmentbeis/isambard_containers',
  officialUrl:
    'https://docs.isambard.ac.uk/user-documentation/guides/containers/',
  evidenceUrl: 'https://github.com/ukgovernmentbeis/isambard_containers',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'AISI', 'Isambard', 'Containers'],
} satisfies Project;
