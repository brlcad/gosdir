import type { Project } from '../types';

export default {
  id: 'nasa-channel-emulator',
  name: 'NASA Channel Emulator',
  summary:
    'NASA Glenn network-testing software that emulates data framing, protocol gateways, and space-link delay, errors, and other channel effects.',
  sponsor: 'NASA Glenn Research Center (GRC), Network Emulation Laboratory',
  agencyIds: ['us-nasa-glenn-research-center', 'us-nasa'],
  geography: 'United States federal aerospace communications research; NASA Glenn Research Center, Cleveland, Ohio',
  jurisdiction: 'U.S. federal',
  domain: 'Space communications',
  openSourceYear: 2016,
  license: 'GNU General Public License version 2 (GPL-2.0)',
  repository: 'https://github.com/nasa/channel-emulator',
  officialUrl: 'https://software.nasa.gov/software/LEW-19351-1',
  evidenceUrl: 'https://ntrs.nasa.gov/citations/20090021990',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'glenn', 'network-emulation', 'space-communications'],
} satisfies Project;
