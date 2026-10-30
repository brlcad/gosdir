import type { Project } from '../types';

export default {
  id: 'epa-spmodel',
  name: 'spmodel',
  summary:
    'An R package for fitting, summarizing, and predicting spatial statistical models.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, National Aquatic Resource Surveys research',
  agencyIds: ['us-epa-ord'],
  geography:
    'U.S. federal aquatic-resource surveys; spatial methods are reusable beyond the United States',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental statistics',
  openSourceYear: 2022,
  license: 'GPL-3.0',
  repository: 'https://github.com/USEPA/spmodel',
  officialUrl: 'https://usepa.github.io/spmodel/',
  evidenceUrl:
    'https://www.epa.gov/water-research/national-aquatic-resource-surveys-nars-research',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['epa', 'nars', 'r', 'spatial statistics', 'environment'],
} satisfies Project;
