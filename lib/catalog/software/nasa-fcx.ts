import type { Project } from '../types';

export default {
  id: 'nasa-fcx',
  name: 'Field Campaign Explorer (FCX)',
  summary:
    'NASA GHRC’s cloud-based interactive service for exploring and visualizing Earth-science field-campaign data in a common frame of reference.',
  sponsor:
    'NASA Marshall Space Flight Center, Global Hydrometeorology Resource Center (GHRC) Distributed Active Archive Center',
  agencyIds: ['us-nasa-marshall-space-flight-center'],
  geography:
    'United States federal Earth-science field-campaign data; NASA MSFC/GHRC DAAC, Huntsville, Alabama',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science & data visualization',
  openSourceYear: 2022,
  license:
    'Apache-2.0 for the FCX UI and paired backend source repositories; campaign datasets, cloud services, and third-party packages retain separate rights',
  repository: 'https://github.com/nasa/GHRC-FieldCampaign-eXplorer-UI',
  officialUrl: 'https://ghrc.earthdata.nasa.gov/fcx/index.html',
  evidenceUrl:
    'https://www.earthdata.nasa.gov/centers/ghrc-daac/data-access-tools',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'ghrc', 'earth-science', 'field-campaigns', 'visualization'],
} satisfies Project;
