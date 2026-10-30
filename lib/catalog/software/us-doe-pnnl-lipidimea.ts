import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-lipidimea',
  name: 'LipidIMEA',
  summary:
    'A Python CLI and GUI for integrated multi-experiment lipidomics analysis.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Lipidomics and mass spectrometry',
  openSourceYear: 2025,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/PNNL-m-q/lipidimea',
  officialUrl: 'https://pypi.org/project/lipidimea/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/153901',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'lipidomics', 'mass spectrometry', 'python'],
} satisfies Project;
