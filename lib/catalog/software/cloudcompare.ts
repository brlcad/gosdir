import type { Project } from '../types';

export default {
  id: 'cloudcompare',
  name: 'CloudCompare',
  summary:
    'A cross-platform 3D point-cloud and triangular-mesh processing application for large laser-scanning datasets, including point-cloud comparison, filtering, segmentation, and registration.',
  sponsor:
    'Originated in an EDF R&D CIFRE thesis supervised by Telecom Paris; France’s Ministry of Higher Education, Research and Space funds the CIFRE program.',
  agencyIds: ['fr-mesr'],
  geography: 'France (EDF R&D / Telecom Paris research origin)',
  jurisdiction: 'International',
  domain: '3D geospatial & point-cloud processing',
  openSourceYear: 2009,
  license:
    'GPL-2.0-or-later for the CloudCompare application; CCCoreLib and bundled plugins/components have separate licenses',
  repository: 'https://github.com/CloudCompare/CloudCompare',
  officialUrl: 'https://www.cloudcompare.org/',
  evidenceUrl: 'https://cloudcompare.org/doc/wiki/index.php/Introduction',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'research', 'point-cloud', 'lidar', 'geospatial'],
} satisfies Project;
