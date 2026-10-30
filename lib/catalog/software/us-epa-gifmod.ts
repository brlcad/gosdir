import type { Project } from '../types';

export default {
  id: 'us-epa-gifmod',
  name: 'Green Infrastructure Flexible Model (GIFMod)',
  summary:
    'A C++ program for modeling stormwater and agricultural green-infrastructure practices, including hydraulics, particle transport, and water quality.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development',
  agencyIds: ['us-epa', 'us-epa-ord'],
  geography:
    'Not geographically restricted; supports site-specific urban stormwater and agricultural green-infrastructure modeling',
  jurisdiction: 'U.S. federal',
  domain: 'Water & stormwater infrastructure',
  openSourceYear: 2020,
  license:
    'GPL-3.0-only for first-party GIFMod project code; bundled third-party components retain their own license notices',
  repository: 'https://github.com/USEPA/GIFMod',
  officialUrl:
    'https://www.epa.gov/water-research/green-infrastructure-modeling-toolkit',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7286434/',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'water', 'stormwater', 'green infrastructure', 'modeling'],
} satisfies Project;
