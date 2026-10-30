import type { Project } from '../types';

export default {
  id: 'us-doe-lbnl-qn-server',
  name: 'QUANT-NET Server (Controller)',
  summary:
    'The network-wide controller package for the QUANT-NET Control Plane Framework, coordinating distributed quantum-network agents through a message bus.',
  sponsor:
    'Lawrence Berkeley National Laboratory, U.S. Department of Energy, with Energy Sciences Network collaborators',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory'],
  geography: 'Berkeley, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Quantum networking and control systems',
  openSourceYear: 2025,
  license: 'BSD-3-Clause-LBNL',
  repository: 'https://github.com/quant-net/qn-server',
  officialUrl: 'https://quantnet.lbl.gov/software',
  evidenceUrl: 'https://quant-net.github.io/qn-docs/latest/index.html',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'us',
    'department-of-energy',
    'lawrence-berkeley-national-laboratory',
    'quantum-networking',
    'control-plane',
    'python',
  ],
} satisfies Project;
