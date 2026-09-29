import type { Project } from '../types';

export default {
  id: 'atom-archives',
  name: 'AtoM (Access to Memory)',
  summary:
    'International Council on Archives archival-description and public-access application; historical French Archives funding supported early development, and Indonesian national archival-system adoption is documented in peer-reviewed research.',
  sponsor:
    'Commissioned by the International Council on Archives; historical development funding included the Direction des Archives de France; currently developed and maintained by Artefactual Systems',
  agencyIds: ['fr-ministry-culture'],
  geography: 'Historical French public funding; software used by archival institutions internationally',
  jurisdiction: 'International',
  domain: 'Archives and records management',
  openSourceYear: 2008,
  license:
    'AGPL-3.0 for current AtoM source; the 2008 ICA-AtoM public beta was released under GPL-2; dependencies retain separate licenses',
  repository: 'https://github.com/artefactual/atom',
  officialUrl: 'https://www.accesstomemory.org/en/',
  evidenceUrl:
    'https://scholar.ui.ac.id/en/publications/analysis-of-factors-for-adoption-and-use-of-atom-in-indonesia/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['archives', 'records management', 'archival description', 'ica', 'france', 'international'],
} satisfies Project;
