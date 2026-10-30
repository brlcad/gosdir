import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-smaqc',
  name: 'SMAQC',
  summary:
    'SMAQC is a PNNL console application for mass-spectrometry quality-control analysis.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and quality assurance',
  openSourceYear: 2014,
  license:
    'BSD-2-Clause for SMAQC source; external dependencies are separately licensed',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/SMAQC',
  officialUrl: 'https://www.osti.gov/doecode/biblio/8626',
  evidenceUrl:
    'https://www.pnnl.gov/sites/default/files/media/file/Quality%20Control%20Analysis%20in%20Real-time%20QC-ART%20A%20Tool%20for%20Real-time%20Quality%20Control%20Assessment%20of%20Mass%20Spectrometry-based%20Proteomics%20Data.pdf',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'mass spectrometry', 'quality assurance', 'proteomics'],
} satisfies Project;
