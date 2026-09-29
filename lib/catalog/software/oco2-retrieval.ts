import type { Project } from '../types';

export default {
  id: 'oco2-retrieval',
  name: 'OCO-2 Level 2 Retrieval Algorithm',
  summary:
    'The open-source full-physics retrieval framework used to derive atmospheric carbon-dioxide products from OCO-2 spectra.',
  sponsor: 'NASA Jet Propulsion Laboratory (managed by Caltech)',
  agencyIds: ['us-nasa-jet-propulsion-laboratory'],
  geography: 'United States',
  jurisdiction: 'U.S. federal',
  domain: 'Earth science',
  openSourceYear: 2018,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/nasa/RtRetrievalFramework',
  officialUrl: 'https://software.nasa.gov/software/NPO-49044-1',
  evidenceUrl: 'https://amt.copernicus.org/articles/11/6539/2018/',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['united states', 'nasa', 'carbon dioxide', 'remote sensing'],
} satisfies Project;
