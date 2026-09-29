import type { Project } from '../types';

export default {
  id: 'genespace',
  name: 'GENESPACE',
  summary:
    'A comparative-genomics R package for synteny, ortholog and pan-genome analysis, developed with DOE JGI and HudsonAlpha.',
  sponsor:
    'DOE Joint Genome Institute / Lawrence Berkeley National Laboratory, in collaboration with HudsonAlpha Institute for Biotechnology',
  agencyIds: ['us-doe-joint-genome-institute'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing',
  openSourceYear: 2021,
  license: 'BSD-3-Clause-LBNL',
  repository: 'https://github.com/jtlovell/GENESPACE',
  officialUrl: 'https://jgi.doe.gov/science-programs/plant-program',
  evidenceUrl:
    'https://archive.jgi.doe.gov/wp-content/uploads/sites/8/2024/03/Beyond-Basepairs-Implementation-Report-2024.pdf',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['doe', 'genomics', 'r', 'research'],
} satisfies Project;
