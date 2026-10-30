import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-protein-digestion-simulator',
  name: 'Protein Digestion Simulator',
  summary:
    'A PNNL application for validating and transforming FASTA/text files, simulating enzymatic protein digestion, and predicting normalized elution times.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and proteomics',
  openSourceYear: 2014,
  license:
    'BSD-2-Clause for the simulator app; RPL-1.5 for the separate NET prediction DLL',
  repository:
    'https://github.com/PNNL-Comp-Mass-Spec/Protein-Digestion-Simulator',
  officialUrl:
    'https://pnnl-comp-mass-spec.github.io/Protein-Digestion-Simulator/',
  evidenceUrl: 'https://doi.org/10.1128/mSystems.00375-25',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'mass spectrometry', 'proteomics', 'protein digestion'],
} satisfies Project;
