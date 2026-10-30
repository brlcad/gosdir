import type { Project } from '../types';

export default {
  id: 'epa-wntr',
  name: 'Water Network Tool for Resilience (WNTR)',
  summary:
    'A Python package for simulating and analyzing how water-distribution systems respond to disruptive scenarios.',
  sponsor:
    'U.S. Environmental Protection Agency and U.S. Department of Energy / Sandia National Laboratories (EPA–Sandia collaboration; Purdue University contributed)',
  agencyIds: [
    'us-epa',
    'us-epa-ord',
    'us-doe-sandia-national-laboratories',
    'us-doe',
  ],
  geography:
    'U.S. EPA manual publication location, Washington, DC; Sandia National Laboratories, Albuquerque, New Mexico (institutional affiliation; no deployment site asserted)',
  jurisdiction: 'U.S. federal',
  domain: 'Water & infrastructure resilience',
  openSourceYear: 2016,
  license:
    'Revised BSD for WNTR project code; bundled NumPy and EPANET components retain separate license terms',
  repository: 'https://github.com/USEPA/WNTR',
  officialUrl: 'https://usepa.github.io/WNTR/',
  evidenceUrl: 'https://www.osti.gov/servlets/purl/1454682',
  status: 'Active',
  verified: '2026-10-19',
  tags: ['epa', 'doe', 'sandia', 'water systems', 'resilience', 'python'],
} satisfies Project;
