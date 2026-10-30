import type { Project } from '../types';

export default {
  id: 'lanl-edge-bioinformatics',
  name: 'EDGE Bioinformatics',
  summary:
    'An integrated web platform for genomic-sequence analysis, including bacterial, viral, and metagenomic workflows.',
  sponsor:
    'U.S. Department of Energy/NNSA; Los Alamos National Laboratory, with co-development by Naval Medical Research Center and Defense Threat Reduction Agency',
  agencyIds: [
    'us-doe-los-alamos-national-laboratory',
    'us-doe-nnsa',
    'us-doe',
    'us-dod-dtra',
    'us-dod-naval-medical-research-command',
    'us-dod',
  ],
  geography:
    'Los Alamos, New Mexico, United States; U.S. federal research partners',
  jurisdiction: 'U.S. federal',
  domain: 'Bioinformatics',
  openSourceYear: 2014,
  license: 'GPL-3.0 for repository source',
  repository: 'https://github.com/LANL-Bioinformatics/EDGE',
  officialUrl: 'https://www.osti.gov/doecode/biblio/5344',
  evidenceUrl: 'https://doi.org/10.1093/nar/gkw1027',
  status: 'Active',
  verified: '2026-10-16',
  tags: ['doe', 'nnsa', 'lanl', 'bioinformatics', 'genomics'],
} satisfies Project;
