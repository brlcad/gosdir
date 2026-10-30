import type { Project } from '../types';

export default {
  id: 'epa-spsurvey',
  name: 'spsurvey',
  summary:
    'An R package for spatial probability-survey design and analysis, including generalized random tessellation stratified sampling.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, National Aquatic Resource Surveys research',
  agencyIds: ['us-epa-ord'],
  geography:
    'U.S. federal National Aquatic Resource Surveys and other spatial monitoring programs; methods are reusable elsewhere',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental statistics',
  openSourceYear: 2008,
  license: 'GPL-3.0',
  repository: 'https://github.com/USEPA/spsurvey',
  officialUrl: 'https://usepa.github.io/spsurvey/',
  evidenceUrl:
    'https://www.epa.gov/water-research/national-aquatic-resource-surveys-nars-research',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'nars', 'r', 'survey design', 'environment'],
} satisfies Project;
