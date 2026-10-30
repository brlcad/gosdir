import type { Project } from '../types';

export default {
  id: 'us-nih-scirun',
  name: 'SCIRun 5',
  summary:
    'A scientific problem-solving environment for building workflows that combine modeling, simulation, and visualization.',
  sponsor:
    'National Institutes of Health, originally through NCRR/P41-supported work at the University of Utah Scientific Computing and Imaging Institute',
  agencyIds: ['us-nih'],
  geography:
    'United States; Scientific Computing and Imaging Institute, University of Utah, Salt Lake City, Utah',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing, biomedical simulation, and visualization',
  openSourceYear: 2005,
  license:
    'MIT for current SCIRun 5 source; historical SCIRun/BioPSE used an MIT/X Consortium variant; third-party libraries and assets retain separate licenses',
  repository: 'https://github.com/SCIInstitute/SCIRun',
  officialUrl: 'https://sci.utah.edu/scirun5/',
  evidenceUrl: 'https://reporter.nih.gov/project-details/11240986',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'united states',
    'nih',
    'university of utah',
    'scientific computing',
    'biomedical simulation',
  ],
} satisfies Project;
