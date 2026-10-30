import type { Project } from '../types';

export default {
  id: 'multipem-toolbox',
  name: 'MultiPEM Toolbox',
  summary:
    'An R toolbox for estimating explosive-event characteristics from seismic, acoustic, optical, and surface-effect observations.',
  sponsor:
    'Los Alamos National Laboratory, U.S. Department of Energy / National Nuclear Security Administration',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory', 'us-doe-nnsa'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Geophysics and monitoring',
  openSourceYear: 2024,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/multipem_toolbox',
  officialUrl: 'https://www.osti.gov/servlets/purl/2282524',
  evidenceUrl: 'https://academic.oup.com/gji/article/245/3/ggag125/8554203',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'nnsa', 'lanl', 'explosion monitoring', 'geophysics', 'r'],
} satisfies Project;
