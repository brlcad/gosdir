import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-neuralmie',
  name: 'NeuralMie',
  summary:
    'NeuralMie is a neural-network emulator for aerosol optical properties, accompanied by TAMie, a Python Mie-scattering implementation for atmospheric-model simulations.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Atmospheric science and aerosol optics',
  openSourceYear: 2024,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/pnnl/NEURALMIE',
  officialUrl:
    'https://www.pnnl.gov/publications/neuralmie-v10-aerosol-optics-emulator',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/147379',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'atmospheric science', 'aerosol optics', 'python'],
} satisfies Project;
