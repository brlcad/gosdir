import type { Project } from '../types';

export default {
  id: 'ornl-curifactory',
  name: 'Curifactory',
  summary:
    'A Python library and command-line tool for organizing, running, caching, and reporting reproducible research experiments.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL); DOE CODE identifies ORNL project stewardship, with no separate sponsor recorded.',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Reproducible research workflows',
  openSourceYear: 2022,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL/curifactory',
  officialUrl: 'https://ornl.github.io/curifactory/stable/index.html',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/70025',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'research workflows', 'reproducibility', 'python'],
} satisfies Project;
