import { useEffect, useMemo, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CheckCircle2, Globe2, Landmark, Map, Menu, Plus, Search, ShieldCheck, X } from 'lucide-react';
import { CoverageExplorer } from '@/components/coverage-explorer';
import { PageIntro } from '@/components/page-intro';
import { PolicyLibrary } from '@/components/policy-library';
import { ProjectExplorer } from '@/components/project-explorer';
import { SubmissionForm } from '@/components/submission-form';
import { glossary, officialSources, projects, timeline } from '@/lib/data';
import './site.css';

type View = 'home' | 'directory' | 'coverage' | 'policy' | 'timeline' | 'glossary' | 'methodology' | 'contribute' | 'contact';

const routeTitles: Record<View, string> = {
  home: 'Public Code Index — Government Open Source Directory',
  directory: 'Project Directory — Public Code Index',
  coverage: 'Coverage Atlas — Public Code Index',
  policy: 'Policy Library — Public Code Index',
  timeline: 'Timeline — Public Code Index',
  glossary: 'Glossary — Public Code Index',
  methodology: 'Methodology — Public Code Index',
  contribute: 'Submit a Record — Public Code Index',
  contact: 'Contact — Public Code Index',
};

function routeFromPath(): View {
  const segment = window.location.pathname.split('/').filter(Boolean)[0] as View | undefined;
  return segment && segment in routeTitles ? segment : 'home';
}

