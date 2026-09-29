import type { ProjectFreshness } from '@/lib/catalog/freshness';

const statusColor = {
  fresh: 'text-green',
  current: 'text-blue',
  quiet: 'text-[#906400]',
  historical: 'text-slate',
  unknown: 'text-slate',
} as const;

export function FreshnessSparkline({
  freshness,
  compact = false,
}: {
  freshness: ProjectFreshness;
  compact?: boolean;
}) {
  const width = compact ? 92 : 168;
  const height = compact ? 28 : 42;
  const padding = compact ? 3 : 4;
  const values = freshness.annualCommits.map(({ commits }) => commits);
  const measured = values.filter((value): value is number => value !== null);
  const max = Math.max(...measured, 0);
  const points = values.map((value, index) => {
    const x =
      padding +
      (index * (width - padding * 2)) / Math.max(values.length - 1, 1);
    if (value === null) return null;
    const ratio = max === 0 ? 0 : Math.log1p(value) / Math.log1p(max);
    const y = height - padding - ratio * (height - padding * 2);
    return { x, y, year: freshness.annualCommits[index].year };
  });
  const activityDescription = freshness.annualCommits
    .map(
      ({ year, commits }, index) =>
        `${year}${index === freshness.annualCommits.length - 1 ? ' year to date' : ''}: ${commits === null ? 'unavailable' : `${commits} commits`}`,
    )
    .join('; ');

  if (measured.length === 0) {
    if (compact) return null;

    return (
      <span
        className={`block font-mono text-[9px] font-bold uppercase tracking-[.05em] ${statusColor[freshness.status]}`}
        style={{ minHeight: height, width }}
      >
        Activity unavailable
      </span>
    );
  }

  const runs: Array<Array<NonNullable<(typeof points)[number]>>> = [];
  for (const point of points) {
    if (!point) continue;
    const previousIndex = points.indexOf(point) - 1;
    if (!runs.length || previousIndex < 0 || points[previousIndex] === null)
      runs.push([]);
    runs.at(-1)?.push(point);
  }

  return (
    <span className={`${statusColor[freshness.status]} block max-w-full`}>
      {!compact && (
        <span className="sr-only">
          Annual commits reachable from the current default branch.{' '}
          {activityDescription}
        </span>
      )}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        aria-hidden="true"
        focusable="false"
        className="block max-w-full"
      >
        <path
          d={`M${padding} ${height - padding}H${width - padding}`}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.18"
        />
        {runs.map(
          (run) =>
            run.length > 1 && (
              <polyline
                key={run[0].year}
                points={run
                  .map(({ x, y }) => `${x.toFixed(1)},${y.toFixed(1)}`)
                  .join(' ')}
                fill="none"
                stroke="currentColor"
                strokeWidth={compact ? 2 : 2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ),
        )}
        {points.map(
          (point) =>
            point && (
              <circle
                key={point.year}
                cx={point.x}
                cy={point.y}
                r={compact ? 1.8 : 2.25}
                fill="currentColor"
              />
            ),
        )}
      </svg>
    </span>
  );
}
