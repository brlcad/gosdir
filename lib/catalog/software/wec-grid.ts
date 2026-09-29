import type { Project } from '../types';

export default {
  id: 'wec-grid',
  name: 'WEC-Grid',
  summary:
    'A Python framework for integrating wave-energy-converter models with power-grid simulators such as PSS®E and PyPSA.',
  sponsor:
    'University of Alaska Fairbanks Alaska Center for Energy and Power, supported by the U.S. Department of Energy Water Power Technologies Office under grant DE-EE0009445, with Pacific Northwest National Laboratory.',
  agencyIds: ['us-ak-uaf-acep', 'us-ak-uaf', 'us-doe', 'us-doe-pnnl'],
  geography: 'United States (Fairbanks, Alaska; Richland, Washington)',
  jurisdiction: 'U.S. federal',
  domain: 'Climate & energy',
  openSourceYear: 2025,
  license: 'MIT',
  repository: 'https://github.com/acep-uaf/WEC-Grid',
  officialUrl: 'https://acep-uaf.github.io/WEC-Grid/',
  evidenceUrl: 'https://doi.org/10.1016/j.softx.2025.102384',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['wave-energy', 'power-grid', 'renewable-energy', 'simulation'],
} satisfies Project;
