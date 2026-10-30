import type { Project } from '../types';

export default {
  id: 'ornl-mumatscale',
  name: 'muMatScale',
  summary:
    'A cellular-automata code for modeling solidification microstructures in binary and pseudo-binary alloys.',
  sponsor:
    'U.S. Department of Energy, Office of Science; Oak Ridge National Laboratory, with University of South Carolina collaboration',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography:
    'Oak Ridge, Tennessee, United States; University of South Carolina, Columbia, South Carolina',
  jurisdiction: 'U.S. federal',
  domain: 'Materials science and computational metallurgy',
  openSourceYear: 2023,
  license:
    'BSD-3-Clause for muMatScale; inherited uMatIC files have a separate BSD-style notice',
  repository: 'https://github.com/lang-yuan/muMatScale',
  officialUrl: 'https://www.osti.gov/doecode/biblio/117471',
  evidenceUrl: 'https://doi.org/10.1016/j.addma.2024.104401',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'ornl', 'materials science', 'alloys', 'cellular automata'],
} satisfies Project;
