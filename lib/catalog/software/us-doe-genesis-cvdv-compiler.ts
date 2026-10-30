import type { Project } from '../types';

export default {
  id: 'us-doe-genesis-cvdv-compiler',
  name: 'Genesis CV-DV Compiler',
  summary:
    'A compiler framework and domain-specific language for Hamiltonian simulation on hybrid continuous-variable/discrete-variable quantum processors.',
  sponsor:
    'U.S. Department of Energy, Office of Science, Advanced Scientific Computing Research; awards DE-SC0025384 and DE-SC0025563 support the research',
  agencyIds: ['us-doe-ascr', 'us-doe-office-of-science', 'us-doe'],
  geography:
    'United States — award-supported code authors are affiliated with Rutgers University in Piscataway, New Jersey',
  jurisdiction: 'U.S. federal',
  domain: 'Quantum computing and compiler infrastructure',
  openSourceYear: 2025,
  license: 'Apache-2.0',
  repository: 'https://github.com/ruadapt/Genesis-CVDV-Compiler',
  officialUrl: 'https://github.com/ruadapt/Genesis-CVDV-Compiler',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/182349',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ascr',
    'quantum computing',
    'compiler',
    'simulation',
    'python',
  ],
} satisfies Project;
