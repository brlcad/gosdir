import type { Project } from '../types';

export default {
  id: 'java-pathfinder',
  name: 'Java Pathfinder (JPF)',
  summary:
    'A Java bytecode model checker that explores program behavior to detect defects such as deadlocks and uncaught exceptions.',
  sponsor: 'NASA Ames Research Center (originator); Java Pathfinder community (current steward)',
  agencyIds: ['us-nasa-ames-research-center'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Software assurance',
  openSourceYear: 2005,
  license: 'Apache-2.0 (current source; originally NASA Open Source Agreement)',
  repository: 'https://github.com/javapathfinder/jpf-core',
  officialUrl: 'https://software.nasa.gov/software/ARC-17487-1',
  evidenceUrl: 'https://spinoff.nasa.gov/Spinoff2010/ct_3.html',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['nasa', 'model checking', 'java', 'software assurance'],
} satisfies Project;
