import type { Project } from '../types';

export default {
  id: 'uk-ukhsa-gpha-mscape-orangebox-claspar',
  name: 'ClasPar',
  summary:
    'UKHSA mSCAPE/Orange Box Python package and CLI for parsing microbial-classifier results into analysis tables.',
  sponsor: 'UK Health Security Agency (UKHSA)',
  agencyIds: ['uk-health-security-agency'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'Pathogen genomics and metagenomic surveillance',
  openSourceYear: 2026,
  license: 'MIT',
  repository:
    'https://github.com/ukhsa-collaboration/gpha-mscape-orangebox-claspar',
  officialUrl:
    'https://github.com/ukhsa-collaboration/gpha-mscape-orangebox-claspar',
  evidenceUrl:
    'https://github.com/ukhsa-collaboration/gpha-mscape-orangebox-claspar/releases/tag/v3.0.1',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'United Kingdom',
    'UKHSA',
    'mSCAPE',
    'Orange Box',
    'pathogen genomics',
  ],
} satisfies Project;
