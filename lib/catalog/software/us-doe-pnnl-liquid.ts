import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-liquid',
  name: 'LIQUID',
  summary:
    'Lipid-Informed Quantification and Identification (LIQUID) is a PNNL desktop application for high-throughput LC-MS/MS lipid identification and quantification.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL), with NIH/NIAID-supported lipidomics research.',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and lipidomics',
  openSourceYear: 2017,
  license:
    'Apache-2.0 for LIQUID source; target libraries and dependencies are separately governed',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/LIQUID',
  officialUrl:
    'https://www.pnnl.gov/available-technologies/lipid-informed-quantification-and-identification-liquid-software',
  evidenceUrl: 'https://data.pnnl.gov/group/nodes/software/33247',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'lipidomics', 'mass spectrometry', 'proteomics'],
} satisfies Project;
