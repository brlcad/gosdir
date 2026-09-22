'use client';

import { useMemo, useState } from 'react';
import { Building2, Globe2, Map, Search } from 'lucide-react';
import {
  agencyById,
  projectHasAgencyGeography,
  projectsByAgencyId,
} from '@/lib/catalog/agency-relations';
import { projects } from '@/lib/catalog/software';
import type { Project } from '@/lib/catalog/types';

const stateTiles = [
  ['AK',1,1],['ME',12,1],['VT',11,2],['NH',12,2],['WA',2,3],['ID',3,3],['MT',4,3],['ND',5,3],['MN',6,3],['WI',7,3],['MI',8,3],['NY',10,3],['MA',11,3],['RI',12,3],
  ['OR',2,4],['NV',3,4],['WY',4,4],['SD',5,4],['IA',6,4],['IL',7,4],['IN',8,4],['OH',9,4],['PA',10,4],['NJ',11,4],['CT',12,4],
  ['CA',2,5],['UT',3,5],['CO',4,5],['NE',5,5],['MO',6,5],['KY',7,5],['WV',8,5],['VA',9,5],['MD',10,5],['DE',11,5],
  ['AZ',3,6],['NM',4,6],['KS',5,6],['AR',6,6],['TN',7,6],['NC',8,6],['SC',9,6],['DC',10,6],
  ['HI',1,7],['OK',5,7],['LA',6,7],['MS',7,7],['AL',8,7],['GA',9,7],['TX',5,8],['FL',10,8],
] as const;

const stateNames: Record<string, string> = { CA: 'California', MA: 'Massachusetts', NY: 'New York', WA: 'Washington', DC: 'District of Columbia' };
const federalAgencies = [...agencyById.values()].filter(
  (agency) => agency.jurisdiction === 'U.S. federal',
);
const countries = [
  { code: 'CA', name: 'Canada', left: 19, top: 29 }, { code: 'US', name: 'United States', left: 24, top: 42 }, { code: 'UK', name: 'United Kingdom', left: 47, top: 27 },
  { code: 'FR', name: 'France', left: 49, top: 37 }, { code: 'ES', name: 'Spain', left: 47, top: 47 }, { code: 'EE', name: 'Estonia', left: 56, top: 24 },
  { code: 'FI', name: 'Finland', left: 57, top: 17 }, { code: 'SG', name: 'Singapore', left: 78, top: 68 },
];

