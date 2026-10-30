import type { Project } from '../types';

export default {
  id: 'us-doe-parsl',
  name: 'Parsl',
  summary:
    'A Python parallel scripting and workflow library, included as a core ExaWorks SDK component.',
  sponsor:
    'U.S. Department of Energy, Office of Science / Advanced Scientific Computing Research; Exascale Computing Project and ExaWorks, with an Argonne National Laboratory team.',
  agencyIds: ['us-doe-argonne-national-laboratory', 'us-doe'],
  geography:
    'Argonne, Illinois, United States; deployed and tested at DOE HPC sites.',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific workflow management',
  openSourceYear: 2017,
  license: 'Apache-2.0',
  repository: 'https://github.com/Parsl/parsl',
  officialUrl: 'https://parsl-project.org/',
  evidenceUrl: 'https://exaworkssdk.readthedocs.io/en/latest/components.html',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'argonne', 'workflow', 'python', 'high-performance computing'],
} satisfies Project;
