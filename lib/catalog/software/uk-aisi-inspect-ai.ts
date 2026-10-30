import type { Project } from '../types';

export default {
  id: 'uk-aisi-inspect-ai',
  name: 'Inspect AI',
  summary:
    "Inspect AI, the UK AI Security Institute's framework for evaluating large language models and AI agents.",
  sponsor:
    'UK AI Security Institute (AISI), Department for Science, Innovation and Technology',
  agencyIds: ['uk-ai-security-institute'],
  geography: 'United Kingdom',
  jurisdiction: 'International',
  domain: 'AI safety evaluation and research',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/ukgovernmentbeis/inspect_ai',
  officialUrl: 'https://inspect.aisi.org.uk/',
  evidenceUrl:
    'https://www.aisi.gov.uk/blog/open-sourcing-our-testing-framework-inspect',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'AISI', 'Inspect'],
} satisfies Project;
