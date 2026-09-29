import type { Project } from '../types';

export default {
  id: 'abaverify',
  name: 'Abaqus User Subroutine Verification (abaverify)',
  summary:
    'NASA Langley Python package for running verification tests on Abaqus user subroutines and checking expected analysis results.',
  sponsor: 'NASA Langley Research Center (LaRC), software designation LAR-18938-1',
  agencyIds: ['us-nasa-langley-research-center', 'us-nasa'],
  geography: 'United States federal engineering software developed at NASA Langley Research Center, Hampton, Virginia',
  jurisdiction: 'U.S. federal',
  domain: 'Engineering and materials analysis',
  openSourceYear: 2016,
  license:
    'NASA Open Source Agreement v1.3 (NASA-1.3), software designation LAR-18938-1; Abaqus is a separate proprietary runtime dependency',
  repository: 'https://github.com/nasa/abaverify',
  officialUrl: 'https://software.nasa.gov/software/LAR-18938-1',
  evidenceUrl: 'https://github.com/nasa/abaverify/blob/master/readme.md',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'langley', 'engineering', 'finite elements', 'verification'],
} satisfies Project;
