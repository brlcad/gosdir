import type { Project } from '../types';

export default {
  id: 'brl-cad',
  name: 'BRL-CAD',
  summary:
    'A long-running constructive solid geometry modeling, editing, ray-tracing, and analysis system created by the U.S. Army and developed in the open since 2004.',
  sponsor: 'U.S. Army Research Laboratory',
  agencyIds: ['us-army-research-laboratory'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: '3D modeling',
  license:
    'LGPL-2.1 collective work; component-specific BSD/BDL/Public domain/third-party terms',
  repository: 'https://github.com/BRL-CAD/brlcad',
  officialUrl: 'https://brlcad.org/',
  evidenceUrl: 'https://code.mil/oss-faq.html',
  status: 'Active',
  featured: true,
  verified: '2026-09-12',
  tags: ['army', 'cad', 'geometry', 'modeling', 'simulation'],
} satisfies Project;
