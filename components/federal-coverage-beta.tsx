'use client';

import { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Focus,
  Info,
  ListTree,
  Network,
  RotateCcw,
  Search,
} from 'lucide-react';
import federalRegisterData from '@/lib/catalog/federal-register-agencies.json';
import federalOverviewData from '@/lib/catalog/federal-government-overview.json';
import { agencies } from '@/lib/catalog/agencies';
import { listedProjects as projects } from '@/lib/catalog/directory';
import type { Agency, Project } from '@/lib/catalog/types';

type SourceAgency = {
  id: string | number;
  name: string;
  shortName: string | null;
  slug: string;
  parentId: string | number | null;
  url: string;
  agencyUrl: string | null;
};
type Snapshot = {
  source: string;
  reviewed: string;
  count: number;
  agencies: SourceAgency[];
};
type OverviewGroup = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  sourceUrl: string;
  principalFederalRegisterIds: number[];
  assignedFederalRegisterIds: number[];
};
type OverviewBody = {
  id: string;
  name: string;
  shortName: string | null;
  groupId: string;
  parentId: string | null;
  description: string;
  sourceUrl: string;
  officialUrl: string | null;
  overview: boolean;
};
type ParentOverride = {
  federalRegisterId: number;
  parent:
    | { source: 'manual-body'; id: string }
    | { source: 'federal-register'; id: number };
  sourceUrl: string;
  note: string;
};
type Overview = {
  reviewed: string;
  source: {
    title: string;
    url: string;
    edition: string;
    editionUrl: string;
  };
  manualBodies: OverviewBody[];
  parentOverrides: ParentOverride[];
  defaultGroupId: string;
  groups: OverviewGroup[];
};
type NodeSource =
  | 'federal-register'
  | 'gosdir'
  | 'government-manual'
  | 'government-manual-body'
  | 'root';
type CoverageMode = 'all' | 'evidence' | 'gaps';
type ExplorerView = 'radial' | 'hierarchy';
type ExplorerNode = {
  id: string;
  name: string;
  shortName?: string;
  slug?: string;
  parentId?: string;
  rawParentId?: string;
  children: string[];
  source: NodeSource;
  sourceUrl?: string;
  officialUrl?: string;
  description?: string;
  overview: boolean;
  sortOrder?: number;
  catalogIds: string[];
  searchText: string;
};
type NodeStats = {
  direct: readonly Project[];
  subtree: readonly Project[];
  descendants: number;
};
type Model = {
  nodes: ReadonlyMap<string, ExplorerNode>;
  stats: ReadonlyMap<string, NodeStats>;
  rootId: string;
  sourceCount: number;
  manualOnly: number;
  supplements: number;
};
type PositionedNode = ExplorerNode & {
  angle: number;
  depth: number;
  radius: number;
  x: number;
  y: number;
};

const snapshot = federalRegisterData as unknown as Snapshot;
const overview = federalOverviewData as unknown as Overview;
const ROOT = 'federal:root';
const SIZE = 820;
const CENTER = SIZE / 2;
const OUTER_RADIUS = 350;
const PUBLIC_INDEX_COUNT = 448;
const collator = new Intl.Collator('en', {
  numeric: true,
  sensitivity: 'base',
});
const slugByCatalogId: Readonly<Record<string, string>> = {
  'us-gsa': 'general-services-administration',
  'us-dod': 'defense-department',
  'us-nasa': 'national-aeronautics-and-space-administration',
  'us-doc': 'commerce-department',
  'us-nist': 'national-institute-of-standards-and-technology',
  'us-doe': 'energy-department',
  'us-va': 'veterans-affairs-department',
  'us-hhs': 'health-and-human-services-department',
  'us-usda': 'agriculture-department',
  'us-dhs': 'homeland-security-department',
  'us-doi': 'interior-department',
  'us-usgs': 'geological-survey',
  'us-doj': 'justice-department',
  'us-dol': 'labor-department',
  'us-ed': 'education-department',
  'us-epa': 'environmental-protection-agency',
  'us-state': 'state-department',
  'us-army': 'army-department',
  'us-air-force': 'air-force-department',
  'us-nsa': 'national-security-agency-central-security-service',
  'us-nga': 'national-geospatial-intelligence-agency',
  'us-army-corps-of-engineers': 'engineers-corps',
};

