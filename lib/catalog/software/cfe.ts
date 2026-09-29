import type { Project } from '../types';

export default {
  id: 'cfe',
  name: 'Core Flight Executive (cFE)',
  summary:
    'NASA Goddard’s reusable embedded runtime and services component of the Core Flight System, providing software bus, time, event, executive, table, and file services to flight-software applications.',
  sponsor: 'NASA Goddard Space Flight Center (GSFC)',
  agencyIds: ['us-nasa-goddard-space-flight-center', 'us-nasa'],
  geography: 'United States federal spacecraft software developed at NASA Goddard Space Flight Center, Greenbelt, Maryland',
  jurisdiction: 'U.S. federal',
  domain: 'Spacecraft flight software',
  openSourceYear: 2012,
  license: 'Apache-2.0 for the current repository; NASA Open Source Agreement for the 2012 public cFE source release',
  repository: 'https://github.com/nasa/cFE',
  officialUrl: 'https://software.nasa.gov/software/GSC-18128-1',
  evidenceUrl: 'https://etd.gsfc.nasa.gov/capabilities/core-flight-system',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'goddard', 'cfs', 'spacecraft', 'flight software'],
} satisfies Project;
