import type { Project } from '../types';

export default {
  id: 'cfs-cfdp',
  name: 'Core Flight System CFDP Application (CF)',
  summary:
    'NASA Goddard’s reusable CCSDS File Delivery Protocol application for transmitting and receiving files through a spacecraft’s Core Flight System software bus.',
  sponsor: 'NASA Goddard Space Flight Center (GSFC)',
  agencyIds: ['us-nasa-goddard-space-flight-center', 'us-nasa'],
  geography: 'United States federal spacecraft software developed at NASA Goddard Space Flight Center, Greenbelt, Maryland',
  jurisdiction: 'U.S. federal',
  domain: 'Spacecraft flight software',
  openSourceYear: 2015,
  license: 'Apache-2.0 for the current public repository; NASA Software Catalog classifies the earlier Version 2 release as Open Source',
  repository: 'https://github.com/nasa/CF',
  officialUrl: 'https://software.nasa.gov/software/GSC-16125-1',
  evidenceUrl: 'https://etd.gsfc.nasa.gov/capabilities/core-flight-system/catalog',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'goddard', 'cfs', 'cfdp', 'spacecraft', 'file transfer'],
} satisfies Project;
