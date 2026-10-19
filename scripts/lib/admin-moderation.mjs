import {
  applyProjectAvailabilityPolicy,
  assessProjectLinks,
} from './project-availability-policy.mjs';

export function canReinstate(project, observation, now = Date.now()) {
  if (project.directory || !observation) return false;
  const age = now - Date.parse(observation.checkedAt);
  const expected = {
    repository: project.repository,
    official: project.officialUrl,
    ...(project.evidenceUrl ? { provenance: project.evidenceUrl } : {}),
  };
  return (
    Number.isFinite(age) &&
    age >= 0 &&
    age <= 86_400_000 &&
    Object.keys(expected).length ===
      Object.keys(observation.links ?? {}).length &&
    Object.entries(expected).every(
      ([role, url]) => observation.links?.[role]?.url === url,
    ) &&
    assessProjectLinks(observation.links).assessment === 'healthy'
  );
}

export function planModeration(job, data, now = new Date()) {
  const administration = structuredClone(data.administration);
  const availability =
    job.action === 'reinstate' ? structuredClone(data.availability) : null;
  const today = now.toISOString().slice(0, 10);
  // Validate the full selection before preparing any changes.
  for (const id of job.ids) {
    const project = data.projects.find((p) => p.id === id);
    if (!project) throw new Error(`Unknown record ${id}.`);
    if (
      job.action === 'reinstate' &&
      !canReinstate(project, data.observations[id], now.getTime())
    ) {
      throw new Error(
        project.directory
          ? `${id} has an editorial hold. Resolve that hold in the canonical catalog before reinstating.`
          : `Recheck ${id} first. Reinstatement requires healthy, matching links checked within 24 hours.`,
      );
    }
  }
  for (const id of job.ids) {
    if (availability) {
      delete administration.records[id];
      availability.projects[id] = applyProjectAvailabilityPolicy({
        previous: data.availability.projects[id],
        previousCheckedAt: data.availability.generatedAt,
        links: data.observations[id].links,
        checkedAt: today,
      });
    } else {
      const status = {
        suspend: 'suspended',
        hide: 'hidden',
        delete: 'deleted',
      }[job.action];
      if (!status) throw new Error('Unknown moderation action.');
      administration.records[id] = {
        status,
        // The canonical snapshot is bundled into the public static app. Keep
        // private hide/delete explanations in the job audit trail only.
        reason:
          job.action === 'suspend'
            ? job.reason
            : `This record has been ${status} by an administrator.`,
        updatedAt: now.toISOString(),
      };
    }
  }
  if (availability) {
    availability.generatedAt = today;
    availability.carriedForwardProjectIds = data.projects
      .filter((p) => !job.ids.includes(p.id))
      .map((p) => p.id);
  }
  return { administration, availability };
}
