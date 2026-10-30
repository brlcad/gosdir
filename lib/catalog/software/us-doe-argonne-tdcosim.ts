import type { Project } from '../types';

export default {
  id: 'us-doe-argonne-tdcosim',
  name: 'TDcoSim',
  summary:
    'A tool for coordinating transmission- and distribution-system co-simulations.',
  sponsor:
    'Argonne National Laboratory / U.S. Department of Energy Office of Electricity',
  agencyIds: ['us-doe-argonne-national-laboratory', 'us-doe'],
  geography:
    'U.S. power-system modeling; developed at Argonne National Laboratory in Lemont, Illinois',
  jurisdiction: 'U.S. federal',
  domain: 'Energy & microgrid modeling',
  openSourceYear: 2019,
  license: 'BSD-3-Clause for TDcoSim source code',
  repository: 'https://github.com/tdcosim/TDcoSim',
  officialUrl:
    'https://www.energy.gov/documents/microgrids-rd-strategic-plan-topic-6-integrated-models-and-tools-microgrid-planning-and',
  evidenceUrl:
    'https://documents.pserc.wisc.edu/documents/publications/reports/2024_reports/S_108G_Final_Report.pdf',
  status: 'Maintained',
  verified: '2026-10-19',
  tags: ['doe', 'argonne', 'energy systems', 'microgrids', 'simulation'],
} satisfies Project;