export function CoverageExplorer() {
  const [view, setView] = useState<'states' | 'federal' | 'world'>('states');
  const [selection, setSelection] = useState('California');

  const matching = useMemo<readonly Project[]>(() => {
    if (view === 'federal') return projectsByAgencyId.get(selection) ?? [];
    return projects.filter((project) => {
      if (view === 'states') return project.geography === selection;
      return project.geography === selection || projectHasAgencyGeography(project, selection);
    });
  }, [selection, view]);

  const changeView = (next: 'states' | 'federal' | 'world') => {
    setView(next);
    setSelection(next === 'states' ? 'California' : next === 'federal' ? 'us-gsa' : 'United Kingdom');
  };

  return (
    <div className="page-shell py-10 lg:py-14">
      <div className="coverage-tabs" role="tablist" aria-label="Coverage domain">
        <CoverageTab active={view === 'states'} onClick={() => changeView('states')} icon={<Map />} label="U.S. states" />
        <CoverageTab active={view === 'federal'} onClick={() => changeView('federal')} icon={<Building2 />} label="U.S. federal" />
        <CoverageTab active={view === 'world'} onClick={() => changeView('world')} icon={<Globe2 />} label="International" />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_360px]">
        <section className="min-h-[560px] border border-line bg-ink p-5 text-white sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/15 pb-6">
            <div>
              <p className="eyebrow text-signal">Directory coverage / {view}</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">
                {view === 'states' ? 'State-by-state evidence' : view === 'federal' ? 'Department & agency matrix' : 'Global project coordinates'}
              </h2>
            </div>
            <div className="flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-[.1em] text-white/55"><span className="flex items-center gap-2"><i className="size-2 bg-signal" /> Records</span><span className="flex items-center gap-2"><i className="size-2 border border-white/40" /> Gap</span></div>
          </div>

          {view === 'states' && (
            <div className="state-map" aria-label="U.S. state coverage tile map">
              {stateTiles.map(([code, col, row]) => {
                const name = stateNames[code] ?? code;
                const count = projects.filter((project) => project.jurisdiction === 'U.S. state' && project.geography === name).length;
                return <button key={code} type="button" onClick={() => setSelection(name)} className={`state-tile ${count ? 'state-tile-covered' : ''} ${selection === name ? 'state-tile-selected' : ''}`} style={{ gridColumn: col, gridRow: row }} title={`${name}: ${count} verified record${count === 1 ? '' : 's'}`}><b>{code}</b>{count > 0 && <span>{count}</span>}</button>;
              })}
            </div>
          )}

          {view === 'federal' && (
            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {federalAgencies.map((agency) => {
                const count = projectsByAgencyId.get(agency.id)?.length ?? 0;
                return <button type="button" key={agency.id} onClick={() => setSelection(agency.id)} className={`agency-cell ${count ? 'agency-cell-covered' : ''} ${selection === agency.id ? 'agency-cell-selected' : ''}`}><span className="font-mono text-xs font-black">{agency.abbreviation ?? agency.name}</span><span className="mt-7 block text-left text-[11px] leading-4 text-current/65">{agency.name}</span><span className="mt-4 block font-mono text-[10px] font-bold uppercase tracking-[.1em]">{count ? `${count} records` : 'Research gap'}</span></button>;
              })}
            </div>
          )}

          {view === 'world' && (
            <div className="world-map mt-8" aria-label="International coverage coordinate map">
              <div className="world-meridian world-meridian-a" /><div className="world-meridian world-meridian-b" /><div className="world-meridian world-meridian-c" />
              {countries.map((country) => {
                const count = projects.filter((project) => project.geography === country.name || projectHasAgencyGeography(project, country.name)).length;
                return <button type="button" key={country.code} className={`world-point ${selection === country.name ? 'world-point-selected' : ''}`} style={{ left: `${country.left}%`, top: `${country.top}%` }} onClick={() => setSelection(country.name)}><i /><b>{country.code}</b><span>{count}</span></button>;
              })}
              <span className="world-label world-label-west">Americas</span><span className="world-label world-label-europe">Europe</span><span className="world-label world-label-asia">Asia–Pacific</span>
            </div>
          )}
        </section>

        <aside className="border border-line bg-white p-6 sm:p-8">
          <p className="eyebrow text-blue">Selected area</p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-ink">{view === 'federal' ? agencyById.get(selection)?.name ?? selection : selection}</h2>
          <div className="mt-5 flex items-end gap-2 border-b border-line pb-6"><strong className="font-display text-5xl font-black tracking-tight text-blue">{matching.length}</strong><span className="pb-1 text-sm font-bold text-slate">verified record{matching.length === 1 ? '' : 's'}</span></div>
          {matching.length ? <div className="mt-6 grid gap-3">{matching.map((project) => <a key={project.id} href={`/directory?project=${project.id}`} className="group border border-line p-4 hover:border-blue"><span className="eyebrow text-blue">{project.domain}</span><strong className="mt-2 block font-display text-lg tracking-tight group-hover:text-blue">{project.name}</strong><span className="mt-1 block text-xs leading-5 text-slate">{project.sponsor}</span></a>)}</div> : <div className="mt-8 text-center"><Search className="mx-auto size-7 text-blue" /><p className="mt-3 text-sm font-bold text-ink">Help map this area</p><p className="mt-2 text-xs leading-5 text-slate">Suggest a government open source project backed by public evidence.</p><a href="/contribute" className="button-secondary mt-5">Suggest a record</a></div>}
        </aside>
      </div>
    </div>
  );
}

function CoverageTab({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return <button type="button" role="tab" aria-selected={active} onClick={onClick} className={`coverage-tab ${active ? 'coverage-tab-active' : ''}`}><span className="[&_svg]:size-4">{icon}</span>{label}</button>;
}
