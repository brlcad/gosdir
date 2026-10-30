import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-brain-ohsu',
  name: 'brain_ohsu',
  summary:
    'A PNNL/OHSU-modified TrailMap pipeline for 3-D brain axon segmentation.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory, in collaboration with Oregon Health & Science University.',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington and Portland, Oregon, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Neuroscience and biomedical image analysis',
  openSourceYear: 2023,
  license:
    'Simplified BSD-2-Clause for PNNL modifications; retained upstream components have separate MIT and Apache-2.0 licenses',
  repository: 'https://github.com/pnnl/brain_ohsu',
  officialUrl:
    'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0293856',
  evidenceUrl:
    'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0293856',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'ohsu', 'neuroscience', 'image analysis'],
} satisfies Project;
