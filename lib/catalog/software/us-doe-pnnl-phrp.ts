import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-phrp',
  name: 'Peptide Hit Results Processor (PHRP)',
  summary:
    'PHRP is a PNNL command-line processor for peptide-identification tool output.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and proteomics',
  openSourceYear: 2014,
  license:
    'BSD-2-Clause for PHRP source; external dependencies are separately licensed',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/PHRP',
  officialUrl: 'https://pnnl-comp-mass-spec.github.io/PHRP/',
  evidenceUrl: 'https://pnnl-comp-mass-spec.github.io/PHRP/',
  status: 'Active',
  verified: '2026-10-18',
  tags: [
    'doe',
    'pnnl',
    'mass spectrometry',
    'proteomics',
    'peptide identification',
  ],
} satisfies Project;
