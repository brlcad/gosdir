import type { Project } from '../types';

export default {
  id: 'epa-waste-staging-tool',
  name: 'Waste Storage and Staging Site Selection Tool',
  summary:
    'A desktop GIS tool for identifying and ranking potential sites for storing and staging disaster debris.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Homeland Security Research Program',
  agencyIds: ['us-epa', 'us-epa-ord', 'us-epa-ceser'],
  geography:
    'United States disaster-response planning; users select an area of interest',
  jurisdiction: 'U.S. federal',
  domain: 'Emergency response and waste management',
  openSourceYear: 2021,
  license:
    'CC0 1.0 for repository-authored software source; external data and GIS dependencies retain separate terms',
  repository: 'https://github.com/USEPA/Waste_Staging_Tool',
  officialUrl:
    'https://www.epa.gov/emergency-response-research/biological-response-tools',
  evidenceUrl:
    'https://www.epa.gov/emergency-response-research/biological-response-tools',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'ord', 'ceser', 'disaster response', 'waste', 'gis'],
} satisfies Project;
