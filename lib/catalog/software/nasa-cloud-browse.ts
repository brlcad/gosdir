import type { Project } from '../types';

export default {
  id: 'nasa-cloud-browse',
  name: 'GHRC Cloud Browse',
  summary:
    'NASA GHRC’s public web application for searching, viewing, and downloading browse images and supporting documents for Earth-science datasets.',
  sponsor:
    'NASA Marshall Space Flight Center, Global Hydrometeorology Resource Center (GHRC) Distributed Active Archive Center',
  agencyIds: ['us-nasa-marshall-space-flight-center'],
  geography:
    'United States federal Earth-science data access; NASA MSFC/GHRC DAAC, Huntsville, Alabama',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science & data access',
  openSourceYear: 2024,
  license:
    'Apache-2.0 for GHRC Cloud Browse application source; NASA imagery, dataset documents, and external services retain separate rights',
  repository: 'https://github.com/nasa/GHRC-Cloud-Browse',
  officialUrl: 'https://ghrc.earthdata.nasa.gov/browseui/',
  evidenceUrl:
    'https://www.earthdata.nasa.gov/centers/ghrc-daac/data-access-tools',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'ghrc', 'earth-science', 'data-access', 'visualization'],
} satisfies Project;
