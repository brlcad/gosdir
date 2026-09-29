import type { Project } from '../types';

export default {
  id: 'ccdd',
  name: 'Core Flight System Command and Data Dictionary (CCDD)',
  summary:
    'NASA Johnson ground-based tool for managing spacecraft command and telemetry definitions and generating files for flight and display systems.',
  sponsor: 'NASA Johnson Space Center (JSC)',
  agencyIds: ['us-nasa-johnson-space-center', 'us-nasa'],
  geography: 'United States federal software developed at NASA Johnson Space Center, Houston, Texas',
  jurisdiction: 'U.S. federal',
  domain: 'Spacecraft flight software',
  openSourceYear: 2017,
  license: 'NASA Open Source Agreement v1.3 (NASA-1.3) for CCDD-authored source; bundled third-party components retain their own licenses',
  repository: 'https://github.com/nasa/CCDD',
  officialUrl: 'https://software.nasa.gov/sites/default/files/NASA_Software_Catalog_2023-24.pdf',
  evidenceUrl: 'https://ntrs.nasa.gov/citations/20190000012',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'johnson', 'cfs', 'spacecraft', 'command and telemetry'],
} satisfies Project;
