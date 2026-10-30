import type { Project } from '../types';

export default {
  id: 'thermochimica',
  name: 'Thermochimica',
  summary:
    'An ORNL Fortran library for thermodynamic-equilibrium and phase calculations, with scientific use in molten-salt reactor modeling.',
  sponsor: 'Oak Ridge National Laboratory, U.S. Department of Energy',
  agencyIds: ['us-doe-oak-ridge-national-laboratory', 'us-doe'],
  geography: 'Oak Ridge, Tennessee, United States',
  jurisdiction: 'U.S. federal',
  domain: 'Thermodynamics and nuclear engineering',
  openSourceYear: 2017,
  license: 'BSD-3-Clause',
  repository: 'https://github.com/ORNL-CEES/thermochimica',
  officialUrl: 'https://github.com/ORNL-CEES/thermochimica',
  evidenceUrl: 'https://doi.org/10.11578/dc.20180201.1',
  status: 'Active',
  verified: '2026-10-18',
  tags: ['doe', 'ornl', 'thermodynamics', 'nuclear engineering', 'fortran'],
} satisfies Project;
