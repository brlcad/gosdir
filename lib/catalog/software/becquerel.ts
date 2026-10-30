import type { Project } from '../types';

export default {
  id: 'becquerel',
  name: 'Becquerel',
  summary:
    'A Python toolkit for nuclear spectroscopy and detector-data analysis.',
  sponsor:
    'Lawrence Berkeley National Laboratory, U.S. Department of Energy Office of Science',
  agencyIds: ['us-doe-lawrence-berkeley-national-laboratory', 'us-doe'],
  geography: 'Berkeley, California, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Nuclear science and spectroscopy',
  openSourceYear: 2017,
  license: 'BSD-3-Clause-LBNL (OSI-approved variant)',
  repository: 'https://github.com/lbl-anp/becquerel',
  officialUrl: 'https://www.osti.gov/doecode/biblio/166152',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/166152',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'berkeley lab',
    'nuclear spectroscopy',
    'python',
    'detector analysis',
  ],
} satisfies Project;
