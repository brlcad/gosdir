import type { Project } from '../types';

export default {
  id: 'lanl-arcs',
  name: 'ARCS',
  summary:
    'Agentic Retrieval-Augmented Code Synthesis with Iterative Refinement is a LANL research tool for code generation, completion, and translation.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Artificial intelligence and developer tools',
  openSourceYear: 2026,
  license: 'GPL-3.0-or-later for repository source',
  repository: 'https://github.com/lanl/arcs',
  officialUrl: 'https://www.osti.gov/doecode/biblio/180510',
  evidenceUrl: 'https://arxiv.org/abs/2504.20434',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'artificial intelligence',
    'code generation',
    'retrieval augmented generation',
  ],
} satisfies Project;
