import type { Project } from '../types';

export default {
  id: 'us-doe-cabbi-hse-sequence-finder',
  name: 'HSE Sequence Finder',
  summary:
    'A Python tool for finding heat-shock-element motifs in DNA sequences.',
  sponsor:
    'U.S. Department of Energy Office of Science, Biological and Environmental Research, through CABBI award DE-SC0018420; the paper also acknowledges USDA NIFA Hatch support.',
  agencyIds: ['us-doe'],
  geography:
    'Gainesville, Florida, United States (University of Florida author affiliation)',
  jurisdiction: 'U.S. federal',
  domain: 'Bioinformatics and plant science',
  openSourceYear: 2025,
  license: 'Apache-2.0',
  repository: 'https://github.com/qiandemoni/HSE_sequence_finder',
  officialUrl: 'https://github.com/qiandemoni/HSE_sequence_finder',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12708596/',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['united states', 'doe', 'cabbi', 'bioinformatics', 'plant science'],
} satisfies Project;
