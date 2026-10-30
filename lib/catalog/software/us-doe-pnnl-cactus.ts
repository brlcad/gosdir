import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-cactus',
  name: 'CACTUS',
  summary:
    'A PNNL chemistry-focused LLM agent that connects tool use with scientific workflows.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Chemistry and scientific AI',
  openSourceYear: 2024,
  license:
    'BSD-2-Clause for CACTUS source; third-party tools and models retain their own terms',
  repository: 'https://github.com/pnnl/cactus',
  officialUrl:
    'https://www.pnnl.gov/publications/cactus-chemistry-agent-connecting-tool-usage-science',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/127871',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'chemistry', 'artificial intelligence', 'llm'],
} satisfies Project;
