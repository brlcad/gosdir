import type { Project } from '../types';

export default {
  id: 'us-doe-stellopt',
  name: 'STELLOPT',
  summary:
    'A scientific code for optimizing three-dimensional magnetohydrodynamic equilibria for stellarator design and equilibrium reconstruction.',
  sponsor:
    'U.S. Department of Energy, Office of Science / Fusion Energy Sciences; Princeton Plasma Physics Laboratory',
  agencyIds: ['us-doe-princeton-plasma-physics-laboratory', 'us-doe'],
  geography:
    'Princeton Plasma Physics Laboratory, Princeton, New Jersey, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Fusion research & stellarator design',
  openSourceYear: 2020,
  license: 'MIT',
  repository: 'https://github.com/PrincetonUniversity/STELLOPT',
  officialUrl: 'https://www.pppl.gov/research/theory/codes',
  evidenceUrl: 'https://www.osti.gov/doecode/biblio/12551',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['united states', 'new jersey', 'doe', 'pppl', 'fusion', 'stellarator'],
} satisfies Project;
