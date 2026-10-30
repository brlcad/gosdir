import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-ms-file-info-scanner',
  name: 'MS File Info Scanner',
  summary:
    'A PNNL console program that extracts acquisition metadata and produces quality-control plots across mass-spectrometry files.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and quality assurance',
  openSourceYear: 2014,
  license:
    'BSD-2-Clause for scanner source; bundled Thermo RawFileReader and dependencies retain separate terms',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/MS-File-Info-Scanner',
  officialUrl: 'https://pnnl-comp-mass-spec.github.io/MS-File-Info-Scanner/',
  evidenceUrl: 'https://pnnl-comp-mass-spec.github.io/MS-File-Info-Scanner/',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'mass spectrometry', 'quality assurance', 'metadata'],
} satisfies Project;
