import type { Project } from '../types';

export default {
  id: 'nasa-cfs-limit-checker',
  name: 'Core Flight System Limit Checker (LC)',
  summary:
    'NASA Goddard’s reusable cFS application for checking telemetry against configured limits and responding with events or command sequences.',
  sponsor: 'NASA Goddard Space Flight Center, Flight Software Systems Branch',
  agencyIds: ['us-nasa-goddard-space-flight-center'],
  geography:
    'United States federal spacecraft and embedded flight-software systems; NASA Goddard Space Flight Center, Maryland',
  jurisdiction: 'U.S. federal',
  domain: 'Spaceflight & embedded software',
  openSourceYear: 2017,
  license:
    'Apache-2.0 for the current Limit Checker repository; an earlier cFS NOSA release document and functional LC source appear together in the 2017 public-release commit. cFE, OSAL, PSP, and other framework dependencies are separate components and licenses.',
  repository: 'https://github.com/nasa/LC',
  officialUrl: 'https://software.nasa.gov/software/GSC-18921-1',
  evidenceUrl: 'https://etd.gsfc.nasa.gov/capabilities/core-flight-system/catalog',
  status: 'Maintained',
  verified: '2026-09-29',
  tags: ['nasa', 'goddard', 'cfs', 'flight-software', 'telemetry'],
} satisfies Project;
