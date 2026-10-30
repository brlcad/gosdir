import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-mage',
  name: 'Mage',
  summary:
    'Tools for extracting and processing mass-spectrometry search results and associated metadata.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and proteomics',
  openSourceYear: 2017,
  license:
    'BSD-2-Clause for the Mage suite source; dependencies are separately licensed',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/Mage',
  officialUrl: 'https://github.com/PNNL-Comp-Mass-Spec/Mage',
  evidenceUrl:
    'https://www.pnnl.gov/main/publications/external/technical_reports/PNNL-38328.pdf',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'mass spectrometry', 'proteomics', 'data processing'],
} satisfies Project;
