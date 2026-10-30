import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-uniprot-dat-file-parser',
  name: 'UniProt DAT File Parser',
  summary:
    'A PNNL command-line utility that converts UniProt .DAT files into tabular output or FASTA files.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Bioinformatics and data conversion',
  openSourceYear: 2014,
  license:
    'Apache-2.0 for parser source; UniProt data and dependencies are separately governed',
  repository: 'https://github.com/PNNL-Comp-Mass-Spec/Uniprot-DAT-File-Parser',
  officialUrl: 'https://github.com/PNNL-Comp-Mass-Spec/Uniprot-DAT-File-Parser',
  evidenceUrl:
    'https://github.com/PNNL-Comp-Mass-Spec/Uniprot-DAT-File-Parser/releases/tag/v1.1.5674',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'uniprot', 'bioinformatics', 'fasta'],
} satisfies Project;
