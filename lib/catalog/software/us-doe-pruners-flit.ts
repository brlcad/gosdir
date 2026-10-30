import type { Project } from '../types';

export default {
  id: 'us-doe-pruners-flit',
  name: 'FLiT',
  summary:
    'The Floating-point Litmus Tester automates comparison of floating-point results across hardware, compilers, libraries, and software.',
  sponsor:
    'Lawrence Livermore National Laboratory, U.S. Department of Energy; developed with University of Utah researchers',
  agencyIds: ['us-doe-lawrence-livermore-national-laboratory', 'us-doe'],
  geography:
    'Lawrence Livermore National Laboratory, Livermore, California, United States; developed with University of Utah researchers',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing & numerical reproducibility',
  openSourceYear: 2017,
  license: 'BSD-3-Clause (LLNL source license with supplemental DOE notices)',
  repository: 'https://github.com/PRUNERS/FLiT',
  officialUrl: 'https://www.osti.gov/doecode/biblio/15827',
  evidenceUrl: 'https://arxiv.org/abs/1811.05618',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'united states',
    'california',
    'doe',
    'llnl',
    'floating point',
    'reproducibility',
  ],
} satisfies Project;
