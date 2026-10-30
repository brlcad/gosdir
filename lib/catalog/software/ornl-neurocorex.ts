import type { Project } from '../types';

export default {
  id: 'ornl-neurocorex',
  name: 'NeuroCoreX',
  summary:
    'An FPGA-based spiking-neural-network emulator implemented in VHDL, with Python configuration and monitoring over UART.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science / Advanced Scientific Computing Research; Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Neuromorphic computing',
  openSourceYear: 2025,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/neurocorex',
  officialUrl: 'https://github.com/ORNL/NeuroCoreX',
  evidenceUrl:
    'https://impact.ornl.gov/en/publications/neurocorex-an-open-source-fpga-based-spiking-neural-network-emula/',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'ornl',
    'neuromorphic computing',
    'fpga',
    'spiking neural networks',
  ],
} satisfies Project;
