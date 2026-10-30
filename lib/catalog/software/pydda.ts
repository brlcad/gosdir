import type { Project } from '../types';

export default {
  id: 'pydda',
  name: 'PyDDA',
  summary:
    'A Python package for three-dimensional multi-Doppler radar wind retrieval using direct data assimilation.',
  sponsor:
    'U.S. Department of Energy, Argonne National Laboratory; DOE Office of Science Biological and Environmental Research support is acknowledged by the project',
  agencyIds: ['us-doe-argonne-national-laboratory', 'us-doe'],
  geography: 'Lemont, Illinois, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Atmospheric science and weather radar retrieval',
  openSourceYear: 2018,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/openradar/PyDDA',
  officialUrl: 'https://openradarscience.org/PyDDA/',
  evidenceUrl: 'https://repository.library.noaa.gov/view/noaa/32197',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'argonne', 'atmospheric science', 'weather radar', 'python'],
} satisfies Project;
