import type { Project } from '../types';

export default {
  id: 'pvws',
  name: 'PV Web Socket',
  summary:
    'An ORNL-EPICS WebSocket service for exposing EPICS CA/PVA process variables to web clients.',
  sponsor:
    'Oak Ridge National Laboratory, ORNL-EPICS / Spallation Neutron Source controls',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific instrumentation and EPICS control systems',
  openSourceYear: 2019,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL-EPICS/pvws',
  officialUrl:
    'https://controlssoftware.sns.ornl.gov/css_phoebus/nightly/pvws.war',
  evidenceUrl:
    'https://www.cpsjournals.cn/article/doi/10.11804/NuclPhysRev.42.2023064',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'epics', 'controls', 'websocket'],
} satisfies Project;
