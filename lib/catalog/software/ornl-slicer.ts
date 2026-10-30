import type { Project } from '../types';

export default {
  id: 'ornl-slicer',
  name: 'ORNLSlicer',
  summary:
    'A slicer and toolpath-planning application for additive manufacturing.',
  sponsor:
    'Oak Ridge National Laboratory (ORNL), U.S. Department of Energy (DOE), Office of Energy Efficiency and Renewable Energy, Advanced Materials and Manufacturing Technologies Office (AMMTO)',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Additive manufacturing',
  openSourceYear: 2023,
  license: 'GPL-3.0-only',
  repository: 'https://github.com/ORNLSlicer/ORNLSlicer',
  officialUrl: 'https://github.com/ORNLSlicer/ORNLSlicer',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/97742',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'additive manufacturing', 'slicing', 'toolpaths'],
} satisfies Project;
