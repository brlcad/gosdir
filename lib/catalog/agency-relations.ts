import { agencies } from './agencies';
import { projects } from './software';
import type { Agency, Project } from './types';

export const agencyById: ReadonlyMap<string, Agency> = new Map(
  agencies.map((agency) => [agency.id, agency]),
);

function agencyLineage(agencyId: string) {
  const lineage: string[] = [];
  const visited = new Set<string>();
  let currentId: string | undefined = agencyId;

  while (currentId && !visited.has(currentId)) {
    lineage.push(currentId);
    visited.add(currentId);
    currentId = agencyById.get(currentId)?.parentAgencyId;
  }

  return lineage;
}

const projectAgencyRollups = new Map<string, ReadonlySet<string>>();
const mutableProjectsByAgencyId = new Map<string, Project[]>();

for (const project of projects) {
  const rollupIds = new Set(project.agencyIds.flatMap(agencyLineage));
  projectAgencyRollups.set(project.id, rollupIds);

  for (const agencyId of rollupIds) {
    const matchingProjects = mutableProjectsByAgencyId.get(agencyId) ?? [];
    matchingProjects.push(project);
    mutableProjectsByAgencyId.set(agencyId, matchingProjects);
  }
}

export const projectsByAgencyId: ReadonlyMap<string, readonly Project[]> =
  mutableProjectsByAgencyId;

export const representedAgencyIds: ReadonlySet<string> = new Set(
  projectsByAgencyId.keys(),
);

export const agencySearchTextByProjectId: ReadonlyMap<string, string> = new Map(
  projects.map((project) => {
    const terms = [...(projectAgencyRollups.get(project.id) ?? [])].flatMap(
      (agencyId) => {
        const agency = agencyById.get(agencyId);
        return agency
          ? [agency.name, agency.abbreviation, ...(agency.aliases ?? [])]
          : [];
      },
    );

    return [project.id, terms.filter(Boolean).join(' ')];
  }),
);

export function projectHasAgencyGeography(project: Project, geography: string) {
  return project.agencyIds.some(
    (agencyId) => agencyById.get(agencyId)?.geography === geography,
  );
}
