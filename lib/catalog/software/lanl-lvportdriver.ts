import type { Project } from '../types';

export default {
  id: 'lanl-lvportdriver',
  name: 'lvPortDriver',
  summary:
    'An EPICS device-support driver for LabVIEW and National Instruments hardware.',
  sponsor:
    'U.S. Department of Energy; Los Alamos National Laboratory (LANSCE controls)',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography:
    'Los Alamos National Laboratory, Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Controls & instrumentation',
  openSourceYear: 2016,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/lanl/lvportdriver',
  officialUrl: 'https://www.osti.gov/doecode/biblio/59459',
  evidenceUrl: 'https://indico.in2p3.fr/event/37441/contributions/171992/',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: [
    'doe',
    'lanl',
    'epics',
    'labview',
    'controls',
    'instrumentation',
    'lansce',
  ],
} satisfies Project;
