import type { Project } from '../types';

export default {
  id: 'uk-ukhsa-gpha-mscape-taxaplease',
  name: 'taxaPlease',
  summary:
    'UKHSA standalone CLI and importable Python utility for looking up NCBI taxonomy IDs.',
  sponsor: 'UK Health Security Agency (UKHSA)',
  agencyIds: ['uk-health-security-agency'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Taxonomy and pathogen genomics',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/ukhsa-collaboration/gpha-mscape-taxaplease',
  officialUrl: 'https://github.com/ukhsa-collaboration/gpha-mscape-taxaplease',
  evidenceUrl:
    'https://github.com/ukhsa-collaboration/gpha-mscape-taxaplease/releases/tag/v2.4.2',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKHSA', 'mSCAPE', 'taxonomy', 'pathogen genomics'],
} satisfies Project;
