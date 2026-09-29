import type { Project } from '../types';

export default {
  id: 'bingo',
  name: 'Bingo Mini-App',
  summary:
    'NASA Langley Python/C++ framework for symbolic regression using genetic programming, with reusable optimization strategies and installation guidance.',
  sponsor: 'NASA Langley Research Center (LaRC), software designation LAR-19460-1',
  agencyIds: ['us-nasa-langley-research-center', 'us-nasa'],
  geography:
    'United States federal research software developed at NASA Langley Research Center, Hampton, Virginia',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing and machine learning',
  openSourceYear: 2019,
  license:
    'Apache-2.0 for the Bingo Mini-App/framework source; third-party dependencies and submodules retain separate licenses',
  repository: 'https://github.com/nasa/bingo',
  officialUrl: 'https://software.nasa.gov/software/LAR-19460-1',
  evidenceUrl: 'https://ntrs.nasa.gov/citations/20220005435',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'langley', 'symbolic regression', 'genetic programming', 'scientific software'],
} satisfies Project;
