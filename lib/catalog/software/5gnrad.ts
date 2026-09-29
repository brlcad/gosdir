import type { Project } from '../types';

export default {
  id: '5gnrad',
  name: '5GNRad',
  summary:
    'MATLAB radar-simulation tool for evaluating range, Doppler, angle, position, and velocity sensing from 5G New Radio signals.',
  sponsor:
    'NIST Communications Technology Laboratory, Wireless Networks Division',
  agencyIds: ['us-nist-communications-technology-laboratory'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific research',
  openSourceYear: 2025,
  license: 'NIST-Software (MATLAB and required toolboxes separately licensed)',
  repository: 'https://github.com/usnistgov/5GNRad',
  officialUrl:
    'https://www.nist.gov/ctl/wireless-networks-division/wireless-networks-division-tools',
  evidenceUrl:
    'https://www.nist.gov/ctl/wireless-networks-division/wireless-networks-division-tools',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nist', '5g', 'radar', 'simulation', 'matlab'],
} satisfies Project;
