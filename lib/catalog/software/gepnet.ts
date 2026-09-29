import type { Project } from '../types';

export default {
  id: 'gepnet',
  name: 'GEPnet',
  summary:
    'A Federal Police project-office management system, publicly distributed as GEPnet 2 and documented in current agency methodology.',
  sponsor: 'Polícia Federal (Brazilian Federal Police)',
  agencyIds: ['br-federal-police'],
  geography: 'Brazil',
  jurisdiction: 'International',
  domain: 'Project management',
  openSourceYear: 2016,
  license: 'GPL-2.0-or-later',
  repository: 'https://github.com/spbgovbr/gepnet',
  officialUrl:
    'https://www.gov.br/governodigital/pt-br/plataformas-e-servicos-digitais/software-publico/catalogo/catalogo',
  evidenceUrl:
    'https://www.gov.br/pf/pt-br/assuntos/licitacoes/2025/diretoria-de-tecnologia-da-informacao-e-inovacao-dti/contratos/contrato-16-2025-dti-pf/tr28_2023-1.pdf',
  status: 'Maintained',
  verified: '2026-09-28',
  tags: ['brazil', 'project management', 'public services'],
} satisfies Project;
