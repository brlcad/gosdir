import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-chemreasoner',
  name: 'ChemReasoner',
  summary:
    'An LLM-guided catalyst-discovery and search system over chemical spaces with quantum-chemistry feedback.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational chemistry and artificial intelligence',
  openSourceYear: 2024,
  license:
    'BSD-2-Clause for ChemReasoner source; linked upstream submodules retain their own MIT licenses',
  repository: 'https://github.com/pnnl/chemreasoner',
  officialUrl:
    'https://www.pnnl.gov/publications/chemreasoner-heuristic-search-over-large-language-models-knowledge-space-using-quantum',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/120958',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'pnnl',
    'computational chemistry',
    'artificial intelligence',
    'llm',
  ],
} satisfies Project;
