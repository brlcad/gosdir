import type { Project } from '../types';

export default {
  id: 'nasa-pylot',
  name: 'PyLOT (Python Cloud Operations Tool)',
  summary:
    'NASA GHRC’s reusable command-line and Python library for data-center operators managing Cumulus dataset and granule workflows and related cloud resources.',
  sponsor:
    'NASA Marshall Space Flight Center, Global Hydrometeorology Resource Center (GHRC) Distributed Active Archive Center',
  agencyIds: ['us-nasa-marshall-space-flight-center'],
  geography:
    'United States federal Earth-science data operations; NASA MSFC/GHRC, Huntsville, Alabama',
  jurisdiction: 'U.S. federal',
  domain: 'Cloud operations & Earth-science data',
  openSourceYear: 2022,
  license:
    'Apache-2.0 for PyLOT source; the NASA Cumulus stack, AWS services, and other dependencies remain separately licensed',
  repository: 'https://github.com/nasa/GHRC-PyLOT',
  officialUrl: 'https://github.com/nasa/GHRC-PyLOT/releases/tag/v3.1.1',
  evidenceUrl:
    'https://ghrc.nsstc.nasa.gov/home/sites/default/files/02_GHRC_UWG_Overview_0.pdf',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'ghrc', 'python', 'cloud-operations', 'earth-science'],
} satisfies Project;
