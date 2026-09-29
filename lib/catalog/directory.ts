import {
  availabilityReasonLabels,
  availabilitySnapshot,
  getProjectAvailability,
  type ProjectAvailabilityRecord,
} from './availability';
import { projects } from './software';
import type { Project } from './types';

export type ProjectDirectoryReason = {
  code: string;
  message: string;
};

export type ProjectDirectoryState = {
  status: 'enabled' | 'disabled';
  listed: boolean;
  source: 'automated' | 'editorial' | 'system';
  statusChangedAt: string;
  reasons: ProjectDirectoryReason[];
  availability?: ProjectAvailabilityRecord;
};

export const projectById: ReadonlyMap<string, Project> = new Map(
  projects.map((project) => [project.id, project]),
);

export function getProjectDirectoryState(
  projectOrId: Project | string,
): ProjectDirectoryState {
  const project =
    typeof projectOrId === 'string'
      ? projectById.get(projectOrId)
      : projectOrId;

  if (!project) {
    return {
      status: 'disabled',
      listed: false,
      source: 'system',
      statusChangedAt: availabilitySnapshot.generatedAt,
      reasons: [
        {
          code: 'record-not-found',
          message: 'This project record does not exist in the catalog.',
        },
      ],
    };
  }

  const availability = getProjectAvailability(project.id);
  const automatedReasons = availability?.reasonCodes.map((code) => ({
    code,
    message: availabilityReasonLabels[code],
  }));

  if (project.directory?.status === 'disabled') {
    return {
      status: 'disabled',
      listed: false,
      source: 'editorial',
      statusChangedAt: project.directory.reviewed,
      reasons: [
        {
          code: 'editorial-review',
          message: project.directory.reason,
        },
        ...(availability?.status === 'disabled'
          ? (automatedReasons ?? [])
          : []),
      ],
      availability,
    };
  }

  if (!availability) {
    return {
      status: 'disabled',
      listed: false,
      source: 'system',
      statusChangedAt: availabilitySnapshot.generatedAt,
      reasons: [
        {
          code: 'availability-not-checked',
          message:
            'This record is waiting for its first automated publication check.',
        },
      ],
    };
  }

  if (availability.status === 'disabled') {
    return {
      status: 'disabled',
      listed: false,
      source: 'automated',
      statusChangedAt: availability.statusChangedAt,
      reasons:
        automatedReasons?.length
          ? automatedReasons
          : [
              {
                code: 'automated-check',
                message:
                  'Automated checks determined that this record no longer meets the directory publication requirements.',
              },
            ],
      availability,
    };
  }

  return {
    status: 'enabled',
    listed: true,
    source: 'automated',
    statusChangedAt: availability.statusChangedAt,
    reasons: [],
    availability,
  };
}

export const listedProjects: readonly Project[] = projects.filter(
  (project) => getProjectDirectoryState(project).listed,
);
