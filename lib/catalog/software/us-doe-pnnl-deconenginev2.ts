import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-deconenginev2',
  name: 'DeconEngineV2',
  summary:
    'PNNL mass-spectrometry deconvolution engine and library, with the current C# DeconMSn implementation in the same repository.',
  sponsor:
    'U.S. Department of Energy, through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and proteomics',
  openSourceYear: 2017,
  license: 'Apache-2.0 for project source; dependencies retain their own terms',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/DeconEngineV2',
  officialUrl: 'https://www.osti.gov/doecode/biblio/8474',
  evidenceUrl: 'https://github.com/PNNL-Comp-Mass-Spec/DeconEngineV2/releases',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'mass spectrometry', 'proteomics', 'deconvolution'],
} satisfies Project;