function App() {
  const [view, setView] = useState<View>(routeFromPath);

  useEffect(() => {
    const sync = () => setView(routeFromPath());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  useEffect(() => {
    document.title = routeTitles[view];
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  const navigate = (next: View) => {
    const path = next === 'home' ? '/' : `/${next}/`;
    window.history.pushState({}, '', path);
    setView(next);
  };

  return (
    <>
      <StaticHeader view={view} navigate={navigate} />
      {view === 'home' && <HomeView navigate={navigate} />}
      {view === 'directory' && <><PageIntro eyebrow="Project directory" title="Open source, with a public mandate." description="Explore reusable software with an identifiable government sponsor and an OSI-approved license or clear public-domain status. Every record links to its evidence." /><ProjectExplorer /></>}
      {view === 'coverage' && <><PageIntro eyebrow="Coverage atlas" title="See the map. Find the gaps." description="Drill into state, federal, and international records. A blank area is a research signal—not a claim that no open source work exists there." /><CoverageExplorer /></>}
      {view === 'policy' && <><PageIntro eyebrow="Policy library" title="The policy behind public code." description="Plain-language summaries of laws, memoranda, regulations, strategies, standards, and implementation guidance—paired with the primary source." /><PolicyLibrary /></>}
      {view === 'timeline' && <TimelineView navigate={navigate} />}
      {view === 'glossary' && <GlossaryView />}
      {view === 'methodology' && <MethodologyView navigate={navigate} />}
      {view === 'contribute' && <ContributeView />}
      {view === 'contact' && <ContactView />}
      <StaticFooter navigate={navigate} />
    </>
  );
}

function StaticHeader({ view, navigate }: { view: View; navigate: (view: View) => void }) {
  const [open, setOpen] = useState(false);
  const nav: [View, string][] = [['directory', 'Directory'], ['coverage', 'Coverage'], ['policy', 'Policy'], ['timeline', 'Timeline'], ['glossary', 'Glossary']];
  const go = (next: View) => { navigate(next); setOpen(false); };
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-xl">
      <div className="page-shell flex h-[74px] items-center justify-between gap-6">
        <button type="button" onClick={() => go('home')} className="route-button group flex items-center gap-3 text-left" aria-label="Public Code Index home">
          <span className="grid size-9 grid-cols-2 gap-[3px] rounded-[10px] bg-ink p-[7px] shadow-[0_3px_0_#b8f245]"><span className="rounded-[2px] bg-signal" /><span className="rounded-[2px] border border-white/70" /><span className="rounded-[2px] border border-white/70" /><span className="rounded-[2px] bg-white" /></span>
          <span className="leading-none"><span className="block text-[15px] font-extrabold tracking-[-0.02em] text-ink">Public Code</span><span className="mt-1 block font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-slate">Index / Gov OSS</span></span>
        </button>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">{nav.map(([key, label]) => <button type="button" key={key} onClick={() => go(key)} className={`nav-link route-button ${view === key ? 'nav-link-active' : ''}`}>{label}</button>)}</nav>
        <div className="hidden items-center gap-3 sm:flex"><button type="button" onClick={() => go('contact')} className="route-button text-sm font-bold text-ink hover:text-blue">Contact</button><button type="button" onClick={() => go('contribute')} className="button-primary route-button"><Plus className="size-4" /> Submit a record</button></div>
        <button type="button" className="route-button grid size-10 place-items-center rounded-lg border border-line bg-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </div>
      {open && <nav className="border-t border-line bg-paper px-5 py-4 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-6xl gap-1">{nav.map(([key, label]) => <button type="button" key={key} onClick={() => go(key)} className="route-button rounded-lg px-3 py-3 text-left text-base font-bold hover:bg-white">{label}</button>)}<div className="mt-2 grid grid-cols-2 gap-2"><button type="button" onClick={() => go('contact')} className="button-secondary route-button justify-center">Contact</button><button type="button" onClick={() => go('contribute')} className="button-primary route-button justify-center">Submit</button></div></div></nav>}
    </header>
  );
}

function HomeView({ navigate }: { navigate: (view: View) => void }) {
  const [query, setQuery] = useState('');
  const featured = projects.filter((project) => project.featured).slice(0, 4);
  const search = (event: FormEvent) => {
    event.preventDefault();
    window.location.assign(`/directory/?q=${encodeURIComponent(query)}`);
  };
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line bg-paper"><div className="civic-grid absolute inset-0 opacity-60" aria-hidden="true" /><div className="page-shell relative grid min-h-[680px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <div><div className="mb-7 flex flex-wrap items-center gap-3"><span className="status-pill"><span className="size-1.5 rounded-full bg-current" /> Curated public-interest index</span><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate">18 launch records · 8 source documents</span></div><h1 className="font-display max-w-3xl text-[clamp(3.7rem,8vw,7.4rem)] font-black leading-[.83] tracking-[-0.075em] text-ink">Public code,<br /><span className="text-blue">public value.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-slate md:text-xl">Find government-sponsored open source projects, the policies that made them possible, and the public teams proving a better way to build.</p>
          <form onSubmit={search} className="search-panel mt-9 max-w-2xl"><Search className="size-5 shrink-0 text-blue" /><label htmlFor="static-home-search" className="sr-only">Search public code</label><input id="static-home-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, agencies, countries, or policy…" className="min-w-0 flex-1 bg-transparent text-[15px] font-medium outline-none placeholder:text-slate/65" /><button className="button-primary hidden sm:inline-flex" type="submit">Explore <ArrowRight className="size-4" /></button></form>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate"><span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-green" /> Government sponsor verified</span><span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-green" /> OSI-approved or public domain</span></div></div>
        <div className="relative mx-auto w-full max-w-[520px]"><div className="signal-card relative z-10"><div className="flex items-start justify-between border-b border-white/15 pb-5"><div><p className="eyebrow text-signal">Coverage signal</p><h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">Where public code is showing up</h2></div><Globe2 className="size-8 text-signal" strokeWidth={1.5} /></div><div className="globe-field my-7" aria-label="Stylized global coverage map">{[['US','24%','38%'],['CA','18%','31%'],['UK','48%','28%'],['FR','50%','37%'],['EE','56%','22%'],['SG','78%','61%'],['AU','84%','77%']].map(([label,left,top]) => <span key={label} className="map-point" style={{left,top}}><i />{label}</span>)}</div><div className="grid grid-cols-3 gap-3"><Metric icon={<Landmark />} value="9" label="Federal" /><Metric icon={<Map />} value="2" label="States" /><Metric icon={<Globe2 />} value="7" label="Global" /></div><button type="button" onClick={() => navigate('coverage')} className="route-button mt-6 inline-flex items-center gap-2 text-sm font-bold text-signal hover:text-white">Explore coverage <ArrowRight className="size-4" /></button></div><div className="absolute -bottom-5 -right-5 hidden h-full w-full border-2 border-ink/15 bg-signal md:block" aria-hidden="true" /></div>
      </div></section>
      <section className="page-shell py-20 lg:py-28"><div className="section-heading"><div><p className="eyebrow text-blue">Projects of record</p><h2 className="section-title">Built in public.<br />Ready to reuse.</h2></div><div className="max-w-md"><p className="text-base leading-7 text-slate">Each record connects a public repository to an identifiable government sponsor and a verified open license.</p><button type="button" onClick={() => navigate('directory')} className="text-link route-button mt-5">Browse the full directory <ArrowRight /></button></div></div><div className="mt-12 grid gap-4 md:grid-cols-2">{featured.map((project,index) => <article key={project.id} className="project-card group"><div className="flex items-start justify-between gap-5"><span className="font-mono text-xs font-bold text-blue">{String(index+1).padStart(2,'0')} / OSS</span><span className="license-pill">{project.license}</span></div><h3 className="mt-12 font-display text-3xl font-extrabold tracking-[-0.035em] text-ink group-hover:text-blue">{project.name}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-slate">{project.summary}</p><div className="mt-8 flex items-end justify-between gap-4 border-t border-line pt-5"><div><p className="eyebrow text-slate">Sponsored by</p><p className="mt-1 text-sm font-bold text-ink">{project.sponsor}</p></div><button type="button" onClick={() => window.location.assign(`/directory/?project=${project.id}`)} className="route-button grid size-10 shrink-0 place-items-center rounded-full border border-ink transition-colors group-hover:bg-ink group-hover:text-white" aria-label={`View ${project.name}`}><ArrowRight className="size-4" /></button></div></article>)}</div></section>
      <section className="bg-blue text-white"><div className="page-shell grid gap-10 py-16 md:grid-cols-[1fr_auto] md:items-center"><div><p className="eyebrow text-signal">Know a missing project?</p><h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Help close the map.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-white/75">Submit a repository with sponsor and license evidence. Every record is reviewed before it appears.</p></div><button type="button" onClick={() => navigate('contribute')} className="button-light route-button">Submit for verification <ArrowRight className="size-4" /></button></div></section>
    </main>
  );
}

function TimelineView({ navigate }: { navigate: (view: View) => void }) { return <main><PageIntro eyebrow="Timeline" title="Policy becomes practice." description="A selected chronology of decisions and public products that helped open source move from exception to repeatable government practice." /><section className="page-shell py-14 lg:py-20"><div className="timeline-rail">{timeline.map((event,index) => <article key={`${event.year}-${event.title}`} className="timeline-event"><div className="timeline-year"><span>{event.year}</span></div><div className="timeline-content"><p className="eyebrow text-blue">Milestone {String(index+1).padStart(2,'0')}</p><h2 className="mt-3 font-display text-2xl font-black tracking-[-.035em] text-ink sm:text-3xl">{event.title}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate sm:text-base sm:leading-7">{event.body}</p></div></article>)}</div><div className="mt-10 border border-line bg-white p-6 sm:flex sm:items-center sm:justify-between"><p className="text-sm text-slate">Help add a well-sourced milestone or correction.</p><button type="button" onClick={() => navigate('contact')} className="button-secondary route-button mt-4 sm:mt-0">Suggest a milestone</button></div></section></main>; }

function GlossaryView() { const [query,setQuery]=useState(''); const filtered=useMemo(()=>glossary.filter((item)=>[item.term,item.definition].join(' ').toLowerCase().includes(query.toLowerCase())),[query]); return <main><PageIntro eyebrow="Plain-language glossary" title="Speak open, clearly." description="Terms used across open source policy, licensing, software delivery, and public digital infrastructure—without assuming a technical background." /><section className="page-shell py-12 lg:py-16"><label className="filter-control mx-auto max-w-2xl"><Search className="size-4 text-blue" /><span className="sr-only">Search glossary</span><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search a term or idea…" className="w-full bg-transparent outline-none" /></label><div className="mx-auto mt-10 max-w-4xl border-t border-line">{filtered.map((item,index)=><article key={item.term} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[56px_220px_1fr] sm:gap-6"><span className="font-mono text-[10px] font-bold text-blue">{String(index+1).padStart(2,'0')}</span><h2 className="font-display text-xl font-black tracking-tight text-ink">{item.term}</h2><p className="text-sm leading-6 text-slate">{item.definition}</p></article>)}</div></section></main>; }

function MethodologyView({ navigate }: { navigate: (view: View) => void }) { const checks=[['01','Public sponsor','A government body or government-established delivery organization must directly sponsor or steward the work.'],['02','Public source','The canonical source repository must be accessible without special permission.'],['03','Eligible license','An OSI-approved license or clear public-domain dedication is required.'],['04','Primary evidence','An official page, verified organization, policy, or procurement record must establish sponsorship.']]; return <main><PageIntro eyebrow="Methodology & roadmap" title="Trust is part of the data model." description="How records qualify, what coverage means, where the launch dataset stops, and how a durable ingestion and review system should work." /><section className="page-shell py-16"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow text-blue">Inclusion standard</p><h2 className="section-title">Four checks before a record ships.</h2><p className="mt-5 text-sm leading-6 text-slate">Verification establishes identity, provenance, and license eligibility. It is not a security certification or procurement recommendation.</p></div><div className="grid gap-px border border-line bg-line sm:grid-cols-2">{checks.map(([number,title,body])=><article key={number} className="bg-white p-6"><span className="font-mono text-xs font-black text-blue">{number}</span><h3 className="mt-8 font-display text-xl font-black tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-slate">{body}</p></article>)}</div></div><div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{officialSources.map((source)=><a key={source.label} href={source.url} target="_blank" rel="noreferrer" className="group border border-line bg-white p-5 hover:border-blue"><strong className="font-display text-lg tracking-tight group-hover:text-blue">{source.label} ↗</strong><span className="mt-2 block text-xs leading-5 text-slate">{source.note}</span></a>)}</div><div className="mt-10 grid gap-5 border-l-4 border-signal bg-ink p-7 text-white sm:grid-cols-[1fr_auto] sm:items-center"><p className="max-w-3xl text-sm leading-6 text-white/65">This is a representative, source-backed starting point—not an exhaustive census. “No record” always means “not yet verified here.”</p><button type="button" onClick={()=>navigate('contribute')} className="button-light route-button">Close a coverage gap</button></div></section></main>; }

function ContributeView() { return <main><PageIntro eyebrow="Verified submissions" title="Add a project of record." description="Help document public software that others can study, reuse, and build upon. Strong submissions include a canonical repository, license, and official sponsorship evidence." /><section className="page-shell py-14"><div className="mx-auto max-w-4xl"><SubmissionForm mode="project" /></div></section></main>; }
function ContactView() { return <main><PageIntro eyebrow="Contact & corrections" title="Make the record better." description="Flag a correction, propose a research partnership, ask about the methodology, or help connect a government team to the directory." /><section className="page-shell py-14"><div className="mx-auto max-w-4xl"><SubmissionForm mode="contact" /></div></section></main>; }

function StaticFooter({ navigate }: { navigate: (view: View) => void }) { return <footer className="border-t border-white/15 bg-ink text-white"><div className="page-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]"><div><p className="font-display text-2xl font-extrabold tracking-tight">Public money.<br />Reusable code.</p><p className="mt-4 max-w-sm text-sm leading-6 text-white/60">An independent research prototype for finding government-sponsored open source and the policy that supports it.</p></div><FooterGroup title="Explore" items={[['directory','Project directory'],['coverage','Coverage maps'],['policy','Policy library'],['timeline','Timeline']]} navigate={navigate} /><FooterGroup title="About" items={[['methodology','Methodology'],['glossary','Glossary'],['contact','Contact & corrections'],['contribute','Submit a record']]} navigate={navigate} /></div><div className="border-t border-white/10"><div className="page-shell flex flex-col gap-2 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:justify-between"><span>Launch dataset reviewed 03 Sep 2026</span><span>Coverage means verified records, not absence of work</span></div></div></footer>; }
function FooterGroup({ title, items, navigate }: { title: string; items: [View,string][]; navigate: (view: View)=>void }) { return <div><p className="eyebrow text-signal">{title}</p><div className="mt-4 grid gap-2 text-left text-sm text-white/70">{items.map(([view,label])=><button type="button" key={view} onClick={()=>navigate(view)} className="route-button w-fit hover:text-white">{label}</button>)}</div></div>; }
function Metric({ icon, value, label }: { icon: ReactNode; value: string; label: string }) { return <div className="border border-white/15 bg-white/[.06] p-3"><div className="flex items-center gap-2 text-signal [&_svg]:size-4">{icon}<strong className="font-mono text-lg text-white">{value}</strong></div><p className="mt-2 text-[10px] font-bold uppercase tracking-[.12em] text-white/50">{label}</p></div>; }

createRoot(document.getElementById('root')!).render(<App />);
