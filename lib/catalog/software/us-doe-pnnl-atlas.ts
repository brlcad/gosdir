import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-atlas',
  name: 'ATLAS',
  summary:
    'ATLAS is a Snakemake/Python workflow for assembling, annotating, quantifying, and binning metagenome sequence data.',
  sponsor:
    'Pacific Northwest National Laboratory (PNNL), U.S. Department of Energy (project origin).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Metagenomics and bioinformatics',
  openSourceYear: 2017,
  license:
    'BSD-3-Clause for ATLAS workflow source; invoked third-party tools retain their own licenses',
  repository: 'https://github.com/metagenome-atlas/atlas',
  officialUrl:
    'https://www.pnnl.gov/publications/atlas-automatic-tool-local-assembly-structures-comprehensive-infrastructure-assembly',
  evidenceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7310028/',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'metagenomics', 'bioinformatics', 'snakemake'],
} satisfies Project;
