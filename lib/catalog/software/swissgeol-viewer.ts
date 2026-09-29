import type { Project } from '../types';

export default {
  id: 'swissgeol-viewer',
  name: 'SwissGeo 3D Viewer',
  summary:
    'Swisstopo’s web viewer for combining and exploring Swiss surface and subsurface geological data in three dimensions.',
  sponsor: 'Swiss Federal Office of Topography (swisstopo)',
  agencyIds: ['ch-swisstopo'],
  geography: 'Switzerland',
  jurisdiction: 'International',
  domain: 'Geospatial data',
  openSourceYear: 2020,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/swisstopo/swissgeol-viewer-suite',
  officialUrl: 'https://viewer.swissgeol.ch/',
  evidenceUrl: 'https://www.swissgeol.ch/en/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['switzerland', 'geology', '3d viewer', 'geospatial'],
} satisfies Project;
