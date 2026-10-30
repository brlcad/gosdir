import type { Project } from '../types';

export default {
  id: 'us-doe-pnnl-molecular-weight-calculator-dll',
  name: 'Molecular Weight Calculator .NET DLL',
  summary:
    'A reusable .NET library for formula, molecular-mass, isotope, and peptide-fragmentation calculations, separate from PNNL’s Visual Basic desktop calculator.',
  sponsor:
    'U.S. Department of Energy through Pacific Northwest National Laboratory (PNNL).',
  agencyIds: ['us-doe-pnnl'],
  geography: 'Richland, Washington, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Scientific computing and chemistry',
  openSourceYear: 2014,
  license:
    'Apache-2.0 for the calculator DLL source; bundled dependencies and demos are separately governed',
  repository:
    'https://github.com/PNNL-Comp-Mass-Spec/Molecular-Weight-Calculator-DLL',
  officialUrl:
    'https://pnnl-comp-mass-spec.github.io/Molecular-Weight-Calculator-DLL/',
  evidenceUrl:
    'https://pnnl-comp-mass-spec.github.io/Molecular-Weight-Calculator-DLL/',
  status: 'Maintained',
  verified: '2026-10-18',
  tags: ['doe', 'pnnl', 'chemistry', '.net', 'molecular mass'],
} satisfies Project;
