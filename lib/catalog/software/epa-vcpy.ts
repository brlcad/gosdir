import type { Project } from '../types';

export default {
  id: 'epa-vcpy',
  name: 'VCPy',
  summary:
    'A Python framework for estimating emissions from volatile chemical products in United States emissions inventories.',
  sponsor:
    'U.S. Environmental Protection Agency, Office of Air and Radiation / Office of Air Quality Planning and Standards, with Office of Research and Development emissions-inventory modeling',
  agencyIds: ['us-epa', 'us-epa-oar', 'us-epa-ord'],
  geography: 'United States national emissions inventory',
  jurisdiction: 'U.S. federal',
  domain: 'Air emissions modeling',
  openSourceYear: 2022,
  license:
    'MIT for repository software and documentation; datasets and dependencies retain separate terms',
  repository: 'https://github.com/USEPA/VCPy',
  officialUrl:
    'https://www.epa.gov/cmaq/understanding-emissions-and-criteria-pollutant-formation-volatile-chemical-products-vcps',
  evidenceUrl:
    'https://gaftp.epa.gov/Air/nei/2023/doc/TSD/solvents-references.html',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['epa', 'oar', 'ord', 'air quality', 'emissions', 'python'],
} satisfies Project;
