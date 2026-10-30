import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-mcrasta',
  name: 'MCRASTA',
  summary:
    'MCRASTA is a Python package implementing Markov chain Monte Carlo for rate-and-state friction models, including parameter-uncertainty analysis.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geophysics and earthquake modeling',
  openSourceYear: 2025,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/pnnl/MCRASTA',
  officialUrl: 'https://www.osti.gov/doecode/biblio/150568',
  evidenceUrl: 'https://www.osti.gov/servlets/purl/2427478',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'geophysics', 'earthquake modeling', 'python', 'mcmc'],
} satisfies Project;
