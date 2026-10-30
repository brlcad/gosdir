import type { Project } from '../types';

export default {
  id: 'qir-ee',
  name: 'QIR-EE',
  summary:
    'A C++ library and command-line execution engine for Quantum Intermediate Representation programs using LLVM, QSIM, and optional XACC backends.',
  sponsor:
    'U.S. Department of Energy (DOE), Oak Ridge National Laboratory (ORNL), and ORNL Quantum Computing Institute (QCI)',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Quantum computing and scientific software',
  openSourceYear: 2024,
  license:
    'MIT (user-choice option; also Apache-2.0 WITH LLVM-exception per COPYRIGHT and per-file SPDX tags)',
  repository: 'https://github.com/ORNL-QCI/qiree',
  officialUrl: 'https://github.com/ORNL-QCI/qiree',
  evidenceUrl: 'https://doi.org/10.1007/s11227-025-07969-2',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'quantum computing', 'qir', 'llvm', 'c++'],
} satisfies Project;
