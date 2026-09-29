import type { Project } from '../types';

export default {
  id: 'nasa-legacy-mars-gcm',
  name: 'NASA Ames Legacy Mars Global Climate Model',
  summary:
    'NASA Ames’s legacy Fortran global circulation model for simulating the Martian atmosphere and climate.',
  sponsor: 'NASA Ames Research Center, Mars Climate Modeling Center',
  agencyIds: ['us-nasa-ames-research-center'],
  geography:
    'United States federal planetary science; Mars atmosphere and climate modeling',
  jurisdiction: 'U.S. federal',
  domain: 'Planetary science & climate modeling',
  openSourceYear: 2021,
  license:
    'Project-specific NASA Open Source Agreement v1.3 for the released legacy model source; compilers, externally hosted datasets, and independent analysis packages are separate',
  repository: 'https://github.com/nasa/legacy-mars-global-climate-model',
  officialUrl: 'https://software.nasa.gov/software/ARC-18547-1',
  evidenceUrl:
    'https://www.nasa.gov/space-science-and-astrobiology-at-ames/division-overview/planetary-systems-branch-overview-stt/mcmc/mgcm-code/',
  status: 'Archived',
  verified: '2026-09-29',
  tags: ['nasa', 'ames', 'mars', 'climate-model', 'fortran'],
} satisfies Project;
