import type { Project } from '../types';

export default {
  id: 'ornl-tdcsophiread',
  name: 'Sophiread (TDCSophiread)',
  summary:
    'A Python/C++ package for converting TPX3 neutron-imaging data into detector hits and neutron events using TDC-only timing.',
  sponsor:
    'U.S. Department of Energy (DOE), Office of Science, via Oak Ridge National Laboratory (ORNL).',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Neutron imaging and scientific computing',
  openSourceYear: 2023,
  license: 'GPL-3.0 (repository root); GPL-3.0-or-later (tdcsophiread)',
  repository: 'https://github.com/ornlneutronimaging/mcpevent2hist',
  officialUrl: 'https://github.com/ornlneutronimaging/mcpevent2hist',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/117311',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'neutron imaging', 'event processing', 'python', 'c++'],
} satisfies Project;
