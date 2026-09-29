import type { Project } from '../types';

export default {
  id: 'vecto',
  name: 'VECTO',
  summary:
    'The European Commission’s Vehicle Energy Consumption calculation TOol simulates heavy-duty vehicle energy use and CO₂ emissions for regulatory certification.',
  sponsor: 'European Commission Joint Research Centre (JRC), funded by DG Climate Action',
  agencyIds: ['eu-european-commission'],
  geography: 'European Union',
  jurisdiction: 'International',
  domain: 'Transport & vehicle emissions',
  openSourceYear: 2022,
  license: 'EUPL-1.2',
  repository: 'https://code.europa.eu/vecto/vecto',
  officialUrl:
    'https://web.jrc.ec.europa.eu/policy-model-inventory/explore/models/model-vecto/',
  evidenceUrl:
    'https://interoperable-europe.ec.europa.eu/collection/ec-ospo/news/shifting-high-gear',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['european union', 'transport', 'simulation', 'climate', 'certification'],
} satisfies Project;
