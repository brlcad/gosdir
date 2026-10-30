import type { Project } from '../types';

export default {
  id: 'lanl-spade',
  name: 'SPADE',
  summary:
    'Extracts simulation results from Abaqus ODB databases into serialized, open data formats.',
  sponsor:
    'U.S. Department of Energy; Los Alamos National Laboratory, Engineering Analysis',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Engineering analysis and simulation',
  openSourceYear: 2025,
  license:
    'BSD-3-Clause for repository source; Abaqus and other dependencies are separate',
  repository: 'https://github.com/lanl-aea/spade',
  officialUrl: 'https://www.osti.gov/doecode/biblio/161390',
  evidenceUrl: 'https://github.com/lanl-aea/spade/blob/main/README.rst',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'engineering', 'abaqus', 'data extraction'],
} satisfies Project;
