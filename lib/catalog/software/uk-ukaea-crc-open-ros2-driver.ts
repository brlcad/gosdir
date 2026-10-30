import type { Project } from '../types';

export default {
  id: 'uk-ukaea-crc-open-ros2-driver',
  name: 'CRC Open ROS 2 Driver',
  summary:
    'A ROS 2 hardware driver, robot descriptions, and startup configuration for Comau CRC Open robots.',
  sponsor:
    'United Kingdom Atomic Energy Authority (UKAEA), an NDPB under the Department for Energy Security and Net Zero',
  agencyIds: ['uk-uk-atomic-energy-authority'],
  geography: 'United Kingdom; reusable robotics/control software',
  jurisdiction: 'International',
  domain: 'Fusion energy and scientific computing',
  openSourceYear: 2025,
  license: 'Apache-2.0',
  repository: 'https://github.com/ukaea/CRCOpenROS2Driver',
  officialUrl: 'https://github.com/ukaea/CRCOpenROS2Driver',
  evidenceUrl: 'https://github.com/ukaea/CRCOpenROS2Driver/releases/tag/v0.6.0',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['United Kingdom', 'UKAEA', 'CRC', 'Open', 'ROS', 'Driver'],
} satisfies Project;
