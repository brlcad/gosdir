import type { Project } from '../types';

export default {
  id: 'selinux',
  name: 'SELinux',
  summary:
    'The userspace tools and libraries for the NSA-origin SELinux mandatory-access-control architecture, now maintained by the broader SELinux community.',
  sponsor: 'SELinux community; National Security Agency (origin)',
  agencyIds: ['us-nsa'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Cybersecurity',
  license:
    'Mixed, component-specific GPL-2.0/LGPL-2.1/Public domain/FreeBSD/third-party terms',
  repository: 'https://github.com/SELinuxProject/selinux',
  officialUrl:
    'https://www.nsa.gov/Research/NSA-Mission-Oriented-Research/LACR/',
  status: 'Active',
  verified: '2026-09-12',
  tags: ['nsa', 'linux', 'access control', 'security'],
} satisfies Project;
