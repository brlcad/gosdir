import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-lipidoz',
  name: 'LipidOz',
  summary:
    'A Python tool for locating lipid double bonds from OzID mass-spectrometry data.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Lipidomics and mass spectrometry',
  openSourceYear: 2023,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/PNNL-m-q/lipidoz',
  officialUrl: 'https://pypi.org/project/lipidoz/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/105685',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'lipidomics', 'mass spectrometry', 'python'],
} satisfies Project;
