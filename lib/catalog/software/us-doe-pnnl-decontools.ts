import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-decontools',
  name: 'DeconTools',
  summary: 'PNNL mass-spectrometry data-processing and analysis software.',
  sponsor:
    'U.S. Department of Energy, through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and proteomics',
  openSourceYear: 2017,
  license:
    'Apache-2.0 for project-authored source; bundled Thermo RawFileReader.dll is separately copyrighted and outside that grant',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/DeconTools',
  officialUrl: 'https://www.osti.gov/doecode/biblio/8480',
  evidenceUrl: 'https://github.com/PNNL-Comp-Mass-Spec/DeconTools/releases',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'mass spectrometry', 'proteomics', 'data processing'],
} satisfies Project;
