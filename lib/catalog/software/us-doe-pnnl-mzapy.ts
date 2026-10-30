import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-mzapy',
  name: 'mzapy',
  summary:
    'A Python interface for reading unprocessed MZA mass-spectrometry data.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and scientific data tools',
  openSourceYear: 2022,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/PNNL-m-q/mzapy',
  officialUrl: 'https://mzapy.readthedocs.io/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/96984',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'mass spectrometry', 'python'],
} satisfies Project;
