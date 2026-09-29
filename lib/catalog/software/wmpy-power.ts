import type { Project } from '../types';

export default {
  id: 'wmpy-power',
  name: 'wmpy-power',
  summary:
    'A Python model that simulates regional and facility-scale hydropower production from streamflow, reservoir storage, and plant characteristics to support long-term planning and climate-impact studies.',
  sponsor:
    'Pacific Northwest National Laboratory, operated by Battelle for the U.S. Department of Energy; supported by DOE’s Water Power Technologies Office under the SECURE Water Act Section 9505 assessment.',
  agencyIds: ['us-doe-pnnl', 'us-doe'],
  geography: 'United States (Richland, Washington)',
  jurisdiction: 'U.S. federal',
  domain: 'Climate & energy',
  openSourceYear: 2024,
  license: 'BSD-2-Clause',
  repository: 'https://github.com/9505-PNNL/wmpy_power',
  officialUrl:
    'https://www.pnnl.gov/publications/wmpy-power-python-package-process-based-regional-hydropower-simulation',
  evidenceUrl: 'https://doi.org/10.21105/joss.07225',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['hydropower', 'water', 'climate', 'simulation'],
} satisfies Project;
