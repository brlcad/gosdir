import type { Project } from '../types';

export default {
  id: 'us-doe-lbnl-quantnet-real-time-control',
  name: 'QUANT-NET Real-Time Control',
  summary:
    'A modular ARTIQ-based data-plane control system for trapped-ion quantum-network nodes, separate from the network-wide qn-server controller.',
  sponsor:
    'Lawrence Berkeley National Laboratory, U.S. Department of Energy, with University of California, Berkeley collaboration',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory'],
  geography: 'Berkeley, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Quantum networking and experimental control',
  openSourceYear: 2026,
  license:
    'BSD-3-Clause-LBNL (root project source); LGPL-3.0-only for exp/datasets/scan_framework',
  repository: 'https://github.com/quant-net/real-time-control',
  officialUrl:
    'https://quantnet.lbl.gov/research/quant-net-design-and-implementation',
  evidenceUrl:
    'https://vips.pnnl.gov/search?taxonomy=physics.quantum+mechanics.quantum+information+theory',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'us',
    'department-of-energy',
    'lawrence-berkeley-national-laboratory',
    'quantum-networking',
    'real-time-control',
    'artiq',
    'python',
  ],
} satisfies Project;
