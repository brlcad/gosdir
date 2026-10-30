import type { Project } from '../types';

export default {
  id: 'uk-ukhsa-gpha-mscape-nf-strep-pneumo',
  name: 'mSCAPE Streptococcus pneumoniae pipeline',
  summary:
    'A Nextflow pipeline for characterizing Streptococcus pneumoniae in metagenomic samples.',
  sponsor: 'UK Health Security Agency (UKHSA)',
  agencyIds: ['uk-health-security-agency'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Pathogen genomics and metagenomic surveillance',
  openSourceYear: 2025,
  license: 'MIT',
  repository:
    'https://github.com/ukhsa-collaboration/gpha-mscape-nf-strep-pneumo',
  officialUrl:
    'https://github.com/ukhsa-collaboration/gpha-mscape-nf-strep-pneumo',
  evidenceUrl:
    'https://github.com/ukhsa-collaboration/gpha-mscape-nf-strep-pneumo/releases/tag/v0.3.1',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKHSA', 'mSCAPE', 'Nextflow', 'pathogen genomics'],
} satisfies Project;
