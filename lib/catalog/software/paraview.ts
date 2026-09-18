import type { Project } from '../types';

export default {
  id: 'paraview',
  name: 'ParaView',
  summary:
    'A distributed scientific-visualization application developed through collaboration among Kitware, national laboratories, the Department of Energy, and Army Research Laboratory.',
  sponsor:
    'Kitware; DOE national laboratories and U.S. Army Research Laboratory collaborators',
  agencyIds: ['us-doe', 'us-army-research-laboratory'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Science & engineering',
  license: 'BSD-3-Clause',
  repository: 'https://gitlab.kitware.com/paraview/paraview',
  officialUrl: 'https://www.paraview.org/',
  evidenceUrl: 'https://code.mil/oss-faq.html',
  status: 'Active',
  verified: '2026-09-12',
  tags: ['doe', 'army', 'visualization', 'science'],
} satisfies Project;
