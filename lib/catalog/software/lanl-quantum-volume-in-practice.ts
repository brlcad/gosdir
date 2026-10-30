import type { Project } from '../types';

export default {
  id: 'lanl-quantum-volume-in-practice',
  name: 'Quantum Volume in Practice',
  summary:
    'Quantum circuits and execution, transpilation, and analysis scripts for benchmarking the quantum volume of noisy quantum processors.',
  sponsor:
    'Los Alamos National Laboratory; DOE/NNSA contract 89233218CNA000001; LANL release designation C22038',
  agencyIds: ['us-doe', 'us-doe-nnsa', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Quantum computing',
  openSourceYear: 2022,
  license:
    'BSD-3-Clause for repository software and scripts; datasets, device APIs and third-party SDKs have separate terms',
  repository: 'https://github.com/lanl/Quantum-Volume-in-Practice',
  officialUrl: 'https://github.com/lanl/Quantum-Volume-in-Practice',
  evidenceUrl: 'https://doi.org/10.1109/TQE.2022.3184764',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'nnsa', 'lanl', 'quantum computing', 'benchmarking', 'nisq'],
} satisfies Project;
