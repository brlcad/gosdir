import type { Project } from '../types';

export default {
  id: 'uk-aisi-optstop',
  name: 'OptStop',
  summary:
    'OptStop, a Python package that applies optimal stopping to allocate evaluation compute.',
  sponsor:
    'UK AI Safety Institute (AISI), Department for Science, Innovation and Technology',
  agencyIds: ['uk-ai-security-institute'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'AI safety evaluation and research',
  openSourceYear: 2026,
  license: 'MIT',
  repository: 'https://github.com/UKGovernmentBEIS/optstop',
  officialUrl:
    'https://www.aisi.gov.uk/blog/optimal-stopping-spending-evaluation-compute-where-it-counts',
  evidenceUrl: 'https://arxiv.org/abs/2608.14425',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'AISI', 'AI safety', 'Evaluation'],
} satisfies Project;
