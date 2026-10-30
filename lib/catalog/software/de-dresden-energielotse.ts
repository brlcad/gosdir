import type { Project } from '../types';

export default {
  id: 'de-dresden-energielotse',
  name: 'Dresdner Energielotse',
  summary:
    'A web platform for information on municipal heat planning, heating options, building renovation, advice, and funding.',
  sponsor:
    'Landeshauptstadt Dresden, with STESAD GmbH (a company of the city) as project coordinator/owner; software developed by Sandstorm Media GmbH.',
  agencyIds: ['de-dresden-city'],
  geography: 'Germany; Dresden, Saxony.',
  jurisdiction: 'International',
  domain: 'Energy transition and citizen information',
  openSourceYear: 2026,
  license:
    'EUPL-1.2 for project code, with three documented GPL-3.0-or-later derived templates and separate third-party asset licenses; city logos, marks, and the Energielotse name are not granted by the code license.',
  repository:
    'https://gitlab.opencode.de/energielotse-dresden/energielotse-neos-plattform',
  officialUrl: 'https://energielotse.dresden.de/',
  evidenceUrl:
    'https://www.stesad.de/dresdner-energielotse-auf-der-kommunalen-waermeplanungskonferenz-sachsen-vorgestellt/',
  status: 'Active',
  verified: '2026-10-19',
  tags: [
    'germany',
    'dresden',
    'energy',
    'heat planning',
    'citizen information',
  ],
} satisfies Project;
