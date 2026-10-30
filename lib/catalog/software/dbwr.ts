import type { Project } from '../types';

export default {
  id: 'dbwr',
  name: 'Display Builder Web Runtime',
  summary:
    'A web application that serves EPICS Phoebus operator displays to browser clients.',
  sponsor:
    'Oak Ridge National Laboratory, ORNL-EPICS / Spallation Neutron Source controls',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific instrumentation and EPICS control systems',
  openSourceYear: 2019,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL-EPICS/dbwr',
  officialUrl: 'https://github.com/ORNL-EPICS/dbwr',
  evidenceUrl:
    'https://epics-extensions.github.io/EPNix/nixos-26.05/nixos-services/user-guides/dbwr.html',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'epics', 'controls', 'web application'],
} satisfies Project;
