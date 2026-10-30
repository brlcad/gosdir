import type { Project } from '../types';

export default {
  id: 'us-doe-parflow',
  name: 'ParFlow',
  summary:
    'A modular parallel watershed-flow model integrating subsurface, overland, and land-surface processes.',
  sponsor:
    'Lawrence Livermore National Laboratory (LLNL), U.S. Department of Energy (DOE), with Colorado School of Mines, University of Bonn, and University of California, Berkeley collaborators',
  agencyIds: ['us-doe-lawrence-livermore-national-laboratory', 'us-doe'],
  geography:
    'Livermore, California, United States, with international academic collaborators',
  jurisdiction: 'U.S. federal',
  domain: 'Water resources modeling',
  openSourceYear: 2008,
  license: 'LGPL-2.1',
  repository: 'https://github.com/parflow/parflow',
  officialUrl: 'https://parflow.org/',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/1139',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'llnl', 'watershed modeling', 'hydrology', 'simulation'],
} satisfies Project;
