import type { Project } from '../types';

export default {
  id: 'nasa-cfs-file-manager',
  name: 'Core Flight System File Manager (FM)',
  summary:
    'NASA Goddard’s reusable cFS application for managing onboard spacecraft files through command and telemetry messages.',
  sponsor: 'NASA Goddard Space Flight Center, Flight Software Systems Branch',
  agencyIds: ['us-nasa-goddard-space-flight-center'],
  geography:
    'United States federal spacecraft and embedded flight-software systems; NASA Goddard Space Flight Center, Maryland',
  jurisdiction: 'U.S. federal',
  domain: 'Spaceflight & embedded software',
  openSourceYear: 2015,
  license:
    'Apache-2.0 for the current nasa/FM repository; cFS runtime and other components remain separately licensed',
  repository: 'https://github.com/nasa/FM',
  officialUrl: 'https://software.nasa.gov/software/GSC-18918-1',
  evidenceUrl:
    'https://www.nasa.gov/news-release/nasa-goddard-releases-open-source-core-flight-software-system-application-suite-to-public/',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'goddard', 'flight-software', 'cfs'],
} satisfies Project;
