import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-masic',
  name: 'MASIC',
  summary:
    'MS/MS Automated Selected Ion Chromatogram generator (MASIC) generates and analyzes chromatograms from LC-MS/MS data.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and proteomics',
  openSourceYear: 2014,
  license:
    'BSD-2-Clause for MASIC source; Thermo RawFileReader and other dependencies retain separate terms',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/MASIC',
  officialUrl: 'https://pnnl-comp-mass-spec.github.io/MASIC/',
  evidenceUrl: 'https://pnnl-comp-mass-spec.github.io/MASIC/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'mass spectrometry', 'proteomics', 'chromatography'],
} satisfies Project;
