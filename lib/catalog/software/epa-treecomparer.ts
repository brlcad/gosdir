import type { Project } from '../types';

export default {
  id: 'epa-treecomparer',
  name: 'treecompareR',
  summary:
    'An R package for visualizing chemical datasets through taxonomic trees and comparing dataset similarity.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Center for Computational Toxicology and Exposure',
  agencyIds: ['us-epa-ccte'],
  geography:
    'Chemical classification and comparison are not geographically bounded',
  jurisdiction: 'U.S. federal',
  domain: 'Computational toxicology',
  openSourceYear: 2022,
  license: 'GPL-3.0',
  repository: 'https://github.com/USEPA/treecompareR',
  officialUrl: 'https://github.com/USEPA/treecompareR',
  evidenceUrl:
    'https://www.fcsm.gov/assets/files/docs/GASP-2023-program-with-abstracts-2023-06-13.pdf',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'ccte', 'r', 'chemical taxonomy', 'visualization'],
} satisfies Project;
