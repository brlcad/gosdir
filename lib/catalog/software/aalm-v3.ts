import type { Project } from '../types';

export default {
  id: 'aalm-v3',
  name: 'All Ages Lead Model (AALM) v3.0',
  summary:
    'EPA’s lead-exposure model for estimating concentrations in blood, bone, and other tissues across the human lifespan. This record covers the published v3.0 source release, not the later v3.1 model.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Center for Public Health and Environmental Assessment',
  agencyIds: ['us-epa-cphea'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2024,
  license: 'MIT',
  repository: 'https://github.com/USEPA/AALM',
  officialUrl: 'https://assessments.epa.gov/risk/document/&deid=363030',
  evidenceUrl: 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P101HCQ8.txt',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['epa', 'lead exposure', 'risk assessment', 'fortran'],
} satisfies Project;
