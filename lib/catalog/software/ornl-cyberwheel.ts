import type { Project } from '../types';

export default {
  id: 'ornl-cyberwheel',
  name: 'Cyberwheel',
  summary:
    'An emulation and cyber-range platform for evaluating defensive security strategies in enterprise-network environments.',
  sponsor:
    'U.S. Department of Energy (DOE), Oak Ridge National Laboratory (ORNL); DOE Laboratory Directed Research and Development (LDRD), contract AC05-00OR22725.',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States.',
  jurisdiction: 'U.S. federal',
  domain: 'Cybersecurity and cyber-range emulation',
  openSourceYear: 2024,
  license: 'MIT License',
  repository: 'https://github.com/ORNL/cyberwheel',
  officialUrl: 'https://github.com/ORNL/Cyberwheel',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/134699',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'cybersecurity', 'cyber range', 'network emulation'],
} satisfies Project;
