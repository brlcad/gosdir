import type { Project } from '../types';

export default {
  id: 'uk-ukhsa-gpha-mscape-chimera-synteny',
  name: 'Chimera-Synteny',
  summary:
    'UKHSA mSCAPE CLI that creates HTML synteny reports from pathogen-genome BAM inputs or CLIMB IDs.',
  sponsor: 'UK Health Security Agency (UKHSA)',
  agencyIds: ['uk-health-security-agency'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Pathogen genomics and metagenomic surveillance',
  openSourceYear: 2026,
  license: 'MIT',
  repository:
    'https://github.com/ukhsa-collaboration/gpha-mscape-chimera-synteny',
  officialUrl:
    'https://github.com/ukhsa-collaboration/gpha-mscape-chimera-synteny',
  evidenceUrl:
    'https://github.com/ukhsa-collaboration/gpha-mscape-chimera-synteny/releases/tag/v0.0.3',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKHSA', 'mSCAPE', 'pathogen genomics', 'synteny'],
} satisfies Project;
