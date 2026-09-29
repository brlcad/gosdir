import type { Project } from '../types';

export default {
  id: 'savetree',
  name: 'SAVeTrEE',
  summary:
    'NASA DEVELOP Google Earth Engine tool for mapping vegetation mortality trends from Landsat spectral indices, with user-configurable areas, periods, and map exports.',
  sponsor: 'NASA DEVELOP National Program, in collaboration with Lassen Volcanic National Park',
  agencyIds: ['us-nasa'],
  geography: 'United States (developed for Lassen Volcanic National Park and Lassen National Forest, California)',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science',
  openSourceYear: 2018,
  license: 'NASA Open Source Agreement 1.3 (NASA-1.3)',
  repository: 'https://github.com/NASA-DEVELOP/SAVeTrEE',
  officialUrl: 'https://software.nasa.gov/software/LAR-19195-1',
  evidenceUrl: 'https://github.com/NASA-DEVELOP/SAVeTrEE/blob/master/README.txt',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['nasa', 'earth science', 'vegetation', 'remote sensing', 'google earth engine'],
} satisfies Project;
