import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-shad',
  name: 'SHAD',
  summary:
    'A C++ library of parallel data structures and algorithms for high-performance computing.',
  sponsor:
    'U.S. Department of Energy; developed at Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography:
    'Richland, Washington, United States (PNNL); use geography not stated',
  jurisdiction: 'U.S. federal',
  domain: 'High-performance computing',
  openSourceYear: 2019,
  license: 'Apache-2.0',
  repository: 'https://github.com/pnnl/SHAD',
  officialUrl: 'https://www.osti.gov/doecode/biblio/9858',
  evidenceUrl: 'https://pnnl.github.io/SHAD/',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['DOE', 'PNNL', 'HPC', 'C++', 'parallel computing'],
} satisfies Project;
