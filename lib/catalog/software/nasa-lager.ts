import type { Project } from '../types';

export default {
  id: 'nasa-lager',
  name: 'LAGER (Light-weight Accumulator Gathering Efficiently in Real-time)',
  summary:
    'NASA Johnson Space Center’s C++ logging system for gathering records from multiple sources and delivering them to multiple end users.',
  sponsor: 'NASA Johnson Space Center',
  agencyIds: ['us-nasa-johnson-space-center'],
  geography:
    'United States federal human-spaceflight software and logging infrastructure; NASA Johnson Space Center, Texas',
  jurisdiction: 'U.S. federal',
  domain: 'Spaceflight & software infrastructure',
  openSourceYear: 2018,
  license:
    'NASA Open Source Agreement v1.3 for LAGER-authored files; explicitly identified reused intarweb files are MIT-licensed and other vendored/build components retain separate terms',
  repository: 'https://github.com/nasa/lager',
  officialUrl: 'https://software.nasa.gov/software/MSC-26455-1',
  evidenceUrl: 'https://github.com/nasa/lager/blob/master/README.md',
  status: 'Maintained',
  verified: '2026-09-29',
  tags: ['nasa', 'johnson', 'logging', 'cpp', 'spaceflight'],
} satisfies Project;
