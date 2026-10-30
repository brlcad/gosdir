import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-qcgnoms',
  name: 'QC-GN2oMS2',
  summary:
    'A Python graph-neural-network package for high-resolution tandem mass-spectrum prediction.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Computational chemistry and mass spectrometry',
  openSourceYear: 2023,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/PNNL-m-q/qcgnoms',
  officialUrl:
    'https://www.pnnl.gov/publications/qc-gn2oms2-graph-neural-net-high-resolution-mass-spectra-prediction',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/106128',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'doe',
    'pnnl',
    'computational chemistry',
    'mass spectrometry',
    'python',
  ],
} satisfies Project;
