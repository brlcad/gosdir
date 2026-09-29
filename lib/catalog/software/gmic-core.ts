import type { Project } from '../types';

export default {
  id: 'gmic-core',
  name: "G'MIC Core",
  summary:
    'An image-processing interpreter, command-line tool, and C++ library developed by the GREYC public research laboratory.',
  sponsor: 'GREYC IMAGE team (CNRS, UNICAEN, ENSICAEN)',
  agencyIds: ['fr-greyc'],
  geography: 'France',
  jurisdiction: 'International',
  domain: 'Image processing',
  openSourceYear: 2018,
  license:
    'CeCILL-2.1 (core C++/CLI file-level option; other modules excluded)',
  repository: 'https://github.com/GreycLab/gmic',
  officialUrl: 'https://gmic.eu/',
  evidenceUrl: 'https://www.greyc.fr/lettre-dactualite-du-greyc-octobre-2021/',
  status: 'Active',
  verified: '2026-09-28',
  tags: ['france', 'research', 'image processing', 'command line', 'C++'],
} satisfies Project;
