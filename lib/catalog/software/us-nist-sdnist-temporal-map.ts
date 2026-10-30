import type { Project } from '../types';

export default {
  id: 'us-nist-sdnist-temporal-map',
  name: 'SDNist v1.3 Temporal Map Challenge Environment',
  summary:
    'NIST PSCR’s Python scoring toolkit and reproducible environment for the 2020 Differential Privacy Temporal Map Challenge, distinct from the current SDNist v2 report tool.',
  sponsor:
    'National Institute of Standards and Technology, Public Safety Communications Research in the Communications Technology Laboratory, with Saurus Technologies under CRADA CN-21-0143.',
  agencyIds: ['us-nist-communications-technology-laboratory'],
  geography: 'Boulder, Colorado, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Privacy and public-safety analytics',
  openSourceYear: 2022,
  license:
    'NIST-Software (SDNist code; challenge data and submitted code are separately scoped)',
  repository:
    'https://github.com/usnistgov/differential-privacy-temporal-map-challenge-assets',
  officialUrl:
    'https://www.nist.gov/ctl/pscr/open-innovation-prize-challenges/past-prize-challenges/2020-differential-privacy-temporal',
  evidenceUrl: 'https://github.com/usnistgov/SDNist',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: [
    'united states',
    'nist',
    'pscr',
    'differential privacy',
    'public safety',
  ],
} satisfies Project;
