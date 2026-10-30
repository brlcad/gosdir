import type { Project } from '../types';

export default {
  id: 'epa-waste-logistics-tool',
  name: 'All-Hazards Waste Logistics Tool',
  summary:
    'An ArcGIS Pro Python toolbox for planning disaster-debris and waste-management logistics.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Research and Development, Homeland Security Research Program / Center for Environmental Solutions and Emergency Response',
  agencyIds: ['us-epa', 'us-epa-ord', 'us-epa-ceser'],
  geography: 'United States disaster planning and response',
  jurisdiction: 'U.S. federal',
  domain: 'Emergency response and waste management',
  openSourceYear: 2021,
  license:
    'CC0 1.0 Universal for repository source; GIS runtime, services, and datasets retain separate terms',
  repository: 'https://github.com/USEPA/Waste_Logistics_Tool',
  officialUrl:
    'https://www.epa.gov/disaster-debris/tools-and-resources-material-and-waste-management-disasters',
  evidenceUrl: 'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1010UZZ.txt',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: [
    'epa',
    'ord',
    'ceser',
    'disaster response',
    'waste',
    'arcgis',
    'python',
  ],
} satisfies Project;
