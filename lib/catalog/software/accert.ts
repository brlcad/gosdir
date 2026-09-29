import type { Project } from '../types';

export default {
  id: 'accert',
  name: 'ACCERT',
  summary:
    'A Python framework for estimating nuclear power plant capital costs with itemized cost accounts, technology data, and supporting examples.',
  sponsor:
    'Argonne National Laboratory for the U.S. Department of Energy Office of Nuclear Energy Systems Analysis and Integration program, with Idaho National Laboratory collaborators.',
  agencyIds: [
    'us-doe-argonne-national-laboratory',
    'us-doe-idaho-national-laboratory',
    'us-doe',
  ],
  geography: 'United States (Illinois and Idaho)',
  jurisdiction: 'U.S. federal',
  domain: 'Climate & energy',
  openSourceYear: 2023,
  license: 'Apache-2.0',
  repository: 'https://github.com/accert-dev/ACCERT',
  officialUrl: 'https://sai.inl.gov/tools/',
  evidenceUrl: 'https://www.osti.gov/biblio/1963917',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nuclear', 'cost-estimation', 'energy', 'simulation'],
} satisfies Project;
