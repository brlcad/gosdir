import type { Project } from '../types';

export default {
  id: 'mtre',
  name: 'MTRE',
  summary:
    'Multi-Token Reliability Estimation detects vision-language-model hallucinations by aggregating token-level reliability signals.',
  sponsor:
    'Los Alamos National Laboratory, U.S. Department of Energy LDRD Program',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Artificial intelligence and machine learning',
  openSourceYear: 2026,
  license:
    'BSD-3-Clause for repository code; external models and datasets are separate',
  repository: 'https://github.com/lanl/MTRE',
  officialUrl: 'https://www.osti.gov/doecode/biblio/177019',
  evidenceUrl: 'https://arxiv.org/abs/2505.11741',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'artificial intelligence',
    'hallucination detection',
    'vision-language models',
  ],
} satisfies Project;
