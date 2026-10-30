import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-mzid-to-tsv-converter',
  name: 'MzidToTsvConverter',
  summary:
    'A standalone converter from mzIdentML identification files to tabular text.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and proteomics',
  openSourceYear: 2018,
  license:
    'BSD-2-Clause for repository source; external dependencies are separately licensed',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/Mzid-To-Tsv-Converter',
  officialUrl: 'https://www.osti.gov/doecode/biblio/8579',
  evidenceUrl:
    'https://github.com/MoTrPAC/motrpac-proteomics-pipeline/blob/61d8aaa0ad679e59320a98c470e989188387b581/dockerfiles/Dockerfile.mzid2tsv',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'mass spectrometry', 'proteomics', 'mzidentml'],
} satisfies Project;
