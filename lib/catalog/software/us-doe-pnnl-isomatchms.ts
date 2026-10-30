import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-isomatchms',
  name: 'IsoMatchMS',
  summary:
    'An R package matching theoretical isotope profiles to mass spectra and producing filterable trelliscope visualizations.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL) and EMSL.',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Mass spectrometry and proteomics',
  openSourceYear: 2023,
  license:
    'BSD-2-Clause for IsoMatchMS package source; datasets and dependent packages are separately governed',
  repository: 'https://github.com/PNNL-HubMAP-Proteoform-Suite/IsoMatchMS',
  officialUrl: 'https://www.osti.gov/servlets/purl/2202633',
  evidenceUrl: 'https://www.osti.gov/servlets/purl/2202633',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'emsl', 'mass spectrometry', 'proteomics', 'r'],
} satisfies Project;
