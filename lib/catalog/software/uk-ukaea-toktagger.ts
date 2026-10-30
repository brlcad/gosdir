import type { Project } from '../types';

export default {
  id: 'uk-ukaea-toktagger',
  name: 'TokTagger',
  summary:
    "TokTagger, UKAEA's web platform for annotating and curating fusion datasets for machine learning.",
  sponsor:
    'UK Atomic Energy Authority (UKAEA), with Culham Science Centre and UKRI-STFC collaborators',
  agencyIds: ['uk-uk-atomic-energy-authority', 'uk-ukri', 'uk-stfc'],
  geography: 'United Kingdom; UKAEA fusion facilities at Culham',
  jurisdiction: 'International',
  domain: 'Fusion research data and machine learning',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/ukaea/toktagger',
  officialUrl: 'https://www.ukaea.org/service/toktagger/',
  evidenceUrl: 'https://www.ukaea.org/service/toktagger/',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKAEA', 'UKRI', 'STFC', 'TokTagger'],
} satisfies Project;
