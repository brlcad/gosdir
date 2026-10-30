import type { Project } from '../types';

export default {
  id: 'fr-inria-grid5000-resources-explorer',
  name: "Grid'5000 Resources Explorer",
  summary:
    "The Grid'5000 web application for exploring site hardware/resources and checking group access.",
  sponsor:
    "Grid'5000 national research infrastructure, financed and operated by Inria, CNRS, universities, grandes écoles, and regional partners",
  agencyIds: ['fr-inria', 'fr-cnrs'],
  geography:
    "France (eight sites) and Luxembourg (one site) across the Grid'5000 infrastructure",
  jurisdiction: 'International',
  domain: 'Research infrastructure & computing resources',
  openSourceYear: 2024,
  license: 'GPL-3.0',
  repository: 'https://gitlab.inria.fr/grid5000/resources-explorer',
  officialUrl: 'https://grid5000.gitlabpages.inria.fr/resources-explorer/',
  evidenceUrl: 'https://www.grid5000.fr/w/Production:Getting_Started',
  status: 'Active',
  verified: '2026-10-20',
  tags: [
    'france',
    'luxembourg',
    'inria',
    'cnrs',
    'research-infrastructure',
    'hpc',
  ],
} satisfies Project;
