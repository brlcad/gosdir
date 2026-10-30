import type { Project } from '../types';

export default {
  id: 'lanl-turbo-turtle',
  name: 'Turbo-Turtle',
  summary:
    'A Python toolset for solid-body modeling, meshing, and image generation with Abaqus and Cubit backends.',
  sponsor:
    'U.S. Department of Energy; Los Alamos National Laboratory, Weapons Engineering Analysis',
  agencyIds: ['us-doe-los-alamos-national-laboratory', 'us-doe'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Engineering design and simulation',
  openSourceYear: 2024,
  license:
    'BSD-3-Clause for repository source; Abaqus, Cubit, and dependencies are separate',
  repository: 'https://github.com/lanl-aea/turbo-turtle',
  officialUrl: 'https://www.osti.gov/doecode/biblio/146561',
  evidenceUrl: 'https://lanl-aea.github.io/turbo-turtle/index.html',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'engineering', 'meshing', 'python'],
} satisfies Project;