export function FederalCoverageBeta() {
  const model = useMemo(() => buildModel(), []);
  const [view, setView] = useState<ExplorerView>('radial');
  const [mode, setMode] = useState<CoverageMode>('all');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(model.rootId);
  const [focusId, setFocusId] = useState(model.rootId);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<ReadonlySet<string>>(
    () => new Set([model.rootId]),
  );
  const needle = normalize(query);
  const focusIds = useMemo(
    () => descendantsOf(model.nodes, focusId),
    [focusId, model.nodes],
  );
  const matches = useMemo(
    () =>
      needle
        ? [...model.nodes.values()]
            .filter(
              (node) =>
                node.id !== model.rootId && node.searchText.includes(needle),
            )
            .sort(compareNodes)
        : [],
    [model.nodes, model.rootId, needle],
  );
  const matchIds = new Set(matches.map((node) => node.id));

  const filteredIds = useMemo(() => {
    const result = new Set<string>();
    if (mode === 'all') {
      focusIds.forEach((id) => result.add(id));
    } else if (mode === 'evidence') {
      focusIds.forEach((id) => {
        if ((model.stats.get(id)?.subtree.length ?? 0) > 0) result.add(id);
      });
    } else {
      focusIds.forEach((id) => {
        if ((model.stats.get(id)?.subtree.length ?? 0) === 0) {
          addLineage(result, model.nodes, id, focusId);
        }
      });
    }
    result.add(focusId);
    if (withinBranch(model.nodes, selectedId, focusId)) {
      addLineage(result, model.nodes, selectedId, focusId);
    }
    return result;
  }, [focusId, focusIds, mode, model.nodes, model.stats, selectedId]);

  const treeIds = useMemo(() => {
    if (!needle) return filteredIds;
    const result = new Set<string>([focusId]);
    for (const match of matches) {
      if (filteredIds.has(match.id))
        addLineage(result, model.nodes, match.id, focusId);
    }
    return result;
  }, [filteredIds, focusId, matches, model.nodes, needle]);
  const radialIds = useMemo(() => {
    if (focusId !== model.rootId) {
      const result = visibleThroughDepth(model.nodes, filteredIds, focusId, 2);
      if (withinBranch(model.nodes, selectedId, focusId)) {
        addLineage(result, model.nodes, selectedId, focusId);
      }
      return result;
    }

    const result = new Set<string>([model.rootId]);
    for (const groupId of model.nodes.get(model.rootId)?.children ?? []) {
      if (!filteredIds.has(groupId)) continue;
      result.add(groupId);
      for (const childId of model.nodes.get(groupId)?.children ?? []) {
        const child = model.nodes.get(childId);
        if (child?.overview && filteredIds.has(childId)) result.add(childId);
      }
    }
    if (selectedId !== model.rootId) {
      addLineage(result, model.nodes, selectedId, model.rootId);
    }
    return result;
  }, [filteredIds, focusId, model.nodes, model.rootId, selectedId]);
  const layout = useMemo(
    () => radialLayout(model.nodes, radialIds, focusId),
    [focusId, model.nodes, radialIds],
  );
  const selected =
    model.nodes.get(selectedId) ?? model.nodes.get(model.rootId)!;
  const selectedStats = model.stats.get(selected.id)!;
  const focus = model.nodes.get(focusId)!;
  const focusLineage = lineageOf(model.nodes, focusId);
  const selectedLineage = new Set(
    lineageOf(model.nodes, selected.id).map((node) => node.id),
  );
  const total = model.sourceCount + model.manualOnly + model.supplements;
  const shown = [...radialIds].filter((id) =>
    isAgencyUnit(model.nodes.get(id)),
  ).length;
  const directCount = [...model.stats].filter(
    ([id, stats]) => isAgencyUnit(model.nodes.get(id)) && stats.direct.length,
  ).length;
  const gapCount = [...model.stats].filter(
    ([id, stats]) => isAgencyUnit(model.nodes.get(id)) && !stats.subtree.length,
  ).length;

  const select = (id: string) => {
    if (!withinBranch(model.nodes, id, focusId)) setFocusId(model.rootId);
    setSelectedId(id);
    setExpanded((current) => {
      const next = new Set(current);
      lineageOf(model.nodes, id).forEach((node) => next.add(node.id));
      return next;
    });
  };
  const focusBranch = (id: string) => {
    setFocusId(id);
    setSelectedId(id);
    setExpanded((current) => new Set(current).add(id));
  };
  const resetFocus = () => {
    setFocusId(model.rootId);
    setSelectedId(model.rootId);
  };

  return (
    <div className="page-shell py-8 lg:py-12">
      <div className="mb-7 flex flex-col gap-5 border-b border-line pb-7 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow text-blue">Coverage beta / U.S. federal</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-black leading-[.95] tracking-[-0.055em] text-ink sm:text-5xl">
            Explore the federal hierarchy.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate sm:text-base">
            Start with the branches of Government and their principal bodies,
            then focus a branch or body to reveal the next two levels.
          </p>
        </div>
        <a
          href="/coverage/"
          className="button-secondary shrink-0 justify-center"
        >
          Compare current coverage
          <ChevronRight className="size-4" />
        </a>
      </div>
      <div className="border-l-4 border-signal bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-blue" />
          <div>
            <p className="text-sm font-extrabold text-ink">
              Branch-first overview, complete publisher roster
            </p>
            <p className="mt-1 max-w-4xl text-xs leading-5 text-slate sm:text-sm sm:leading-6">
              The opening radial view uses the U.S. Government Manual to show
              the Executive, Legislative, and Judicial branches and their
              principal bodies, plus a separate Other group for quasi-official,
              cross-branch, and historical publishers. Manual-only bodies such
              as the Senate, Supreme Court, and Federal Judicial Center fill
              gaps in the complete {model.sourceCount}-record Federal Register
              API roster. Every unit remains globally searchable and available
              in the hierarchy. The public index separately reports{' '}
              {PUBLIC_INDEX_COUNT} “agencies found.”
            </p>
          </div>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-2 border border-line bg-white sm:grid-cols-4">
        <Summary
          label="API records"
          value={model.sourceCount}
          note={
            model.sourceCount === snapshot.count
              ? 'complete snapshot'
              : `of ${snapshot.count} expected`
          }
        />
        <Summary
          label="Beyond FR roster"
          value={model.manualOnly + model.supplements}
          note={`${model.manualOnly} Manual-only · ${model.supplements} GOSDIR-only`}
        />
        <Summary
          label="Direct evidence"
          value={directCount}
          note="units with records here"
        />
        <Summary
          label="Open subtrees"
          value={gapCount}
          note="no evidence below"
        />
      </dl>

      <div className="mt-5 border border-line bg-white p-4 sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[minmax(260px,1fr)_auto_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search all federal bodies</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-blue" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && matches[0]) {
                  event.preventDefault();
                  select(matches[0].id);
                }
              }}
              placeholder="Search any agency, office, court, abbreviation…"
              className="min-h-12 w-full border border-line bg-paper py-3 pl-11 pr-4 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/10"
            />
          </label>
          <div
            className="grid grid-cols-3 gap-1 rounded-lg border border-line bg-paper p-1"
            aria-label="Coverage filter"
          >
            <Toggle active={mode === 'all'} onClick={() => setMode('all')}>
              All
            </Toggle>
            <Toggle
              active={mode === 'evidence'}
              onClick={() => setMode('evidence')}
            >
              Evidence paths
            </Toggle>
            <Toggle active={mode === 'gaps'} onClick={() => setMode('gaps')}>
              Gaps
            </Toggle>
          </div>
          <div
            className="grid grid-cols-2 gap-1 rounded-lg border border-line bg-paper p-1"
            aria-label="Explorer view"
          >
            <Toggle
              active={view === 'radial'}
              onClick={() => setView('radial')}
              icon={<Network />}
            >
              Radial
            </Toggle>
            <Toggle
              active={view === 'hierarchy'}
              onClick={() => setView('hierarchy')}
              icon={<ListTree />}
            >
              Hierarchy
            </Toggle>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 font-mono text-[10px] font-bold uppercase tracking-[.1em] text-slate">
          <p aria-live="polite">
            {needle
              ? `${matches.length} matching units`
              : `${shown} of ${total} units in radial view`}
          </p>
          <p>
            Roster {snapshot.reviewed} · hierarchy {overview.reviewed} / Manual{' '}
            {overview.source.edition}
          </p>
        </div>
        {needle && (
          <div className="mt-4 border-t border-line pt-4">
            {matches.length ? (
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Agency search results"
              >
                {matches.slice(0, 12).map((node) => (
                  <li key={node.id}>
                    <button
                      type="button"
                      onClick={() => select(node.id)}
                      className={`border px-3 py-2 text-left text-xs font-bold ${selectedId === node.id ? 'border-blue bg-blue text-white' : 'border-line bg-paper text-ink hover:border-blue hover:text-blue'}`}
                    >
                      {node.shortName ? `${node.shortName} — ` : ''}
                      {node.name}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate">No units match this search.</p>
            )}
            {matches.length > 12 && (
              <p className="mt-3 text-xs text-slate">
                Showing the first 12 matches. Refine the search to narrow the
                list.
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-5 grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <section
          className="min-w-0 border border-line bg-ink text-white"
          aria-label="Federal hierarchy explorer"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/15 p-5 sm:p-6">
            <div>
              <p className="eyebrow text-signal">Focused hierarchy</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                {focus.name}
              </h2>
              <nav
                className="mt-3 flex flex-wrap items-center gap-1 text-xs text-white/60"
                aria-label="Focused branch breadcrumb"
              >
                {focusLineage.map((node, index) => (
                  <span key={node.id} className="flex items-center gap-1">
                    {index > 0 && <ChevronRight className="size-3" />}
                    <button
                      type="button"
                      onClick={() => focusBranch(node.id)}
                      className="hover:text-white"
                      aria-current={
                        node.id === focusId ? 'location' : undefined
                      }
                    >
                      {node.shortName ?? node.name}
                    </button>
                  </span>
                ))}
              </nav>
            </div>
            {focusId !== model.rootId && (
              <button
                type="button"
                onClick={resetFocus}
                className="inline-flex min-h-10 items-center gap-2 border border-white/25 px-3 text-xs font-bold hover:border-signal hover:text-signal"
              >
                <RotateCcw className="size-4" /> Entire map
              </button>
            )}
          </div>
          {view === 'radial' ? (
            <RadialMap
              layout={layout}
              stats={model.stats}
              selectedId={selected.id}
              selectedLineage={selectedLineage}
              hoveredId={hoveredId}
              matchIds={matchIds}
              focusId={focusId}
              onHover={setHoveredId}
              onSelect={select}
            />
          ) : (
            <div className="max-h-[720px] overflow-auto p-3 sm:p-5">
              <p className="mb-4 text-xs leading-5 text-white/55">
                Expand branches to inspect published structure. Selecting a name
                updates the detail panel.
              </p>
              <ul className="grid gap-1" aria-label="Federal agency hierarchy">
                <TreeBranch
                  nodeId={focusId}
                  nodes={model.nodes}
                  stats={model.stats}
                  visibleIds={treeIds}
                  selectedId={selected.id}
                  expanded={expanded}
                  searchActive={Boolean(needle)}
                  onSelect={select}
                  onToggle={(id) =>
                    setExpanded((current) => {
                      const next = new Set(current);
                      if (next.has(id)) next.delete(id);
                      else next.add(id);
                      return next;
                    })
                  }
                />
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 px-5 py-4 font-mono text-[9px] font-bold uppercase tracking-[.1em] text-white/60 sm:px-6">
            <Legend kind="group">Government group</Legend>
            <Legend kind="direct">Evidence here</Legend>
            <Legend kind="descendant">Evidence below</Legend>
            <Legend kind="gap">No evidence in subtree</Legend>
          </div>
        </section>
        <Details
          node={selected}
          stats={selectedStats}
          nodes={model.nodes}
          rootId={model.rootId}
          isFocused={selected.id === focusId}
          onSelect={select}
          onFocus={() => focusBranch(selected.id)}
          onReset={resetFocus}
        />
      </div>
    </div>
  );
}

function Summary({
  label,
  value,
  note,
}: {
  label: string;
  value: number;
  note: string;
}) {
  return (
    <div className="border-b border-line p-4 odd:border-r sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-5">
      <dt className="eyebrow text-slate">{label}</dt>
      <dd className="mt-2 font-display text-3xl font-black tracking-tight text-ink">
        {value}
      </dd>
      <dd className="mt-1 text-[11px] leading-4 text-slate">{note}</dd>
    </div>
  );
}

function Toggle({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex min-h-10 items-center justify-center gap-2 px-3 text-[11px] font-extrabold transition-colors [&_svg]:size-4 ${active ? 'bg-ink text-white' : 'text-slate hover:bg-white hover:text-ink'}`}
    >
      {icon}
      {children}
    </button>
  );
}

function RadialMap({
  layout,
  stats,
  selectedId,
  selectedLineage,
  hoveredId,
  matchIds,
  focusId,
  onHover,
  onSelect,
}: {
  layout: readonly PositionedNode[];
  stats: ReadonlyMap<string, NodeStats>;
  selectedId: string;
  selectedLineage: ReadonlySet<string>;
  hoveredId: string | null;
  matchIds: ReadonlySet<string>;
  focusId: string;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}) {
  const byId = new Map(layout.map((node) => [node.id, node]));
  const labels = new Set<string>([selectedId, focusId]);
  for (const node of layout) {
    const visibleChildren = node.children.filter((id) => byId.has(id));
    if (
      selectedLineage.has(node.id) ||
      matchIds.has(node.id) ||
      (stats.get(node.id)?.direct.length ?? 0) > 0 ||
      (node.depth <= 1 && visibleChildren.length > 0)
    )
      labels.add(node.id);
  }
  if (hoveredId) labels.add(hoveredId);
  return (
    <div className="relative min-h-[430px] overflow-hidden sm:min-h-[620px]">
      <p className="sr-only">
        The radial chart is a visual overview. Use the searchable hierarchy view
        for a fully keyboard-accessible list.
      </p>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="mx-auto block aspect-square w-full max-w-[820px]"
        aria-hidden="true"
        focusable="false"
      >
        <title>
          Federal Register publishing-unit hierarchy and GOSDIR evidence
        </title>
        <desc>
          The opening view shows Government branches and principal bodies.
          Focusing a node reveals its next two hierarchy levels. Marker shape
          distinguishes hierarchy groups, direct evidence, descendant evidence,
          and research gaps.
        </desc>
        <g aria-hidden="true">
          {[0.25, 0.5, 0.75, 1].map((part) => (
            <circle
              key={part}
              cx={CENTER}
              cy={CENTER}
              r={OUTER_RADIUS * part}
              fill="none"
              stroke="rgba(255,255,255,.07)"
            />
          ))}
          {layout.map((node) => {
            const parent = node.parentId ? byId.get(node.parentId) : undefined;
            if (!parent) return null;
            const active =
              selectedLineage.has(node.id) && selectedLineage.has(parent.id);
            const evidence = (stats.get(node.id)?.subtree.length ?? 0) > 0;
            return (
              <path
                key={`${parent.id}:${node.id}`}
                d={linkPath(parent, node)}
                fill="none"
                stroke={active ? '#165dff' : evidence ? '#b8f245' : '#fff'}
                strokeOpacity={active ? 0.95 : evidence ? 0.35 : 0.13}
                strokeWidth={active ? 2.25 : evidence ? 1.25 : 0.8}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </g>
        <g>
          {layout.map((node) => {
            const nodeStats = stats.get(node.id)!;
            const state = coverageState(nodeStats);
            const selected = node.id === selectedId;
            const matched = matchIds.has(node.id);
            const onRight = Math.cos(node.angle) >= 0;
            const offset = node.id === focusId ? 0 : 9;
            return (
              <g
                key={node.id}
                onMouseEnter={() => onHover(node.id)}
                onMouseLeave={() => onHover(null)}
                onClick={() => onSelect(node.id)}
                className="cursor-pointer"
              >
                <title>{`${node.name}: ${coverageLabel(nodeStats)}`}</title>
                <circle cx={node.x} cy={node.y} r="11" fill="transparent" />
                {(selected || matched) && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={selected ? 9 : 8}
                    fill="none"
                    stroke={selected ? '#fff' : '#165dff'}
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                )}
                <NodeMark
                  x={node.x}
                  y={node.y}
                  state={node.id === focusId ? 'direct' : state}
                  root={node.id === focusId}
                  group={node.source === 'government-manual'}
                />
                {labels.has(node.id) && (
                  <text
                    x={svgNumber(node.x + Math.cos(node.angle) * offset)}
                    y={svgNumber(node.y + Math.sin(node.angle) * offset)}
                    dx={node.id === focusId ? 0 : onRight ? 4 : -4}
                    dy={node.id === focusId ? 19 : 3}
                    textAnchor={
                      node.id === focusId ? 'middle' : onRight ? 'start' : 'end'
                    }
                    fill={
                      selected || matched ? '#fff' : 'rgba(255,255,255,.74)'
                    }
                    fontSize={node.id === focusId ? 11 : 8.5}
                    fontWeight={selected || matched ? 800 : 650}
                    className="pointer-events-none select-none"
                    style={{
                      paintOrder: 'stroke',
                      stroke: '#111b34',
                      strokeWidth: 3,
                    }}
                  >
                    {truncate(
                      node.shortName ?? node.name,
                      node.id === focusId ? 28 : 23,
                    )}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>
      <p className="absolute bottom-3 left-4 right-4 text-center font-mono text-[9px] font-bold uppercase tracking-[.1em] text-white/35">
        Select a node for details · focus to reveal its next two levels
      </p>
    </div>
  );
}

function NodeMark({
  x,
  y,
  state,
  root,
  group,
}: {
  x: number;
  y: number;
  state: ReturnType<typeof coverageState>;
  root: boolean;
  group: boolean;
}) {
  if (root)
    return (
      <rect
        x={x - 6}
        y={y - 6}
        width="12"
        height="12"
        rx="2"
        fill="#b8f245"
        stroke="#111b34"
        strokeWidth="2"
      />
    );
  if (group)
    return (
      <rect
        x={x - 4.5}
        y={y - 4.5}
        width="9"
        height="9"
        rx="1.5"
        fill="#4f8aff"
        stroke="#fff"
        strokeWidth="1.25"
      />
    );
  if (state === 'direct')
    return (
      <circle
        cx={x}
        cy={y}
        r="4.5"
        fill="#b8f245"
        stroke="#111b34"
        strokeWidth="1.5"
      />
    );
  if (state === 'descendant')
    return (
      <circle
        cx={x}
        cy={y}
        r="4.25"
        fill="#111b34"
        stroke="#4f8aff"
        strokeWidth="2.25"
      />
    );
  return <circle cx={x} cy={y} r="2.5" fill="rgba(255,255,255,.7)" />;
}

function TreeBranch({
  nodeId,
  nodes,
  stats,
  visibleIds,
  selectedId,
  expanded,
  searchActive,
  onSelect,
  onToggle,
}: {
  nodeId: string;
  nodes: ReadonlyMap<string, ExplorerNode>;
  stats: ReadonlyMap<string, NodeStats>;
  visibleIds: ReadonlySet<string>;
  selectedId: string;
  expanded: ReadonlySet<string>;
  searchActive: boolean;
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
}) {
  const node = nodes.get(nodeId);
  if (!node || !visibleIds.has(nodeId)) return null;
  const children = node.children.filter((id) => visibleIds.has(id));
  const open = searchActive || expanded.has(node.id);
  const nodeStats = stats.get(node.id)!;
  const childListId = `children-${safeId(node.id)}`;
  return (
    <li>
      <div
        className={`grid min-h-11 grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-1 border px-1 py-1 ${selectedId === node.id ? 'border-blue bg-blue text-white' : 'border-white/10 bg-white/[.035] text-white hover:border-white/30'}`}
      >
        {children.length ? (
          <button
            type="button"
            onClick={() => onToggle(node.id)}
            aria-expanded={open}
            aria-controls={childListId}
            aria-label={`${open ? 'Collapse' : 'Expand'} children of ${node.name}`}
            className="grid size-9 place-items-center text-current/70 hover:text-current"
          >
            {open ? (
              <ChevronDown className="size-4" />
            ) : (
              <ChevronRight className="size-4" />
            )}
          </button>
        ) : (
          <span className="grid size-9 place-items-center">
            <SmallMark state={coverageState(nodeStats)} />
          </span>
        )}
        <button
          type="button"
          onClick={() => onSelect(node.id)}
          aria-current={selectedId === node.id ? 'true' : undefined}
          className="min-w-0 py-2 text-left"
        >
          <span className="block truncate text-xs font-extrabold">
            {node.shortName ? `${node.shortName} — ` : ''}
            {node.name}
          </span>
          <span className="mt-0.5 block font-mono text-[9px] font-bold uppercase tracking-[.08em] text-current/55">
            {sourceLabel(node.source)}
          </span>
        </button>
        <span className="mr-2 whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[.08em] text-current/60">
          {nodeStats.direct.length
            ? `${nodeStats.direct.length} direct`
            : nodeStats.subtree.length
              ? `${nodeStats.subtree.length} below`
              : 'gap'}
        </span>
      </div>
      {open && children.length > 0 && (
        <ul
          id={childListId}
          className="ml-4 grid gap-1 border-l border-white/15 py-1 pl-2 sm:ml-6 sm:pl-3"
        >
          {children.map((id) => (
            <TreeBranch
              key={id}
              nodeId={id}
              nodes={nodes}
              stats={stats}
              visibleIds={visibleIds}
              selectedId={selectedId}
              expanded={expanded}
              searchActive={searchActive}
              onSelect={onSelect}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function SmallMark({ state }: { state: ReturnType<typeof coverageState> }) {
  if (state === 'direct')
    return <i className="size-2.5 rounded-full bg-signal" />;
  if (state === 'descendant')
    return <i className="size-2.5 rounded-full border-2 border-blue" />;
  return <i className="size-1.5 rounded-full bg-white/45" />;
}

function Details({
  node,
  stats,
  nodes,
  rootId,
  isFocused,
  onSelect,
  onFocus,
  onReset,
}: {
  node: ExplorerNode;
  stats: NodeStats;
  nodes: ReadonlyMap<string, ExplorerNode>;
  rootId: string;
  isFocused: boolean;
  onSelect: (id: string) => void;
  onFocus: () => void;
  onReset: () => void;
}) {
  const lineage = lineageOf(nodes, node.id);
  const state = coverageState(stats);
  const directIds = new Set(stats.direct.map((project) => project.id));
  const descendantProjects = stats.subtree.filter(
    (project) => !directIds.has(project.id),
  );
  return (
    <aside
      className="border border-line bg-white p-5 sm:p-7 xl:sticky xl:top-[94px]"
      aria-label="Selected unit details"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="eyebrow text-blue">Selected unit</p>
        <span className="border border-line bg-paper px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[.08em] text-slate">
          {sourceLabel(node.source)}
        </span>
      </div>
      <h2 className="mt-3 font-display text-2xl font-black leading-tight tracking-[-0.035em] text-ink sm:text-3xl">
        {node.name}
      </h2>
      {node.shortName && node.shortName !== node.name && (
        <p className="mt-2 font-mono text-[11px] font-bold uppercase tracking-[.1em] text-slate">
          {node.shortName}
        </p>
      )}
      {node.description && (
        <p className="mt-4 text-sm leading-6 text-slate">{node.description}</p>
      )}
      {lineage.length > 1 && (
        <nav
          className="mt-4 flex flex-wrap items-center gap-1 text-[11px] leading-5 text-slate"
          aria-label="Selected unit ancestry"
        >
          {lineage.map((ancestor, index) => (
            <span key={ancestor.id} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="size-3" />}
              <button
                type="button"
                onClick={() => onSelect(ancestor.id)}
                className="font-bold hover:text-blue"
                aria-current={ancestor.id === node.id ? 'location' : undefined}
              >
                {ancestor.shortName ?? ancestor.name}
              </button>
            </span>
          ))}
        </nav>
      )}
      <dl className="mt-6 grid grid-cols-3 border-y border-line py-5">
        <Metric label="Direct" value={stats.direct.length} />
        <Metric label="Subtree" value={stats.subtree.length} />
        <Metric label="Descendants" value={stats.descendants} />
      </dl>
      <div
        className={`mt-5 border-l-4 p-4 ${state === 'direct' ? 'border-signal bg-signal/15' : state === 'descendant' ? 'border-blue bg-blue/5' : 'border-line bg-paper'}`}
      >
        <p className="text-xs font-extrabold text-ink">
          {coverageLabel(stats)}
        </p>
        <p className="mt-1 text-[11px] leading-5 text-slate">
          {state === 'direct'
            ? 'At least one verified project explicitly names this unit.'
            : state === 'descendant'
              ? 'Projects occur below this unit; they are not counted as direct evidence here.'
              : 'No verified project is attached here or anywhere below it.'}
        </p>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
        {node.id !== rootId && node.children.length > 0 && !isFocused && (
          <button
            type="button"
            onClick={onFocus}
            className="button-primary justify-center"
          >
            <Focus className="size-4" /> Focus branch
          </button>
        )}
        {isFocused && node.id !== rootId && (
          <button
            type="button"
            onClick={onReset}
            className="button-secondary justify-center"
          >
            <RotateCcw className="size-4" /> Entire map
          </button>
        )}
        {node.sourceUrl && (
          <a
            href={node.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary justify-center"
          >
            Source profile <ExternalLink className="size-4" />
          </a>
        )}
        {node.officialUrl && node.officialUrl !== node.sourceUrl && (
          <a
            href={node.officialUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary justify-center"
          >
            Official site <ExternalLink className="size-4" />
          </a>
        )}
      </div>
      {stats.direct.length > 0 && (
        <ProjectList title="Direct project evidence" items={stats.direct} />
      )}
      {descendantProjects.length > 0 && (
        <ProjectList
          title="Project evidence below this unit"
          items={descendantProjects}
        />
      )}
      {!stats.subtree.length && node.id !== rootId && (
        <div className="mt-7 text-center">
          <p className="text-sm font-bold text-ink">
            Help research this branch
          </p>
          <p className="mt-1 text-xs leading-5 text-slate">
            Suggest a government open source project backed by public evidence.
          </p>
          <a
            href="/contribute/"
            className="button-secondary mt-4 justify-center"
          >
            Suggest a record
          </a>
        </div>
      )}
    </aside>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="border-r border-line px-2 text-center last:border-r-0">
      <dt className="font-mono text-[9px] font-bold uppercase tracking-[.1em] text-slate">
        {label}
      </dt>
      <dd className="mt-1 font-display text-2xl font-black text-ink">
        {value}
      </dd>
    </div>
  );
}

function ProjectList({
  title,
  items,
}: {
  title: string;
  items: readonly Project[];
}) {
  return (
    <div className="mt-7">
      <p className="eyebrow text-slate">{title}</p>
      <div className="mt-3 grid gap-2">
        {items.map((project) => (
          <a
            key={project.id}
            href={`/directory/?project=${project.id}`}
            className="group border border-line p-3 hover:border-blue"
          >
            <span className="eyebrow text-blue">{project.domain}</span>
            <strong className="mt-1 block text-sm text-ink group-hover:text-blue">
              {project.name}
            </strong>
            <span className="mt-1 block text-[11px] leading-4 text-slate">
              {project.sponsor}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function Legend({
  kind,
  children,
}: {
  kind: 'group' | 'direct' | 'descendant' | 'gap';
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      {kind === 'group' ? (
        <i className="size-2.5 rounded-[2px] border border-white bg-blue" />
      ) : kind === 'direct' ? (
        <i className="size-2.5 rounded-full bg-signal" />
      ) : kind === 'descendant' ? (
        <i className="size-2.5 rounded-full border-2 border-blue" />
      ) : (
        <i className="size-1.5 rounded-full bg-white/60" />
      )}
      {children}
    </span>
  );
}

function buildModel(): Model {
  const nodes = new Map<string, ExplorerNode>();
  const localAgencies = agencies.filter(
    (agency) => agency.jurisdiction === 'U.S. federal',
  );
  nodes.set(ROOT, {
    id: ROOT,
    name: 'United States Federal Government',
    shortName: 'Federal Government',
    children: [],
    source: 'root',
    sourceUrl: overview.source.url,
    description:
      'A branch-first view of Government Manual bodies, the complete Federal Register publishing-unit roster, and GOSDIR supplements.',
    overview: true,
    catalogIds: [],
    searchText:
      'united states federal government federal register agency roster',
  });

  const groupIdByKey = new Map<string, string>();
  overview.groups.forEach((group, index) => {
    const id = `federal:group:${group.id}`;
    if (groupIdByKey.has(group.id)) {
      throw new Error(`Duplicate federal overview group: ${group.id}`);
    }
    groupIdByKey.set(group.id, id);
    nodes.set(id, {
      id,
      name: group.name,
      shortName: group.shortName,
      parentId: ROOT,
      children: [],
      source: 'government-manual',
      sourceUrl: group.sourceUrl,
      description: group.description,
      overview: true,
      sortOrder: index,
      catalogIds: [],
      searchText: normalize(
        `${group.name} ${group.shortName} ${group.description}`,
      ),
    });
  });
  const defaultGroupNodeId = groupIdByKey.get(overview.defaultGroupId);
  if (!defaultGroupNodeId) {
    throw new Error(
      `Unknown default federal overview group: ${overview.defaultGroupId}`,
    );
  }

  const manualBodyIdByKey = new Map<string, string>();
  for (const body of overview.manualBodies) {
    if (manualBodyIdByKey.has(body.id)) {
      throw new Error(`Duplicate Government Manual body: ${body.id}`);
    }
    if (!groupIdByKey.has(body.groupId)) {
      throw new Error(
        `Government Manual body ${body.id} has unknown group ${body.groupId}`,
      );
    }
    manualBodyIdByKey.set(body.id, `manual:${body.id}`);
  }
  for (const body of overview.manualBodies) {
    const id = manualBodyIdByKey.get(body.id)!;
    const parentId = body.parentId
      ? manualBodyIdByKey.get(body.parentId)
      : groupIdByKey.get(body.groupId);
    if (!parentId) {
      throw new Error(
        `Government Manual body ${body.id} has unknown parent ${body.parentId}`,
      );
    }
    if (body.parentId) {
      const parentBody = overview.manualBodies.find(
        (candidate) => candidate.id === body.parentId,
      );
      if (parentBody?.groupId !== body.groupId) {
        throw new Error(
          `Government Manual body ${body.id} crosses overview groups`,
        );
      }
    }
    nodes.set(id, {
      id,
      name: body.name,
      shortName: body.shortName || undefined,
      parentId,
      children: [],
      source: 'government-manual-body',
      sourceUrl: body.sourceUrl,
      officialUrl: body.officialUrl || undefined,
      description: body.description,
      overview: body.overview,
      catalogIds: [],
      searchText: normalize(
        `${body.name} ${body.shortName ?? ''} ${body.description}`,
      ),
    });
  }

  const rootSourceIds = new Set(
    snapshot.agencies
      .filter(
        (agency) => agency.parentId === null || agency.parentId === undefined,
      )
      .map((agency) => Number(agency.id)),
  );
  const groupBySourceId = new Map<number, string>();
  const principalSourceIds = new Set<number>();
  for (const group of overview.groups) {
    const groupNodeId = groupIdByKey.get(group.id)!;
    const assignments = new Set(group.assignedFederalRegisterIds);
    for (const sourceId of group.principalFederalRegisterIds) {
      if (!assignments.has(sourceId)) {
        throw new Error(
          `Principal Federal Register ID ${sourceId} is not assigned to ${group.id}`,
        );
      }
      principalSourceIds.add(sourceId);
    }
    for (const sourceId of assignments) {
      if (!rootSourceIds.has(sourceId)) {
        throw new Error(
          `Federal overview ID ${sourceId} is not a top-level publisher`,
        );
      }
      const existing = groupBySourceId.get(sourceId);
      if (existing) {
        throw new Error(
          `Federal Register ID ${sourceId} is assigned to both ${existing} and ${group.id}`,
        );
      }
      groupBySourceId.set(sourceId, groupNodeId);
    }
  }
  for (const sourceId of rootSourceIds) {
    if (!groupBySourceId.has(sourceId)) {
      throw new Error(
        `Top-level Federal Register ID ${sourceId} needs a reviewed branch assignment`,
      );
    }
  }

  const nodeIdBySourceId = new Map<string, string>();
  snapshot.agencies.forEach((agency) =>
    nodeIdBySourceId.set(String(agency.id), `fr:${agency.id}`),
  );
  const presentationParentBySourceId = new Map<number, string>();
  for (const override of overview.parentOverrides) {
    const sourceId = override.federalRegisterId;
    if (!rootSourceIds.has(sourceId)) {
      throw new Error(
        `Presentation-parent override ${sourceId} is not a top-level Federal Register publisher`,
      );
    }
    if (presentationParentBySourceId.has(sourceId)) {
      throw new Error(
        `Duplicate presentation-parent override for Federal Register ID ${sourceId}`,
      );
    }
    const parentId =
      override.parent.source === 'manual-body'
        ? manualBodyIdByKey.get(override.parent.id)
        : nodeIdBySourceId.get(String(override.parent.id));
    if (!parentId || parentId === nodeIdBySourceId.get(String(sourceId))) {
      throw new Error(
        `Presentation-parent override ${sourceId} has an invalid parent`,
      );
    }
    const sourceGroupId = groupBySourceId.get(sourceId);
    const parentGroupId =
      override.parent.source === 'manual-body'
        ? groupIdByKey.get(
            overview.manualBodies.find((body) => body.id === override.parent.id)
              ?.groupId ?? '',
          )
        : groupBySourceId.get(override.parent.id);
    if (sourceGroupId !== parentGroupId) {
      throw new Error(
        `Presentation-parent override ${sourceId} crosses overview groups`,
      );
    }
    presentationParentBySourceId.set(sourceId, parentId);
  }
  for (const agency of snapshot.agencies) {
    const id = nodeIdBySourceId.get(String(agency.id))!;
    const sourceId = Number(agency.id);
    const isRoot = agency.parentId === null || agency.parentId === undefined;
    const rawParentId = isRoot
      ? undefined
      : nodeIdBySourceId.get(String(agency.parentId));
    const parentId =
      presentationParentBySourceId.get(sourceId) ??
      (isRoot ? groupBySourceId.get(sourceId) : rawParentId);
    if (!parentId) {
      throw new Error(
        `Federal Register ID ${sourceId} has no resolvable hierarchy parent`,
      );
    }
    nodes.set(id, {
      id,
      name: agency.name,
      shortName: agency.shortName || undefined,
      slug: agency.slug,
      parentId,
      rawParentId,
      children: [],
      source: 'federal-register',
      sourceUrl: agency.url || undefined,
      officialUrl: agency.agencyUrl || undefined,
      overview: principalSourceIds.has(sourceId),
      catalogIds: [],
      searchText: normalize(
        `${agency.name} ${agency.shortName ?? ''} ${agency.slug}`,
      ),
    });
  }

  const bySlug = new Map(
    [...nodes.values()]
      .filter((node) => node.source === 'federal-register' && node.slug)
      .map((node) => [node.slug!, node]),
  );
  const byName = new Map<string, ExplorerNode[]>();
  for (const node of nodes.values()) {
    if (node.source !== 'federal-register') continue;
    for (const key of [
      nameKey(node.name),
      node.shortName ? nameKey(node.shortName) : '',
    ]) {
      if (!key) continue;
      const values = byName.get(key) ?? [];
      values.push(node);
      byName.set(key, values);
    }
  }

  const nodeIdByCatalogId = new Map<string, string>();
  const unmatched: Agency[] = [];
  for (const agency of localAgencies) {
    const explicitSlug = slugByCatalogId[agency.id];
    let match = explicitSlug ? bySlug.get(explicitSlug) : undefined;
    if (!match) {
      const keys = [agency.name, agency.abbreviation, ...(agency.aliases ?? [])]
        .filter((value): value is string => Boolean(value))
        .map(nameKey);
      match = keys.flatMap((key) => byName.get(key) ?? []).find(Boolean);
    }
    if (match) {
      match.catalogIds.push(agency.id);
      match.searchText = normalize(
        `${match.searchText} ${agency.name} ${agency.abbreviation ?? ''} ${(agency.aliases ?? []).join(' ')}`,
      );
      nodeIdByCatalogId.set(agency.id, match.id);
    } else {
      unmatched.push(agency);
      nodeIdByCatalogId.set(agency.id, `gosdir:${agency.id}`);
    }
  }

  for (const agency of unmatched) {
    const id = nodeIdByCatalogId.get(agency.id)!;
    const parentId = agency.parentAgencyId
      ? nodeIdByCatalogId.get(agency.parentAgencyId)
      : undefined;
    nodes.set(id, {
      id,
      name: agency.name,
      shortName: agency.abbreviation,
      parentId: parentId && parentId !== id ? parentId : defaultGroupNodeId,
      children: [],
      source: 'gosdir',
      officialUrl: agency.officialUrl,
      overview: false,
      catalogIds: [agency.id],
      searchText: normalize(
        `${agency.name} ${agency.abbreviation ?? ''} ${(agency.aliases ?? []).join(' ')}`,
      ),
    });
  }

  for (const node of nodes.values()) {
    if (node.id === ROOT) continue;
    if (
      !node.parentId ||
      !nodes.has(node.parentId) ||
      createsCycle(nodes, node.id, node.parentId)
    ) {
      throw new Error(`Invalid federal hierarchy parent for ${node.id}`);
    }
  }
  for (const node of nodes.values()) node.children = [];
  for (const node of nodes.values()) {
    if (node.parentId) nodes.get(node.parentId)?.children.push(node.id);
  }
  for (const node of nodes.values()) {
    node.children.sort((left, right) =>
      compareNodes(nodes.get(left)!, nodes.get(right)!),
    );
  }

  const directByNode = new Map<string, Project[]>();
  for (const node of nodes.values()) {
    const catalogIds = new Set(node.catalogIds);
    directByNode.set(
      node.id,
      catalogIds.size
        ? projects.filter((project) =>
            project.agencyIds.some((id) => catalogIds.has(id)),
          )
        : [],
    );
  }

  const stats = new Map<string, NodeStats>();
  const calculate = (id: string, trail = new Set<string>()): NodeStats => {
    const existing = stats.get(id);
    if (existing) return existing;
    if (trail.has(id)) return { direct: [], subtree: [], descendants: 0 };
    const nextTrail = new Set(trail).add(id);
    const direct = directByNode.get(id) ?? [];
    const subtree = new Map(direct.map((project) => [project.id, project]));
    let descendants = 0;
    for (const childId of nodes.get(id)?.children ?? []) {
      const childStats = calculate(childId, nextTrail);
      descendants +=
        childStats.descendants + (isAgencyUnit(nodes.get(childId)) ? 1 : 0);
      childStats.subtree.forEach((project) => subtree.set(project.id, project));
    }
    const result = {
      direct: [...direct].sort(compareProjects),
      subtree: [...subtree.values()].sort(compareProjects),
      descendants,
    };
    stats.set(id, result);
    return result;
  };
  calculate(ROOT);
  return {
    nodes,
    stats,
    rootId: ROOT,
    sourceCount: snapshot.agencies.length,
    manualOnly: overview.manualBodies.length,
    supplements: unmatched.length,
  };
}

function radialLayout(
  nodes: ReadonlyMap<string, ExplorerNode>,
  visible: ReadonlySet<string>,
  rootId: string,
) {
  const depths = new Map<string, number>();
  let maxDepth = 0;
  const visitDepth = (id: string, depth: number, seen: ReadonlySet<string>) => {
    if (seen.has(id) || !visible.has(id)) return;
    depths.set(id, depth);
    maxDepth = Math.max(maxDepth, depth);
    const next = new Set(seen).add(id);
    nodes
      .get(id)
      ?.children.forEach((child) => visitDepth(child, depth + 1, next));
  };
  visitDepth(rootId, 0, new Set());

  const weights = new Map<string, number>();
  const weightOf = (id: string, seen: ReadonlySet<string>): number => {
    const cached = weights.get(id);
    if (cached) return cached;
    if (seen.has(id)) return 1;
    const next = new Set(seen).add(id);
    const children = (nodes.get(id)?.children ?? []).filter((child) =>
      visible.has(child),
    );
    const weight = children.length
      ? children.reduce((sum, child) => sum + weightOf(child, next), 0)
      : 1;
    weights.set(id, weight);
    return weight;
  };
  weightOf(rootId, new Set());

  const result: PositionedNode[] = [];
  const place = (
    id: string,
    start: number,
    end: number,
    seen: ReadonlySet<string>,
  ) => {
    if (seen.has(id) || !visible.has(id)) return;
    const node = nodes.get(id);
    if (!node) return;
    const depth = depths.get(id) ?? 0;
    const angle = svgNumber((start + end) / 2, 10);
    const children = node.children.filter((child) => visible.has(child));
    // A dendrogram places every leaf on the circumference. Without this,
    // hundreds of standalone publishers would collide at the first depth ring.
    const radius = depth
      ? children.length
        ? (depth / Math.max(1, maxDepth)) * OUTER_RADIUS
        : OUTER_RADIUS
      : 0;
    result.push({
      ...node,
      angle,
      depth,
      radius,
      x: svgNumber(CENTER + Math.cos(angle) * radius),
      y: svgNumber(CENTER + Math.sin(angle) * radius),
    });
    const balancedOverviewSectors =
      node.source === 'root' &&
      children.every(
        (child) => nodes.get(child)?.source === 'government-manual',
      );
    const sectorWeight = (child: string) =>
      balancedOverviewSectors
        ? Math.sqrt(weights.get(child) ?? 1)
        : (weights.get(child) ?? 1);
    const total = children.reduce((sum, child) => sum + sectorWeight(child), 0);
    let cursor = start;
    const next = new Set(seen).add(id);
    for (const child of children) {
      const childWeight = sectorWeight(child);
      const span = (end - start) * (childWeight / Math.max(1, total));
      place(child, cursor, cursor + span, next);
      cursor += span;
    }
  };
  place(rootId, -Math.PI / 2, Math.PI * 1.5, new Set());
  return result;
}

function linkPath(source: PositionedNode, target: PositionedNode) {
  const radius = (source.radius + target.radius) / 2;
  const first = polar(source.angle, radius);
  const second = polar(target.angle, radius);
  return `M ${source.x.toFixed(2)} ${source.y.toFixed(2)} C ${first.x.toFixed(2)} ${first.y.toFixed(2)}, ${second.x.toFixed(2)} ${second.y.toFixed(2)}, ${target.x.toFixed(2)} ${target.y.toFixed(2)}`;
}

function polar(angle: number, radius: number) {
  return {
    x: CENTER + Math.cos(angle) * radius,
    y: CENTER + Math.sin(angle) * radius,
  };
}

function descendantsOf(
  nodes: ReadonlyMap<string, ExplorerNode>,
  rootId: string,
) {
  const result = new Set<string>();
  const visit = (id: string) => {
    if (result.has(id)) return;
    result.add(id);
    nodes.get(id)?.children.forEach(visit);
  };
  visit(rootId);
  return result;
}

function visibleThroughDepth(
  nodes: ReadonlyMap<string, ExplorerNode>,
  eligible: ReadonlySet<string>,
  rootId: string,
  maxDepth: number,
) {
  const result = new Set<string>();
  const queue: Array<readonly [string, number]> = [[rootId, 0]];
  for (let index = 0; index < queue.length; index += 1) {
    const [id, depth] = queue[index]!;
    if (result.has(id) || !eligible.has(id)) continue;
    result.add(id);
    if (depth >= maxDepth) continue;
    for (const child of nodes.get(id)?.children ?? []) {
      queue.push([child, depth + 1]);
    }
  }
  return result;
}

function lineageOf(nodes: ReadonlyMap<string, ExplorerNode>, nodeId: string) {
  const result: ExplorerNode[] = [];
  const seen = new Set<string>();
  let id: string | undefined = nodeId;
  while (id && !seen.has(id)) {
    const node = nodes.get(id);
    if (!node) break;
    result.unshift(node);
    seen.add(id);
    id = node.parentId;
  }
  return result;
}

function addLineage(
  target: Set<string>,
  nodes: ReadonlyMap<string, ExplorerNode>,
  nodeId: string,
  stopId: string,
) {
  const seen = new Set<string>();
  let id: string | undefined = nodeId;
  while (id && !seen.has(id)) {
    target.add(id);
    if (id === stopId) break;
    seen.add(id);
    id = nodes.get(id)?.parentId;
  }
}

function withinBranch(
  nodes: ReadonlyMap<string, ExplorerNode>,
  nodeId: string,
  branchId: string,
) {
  const seen = new Set<string>();
  let id: string | undefined = nodeId;
  while (id && !seen.has(id)) {
    if (id === branchId) return true;
    seen.add(id);
    id = nodes.get(id)?.parentId;
  }
  return false;
}

function createsCycle(
  nodes: ReadonlyMap<string, ExplorerNode>,
  nodeId: string,
  parentId: string,
) {
  const seen = new Set<string>([nodeId]);
  let id: string | undefined = parentId;
  while (id) {
    if (seen.has(id)) return true;
    seen.add(id);
    id = nodes.get(id)?.parentId;
  }
  return false;
}

function coverageState(stats: NodeStats) {
  if (stats.direct.length) return 'direct' as const;
  if (stats.subtree.length) return 'descendant' as const;
  return 'gap' as const;
}

function isAgencyUnit(node: ExplorerNode | undefined) {
  return (
    node?.source === 'federal-register' ||
    node?.source === 'gosdir' ||
    node?.source === 'government-manual-body'
  );
}

function sourceLabel(source: NodeSource) {
  if (source === 'federal-register') return 'Federal Register';
  if (source === 'gosdir') return 'GOSDIR supplement';
  if (source === 'government-manual-body') return 'Government Manual';
  if (source === 'government-manual') return 'Government Manual group';
  return 'Federal overview';
}

function coverageLabel(stats: NodeStats) {
  if (stats.direct.length) {
    return `${stats.direct.length} direct project record${stats.direct.length === 1 ? '' : 's'}`;
  }
  if (stats.subtree.length) {
    return `${stats.subtree.length} project record${stats.subtree.length === 1 ? '' : 's'} in descendants`;
  }
  return 'Research gap';
}

function normalize(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function nameKey(value: string) {
  return normalize(value)
    .replace(/^(the )?(united states|u s|us) /, '')
    .replace(/^department of (.+)$/, '$1 department');
}

function compareNodes(left: ExplorerNode, right: ExplorerNode) {
  return (
    (left.sortOrder ?? Number.MAX_SAFE_INTEGER) -
      (right.sortOrder ?? Number.MAX_SAFE_INTEGER) ||
    collator.compare(left.name, right.name) ||
    left.id.localeCompare(right.id)
  );
}

function compareProjects(left: Project, right: Project) {
  return (
    collator.compare(left.name, right.name) || left.id.localeCompare(right.id)
  );
}

function truncate(value: string, length: number) {
  return value.length > length
    ? `${value.slice(0, length - 1).trimEnd()}…`
    : value;
}

function svgNumber(value: number, precision = 4) {
  return Number(value.toFixed(precision));
}

function safeId(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]/g, '-');
}
