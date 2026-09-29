import type { Project } from '../types';

export default {
  id: 'bmds',
  name: 'Benchmark Dose Software (BMDS)',
  summary:
    'EPA dose-response modeling suite with an online service, offline desktop interface, and scriptable pybmds engine.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Center for Public Health and Environmental Assessment',
  agencyIds: ['us-epa-cphea'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  openSourceYear: 2024,
  license:
    'MIT (BMDS engine and BMDS-UI application source; dependencies retain separate terms)',
  repository: 'https://github.com/USEPA/BMDS',
  officialUrl: 'https://www.epa.gov/bmds/bmds-online-bmds-desktop-and-pybmds',
  evidenceUrl:
    'https://www.epa.gov/system/files/documents/2024-12/benchmark-dose-software-user-guide-2024.pdf',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['epa', 'toxicology', 'risk assessment', 'dose-response'],
} satisfies Project;
