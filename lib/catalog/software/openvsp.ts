import type { Project } from '../types';

export default {
  id: 'openvsp',
  name: 'OpenVSP',
  summary:
    'A parametric aircraft-geometry tool created at NASA Langley for conceptual design, analysis, and three-dimensional modeling.',
  sponsor: 'NASA Langley Research Center',
  agencyIds: ['us-nasa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: '3D modeling',
  openSourceYear: 2012,
  license: 'NASA-1.3',
  repository: 'https://github.com/OpenVSP/OpenVSP',
  officialUrl: 'https://openvsp.org/',
  evidenceUrl:
    'https://ntrs.nasa.gov/api/citations/20190027157/downloads/20190027157.pdf',
  status: 'Active',
  verified: '2026-09-26',
  tags: ['nasa', 'aircraft', '3d modeling'],
} satisfies Project;
