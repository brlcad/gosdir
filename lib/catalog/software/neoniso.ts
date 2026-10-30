import type { Project } from '../types';

export default {
  id: 'neoniso',
  name: 'NEONiso',
  summary: 'An R package for calibrating NEON atmospheric carbon-isotope data.',
  sponsor:
    'Los Alamos National Laboratory, U.S. Department of Energy LDRD Program',
  agencyIds: ['us-doe', 'us-doe-los-alamos-national-laboratory'],
  geography: 'Los Alamos, New Mexico, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Environmental science',
  openSourceYear: 2022,
  license:
    'GPL-3.0-only (repository license; DOE CODE metadata instead says AGPL-3.0)',
  repository: 'https://github.com/lanl/NEONiso',
  officialUrl: 'https://cran.r-project.org/package=NEONiso',
  evidenceUrl:
    'https://www.neonscience.org/resources/code-hub?combine=&field_coding_language_target_id=All&order=name&page=0&sort=desc',
  status: 'Maintained',
  verified: '2026-10-16',
  tags: ['doe', 'lanl', 'neon', 'isotopes', 'environmental science', 'r'],
} satisfies Project;
