import type { Project } from '../types';

export default {
  id: 'lanl-arianna-ppl',
  name: 'Arianna',
  summary: 'A NumPy-based Python probabilistic-programming language.',
  sponsor: 'U.S. Department of Energy; Los Alamos National Laboratory',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Probabilistic programming and scientific computing',
  openSourceYear: 2025,
  license: 'MIT for repository source',
  repository: 'https://github.com/lanl/arianna-ppl',
  officialUrl: 'https://www.osti.gov/doecode/biblio/154416',
  evidenceUrl: 'https://pypi.org/project/arianna-ppl/',
  status: 'Active',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'python',
    'probabilistic programming',
    'scientific computing',
  ],
} satisfies Project;
