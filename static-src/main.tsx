import { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, Plus, Search, X } from 'lucide-react';
import { BrandLockup } from '@/components/brand-lockup';
import { CoverageExplorer } from '@/components/coverage-explorer';
import { HomeLanding } from '@/components/home-landing';
import { PageIntro } from '@/components/page-intro';
import { PolicyLibrary } from '@/components/policy-library';
import { ProjectExplorer } from '@/components/project-explorer';
import { ReleaseGuide } from '@/components/release-guide';
import { ReviewQueue } from '@/components/review-queue';
import { SubmissionForm } from '@/components/submission-form';
import { glossary } from '@/lib/catalog/glossary';
import { officialSources } from '@/lib/catalog/sources';
import { timeline } from '@/lib/catalog/timeline';
import './site.css';

type View = 'home' | 'directory' | 'coverage' | 'policy' | 'timeline' | 'guide' | 'glossary' | 'methodology' | 'contribute' | 'review' | 'contact';

const routeTitles: Record<View, string> = {
  home: 'GOSDIR — Government Open Source Directory',
  directory: 'Project Directory — GOSDIR',
  coverage: 'Coverage Atlas — GOSDIR',
  policy: 'Policy Library — GOSDIR',
  timeline: 'Timeline — GOSDIR',
  guide: 'Open Source Release Guide — GOSDIR',
  glossary: 'Glossary — GOSDIR',
  methodology: 'Methodology — GOSDIR',
  contribute: 'Submit a Record — GOSDIR',
  review: 'Review Queue — GOSDIR',
  contact: 'Contact — GOSDIR',
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
    window.history.pushState({}, '', next === 'home' ? '/' : `/${next}/`);
    setView(next);
  };

  return <>
    <StaticHeader view={view} navigate={navigate} />
    {view === 'home' && <HomeLanding />}
    {view === 'directory' && <><PageIntro eyebrow="Project directory" title="Open source, with a public mandate." description="Explore reusable software with an identifiable government sponsor and an OSI-approved license or clear public-domain status. Every record links to its evidence." /><ProjectExplorer /></>}
    {view === 'coverage' && <><PageIntro eyebrow="Coverage atlas" title="See the map. Find the gaps." description="Drill into state, federal, and international records. A blank area is a research signal—not a claim that no open source work exists there." /><CoverageExplorer /></>}
    {view === 'policy' && <><PageIntro eyebrow="Policy library" title="The policy behind public code." description="Plain-language summaries of laws, memoranda, regulations, strategies, standards, and implementation guidance—paired with the primary source." /><PolicyLibrary /></>}
    {view === 'timeline' && <TimelineView />}
    {view === 'guide' && <GuideView />}
    {view === 'glossary' && <GlossaryView />}
    {view === 'methodology' && <MethodologyView />}
    {view === 'contribute' && <ContributeView />}
    {view === 'review' && <ReviewView />}
    {view === 'contact' && <ContactView />}
    <StaticFooter navigate={navigate} />
  </>;
}

const primaryNav: [View, string][] = [['directory', 'Directory'], ['coverage', 'Coverage'], ['policy', 'Policy'], ['timeline', 'Timeline'], ['guide', 'Release guide'], ['glossary', 'Glossary']];

function StaticHeader({ view, navigate }: { view: View; navigate: (view: View) => void }) {
  const [open, setOpen] = useState(false);
  const go = (next: View) => { navigate(next); setOpen(false); };
  return <header className="site-header sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-xl">
    <div className="page-shell flex h-[74px] items-center justify-between gap-5">
      <button type="button" onClick={() => go('home')} className="route-button group text-left" aria-label="GOSDIR — Government Open Source Directory home"><BrandLockup /></button>
      <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">{primaryNav.map(([key, label]) => <button type="button" key={key} onClick={() => go(key)} className={`nav-link route-button ${view === key ? 'nav-link-active' : ''}`}>{label}</button>)}</nav>
      <div className="hidden items-center gap-3 xl:flex"><button type="button" onClick={() => go('contact')} className="route-button text-sm font-bold text-ink hover:text-blue">Contact</button><button type="button" onClick={() => go('contribute')} className="button-primary route-button"><Plus className="size-4" /> Submit a record</button></div>
      <button type="button" className="route-button grid size-11 place-items-center rounded-lg border border-line bg-white xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
    </div>
    {open && <nav className="border-t border-line bg-paper px-5 py-4 xl:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-6xl gap-1">{primaryNav.map(([key, label]) => <button type="button" key={key} onClick={() => go(key)} className="route-button rounded-lg px-3 py-3 text-left text-base font-bold hover:bg-white">{label}</button>)}<div className="mt-2 grid grid-cols-2 gap-2"><button type="button" onClick={() => go('contact')} className="button-secondary route-button justify-center">Contact</button><button type="button" onClick={() => go('contribute')} className="button-primary route-button justify-center">Submit</button></div></div></nav>}
  </header>;
}

function TimelineView() {
  return <main><PageIntro eyebrow="Timeline" title="Policy becomes practice." description="A selected chronology of decisions and public products that helped open source move from exception to repeatable government practice." /><section className="page-shell py-14 lg:py-20"><div className="timeline-rail">{timeline.map((event, index) => <article key={`${event.year}-${event.title}`} className="timeline-event"><div className="timeline-year"><span>{event.year}</span></div><div className="timeline-content"><p className="eyebrow text-blue">Milestone {String(index + 1).padStart(2, '0')}</p><h2 className="mt-3 font-display text-2xl font-black tracking-[-.035em] text-ink sm:text-3xl">{event.title}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate sm:text-base sm:leading-7">{event.body}</p>{'projectId' in event && event.projectId && <a href={`/directory/?project=${event.projectId}`} className="text-link mt-5">View project record →</a>}{'policyId' in event && event.policyId && <a href={`/policy/?record=${event.policyId}`} className="text-link mt-5">View policy record →</a>}</div></article>)}</div><div className="mt-10 border border-line bg-white p-6 sm:flex sm:items-center sm:justify-between"><p className="text-sm text-slate">Help add a well-sourced milestone or correction.</p><a href="/contact/" className="button-secondary mt-4 sm:mt-0">Suggest a milestone</a></div></section></main>;
}

function GuideView() { return <main><PageIntro eyebrow="How to release government software" title="From public work to public repo." description="A practical, jurisdiction-aware path for deciding whether government software can be released, preparing it for safe reuse, recording approvals, and sustaining it after publication." aside={<div className="max-w-xs border-l-4 border-signal bg-ink p-5 text-white"><span className="eyebrow text-signal">Start with the gate</span><strong className="mt-2 block font-display text-lg">Authority and release restrictions come before license selection.</strong><span className="mt-2 block text-xs leading-5 text-white/60">A familiar open source license cannot cure missing rights or make restricted information publishable.</span></div>} /><ReleaseGuide /></main>; }

function GlossaryView() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => glossary.filter((item) => `${item.term} ${item.definition}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <main><PageIntro eyebrow="Plain-language glossary" title="Speak open, clearly." description="Terms used across open source policy, licensing, software delivery, and public digital infrastructure—without assuming a technical background." /><section className="page-shell py-12 lg:py-16"><label className="filter-control mx-auto max-w-2xl"><Search className="size-4 text-blue" /><span className="sr-only">Search glossary</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a term or idea…" className="w-full bg-transparent outline-none" /></label><div className="mx-auto mt-10 max-w-4xl border-t border-line">{filtered.map((item, index) => <article key={item.term} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[56px_220px_1fr] sm:gap-6"><span className="font-mono text-[10px] font-bold text-blue">{String(index + 1).padStart(2, '0')}</span><h2 className="font-display text-xl font-black tracking-tight text-ink">{item.term}</h2><p className="text-sm leading-6 text-slate">{item.definition}</p></article>)}</div></section></main>;
}

const criteria = [['01', 'Government provenance', 'Official evidence must show that government created, commissioned, funded, sponsored, or directly stewarded the work; government use alone does not qualify.'], ['02', 'Public source', 'The canonical repository must be accessible without special permission.'], ['03', 'Eligible license', 'An OSI-approved license or clear public-domain dedication is required.'], ['04', 'Primary evidence', 'An official page, verified organization, policy, repository, or procurement record must establish that relationship.']];

function MethodologyView() {
  return <main><PageIntro eyebrow="Methodology & roadmap" title="Trust is part of the data model." description="How records qualify, what coverage means, and how discovery, submission, verification, and publication remain separate." /><section className="page-shell py-16"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow text-blue">Inclusion standard</p><h2 className="section-title">Four checks before a record ships.</h2><p className="mt-5 text-sm leading-6 text-slate">Verification establishes identity, provenance, and license eligibility. It is not a security certification or procurement recommendation.</p></div><div className="grid gap-px border border-line bg-line sm:grid-cols-2">{criteria.map(([number, title, body]) => <article key={number} className="bg-white p-6"><span className="font-mono text-xs font-black text-blue">{number}</span><h3 className="mt-8 font-display text-xl font-black tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-slate">{body}</p></article>)}</div></div><div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{officialSources.map((source) => <a key={source.label} href={source.url} target="_blank" rel="noreferrer" className="group border border-line bg-white p-5 hover:border-blue"><strong className="font-display text-lg tracking-tight group-hover:text-blue">{source.label} ↗</strong><span className="mt-2 block text-xs leading-5 text-slate">{source.note}</span></a>)}</div><div className="mt-10 grid gap-5 border-l-4 border-signal bg-ink p-7 text-white sm:grid-cols-[1fr_auto_auto] sm:items-center"><p className="max-w-3xl text-sm leading-6 text-white/65">Discovery can be automated; acceptance cannot. Public GitHub issues preserve the evidence trail, and every accepted record still requires human review and a code change.</p><a href="/review/" className="button-light">Open review queue</a><a href="/contribute/" className="button-secondary border-white text-white hover:bg-white hover:text-ink">Submit evidence</a></div></section></main>;
}

function ContributeView() { return <main><PageIntro eyebrow="Verified submissions" title="Bring the proof. Help map the work." description="Propose a government-sponsored open source project or a high-value policy source. GOSDIR collects no private contact details and publishes nothing without editorial review." /><section className="page-shell grid gap-8 py-14 lg:grid-cols-[1fr_300px]"><SubmissionForm mode="project" /><aside className="h-fit border border-line bg-ink p-6 text-white lg:sticky lg:top-24"><p className="eyebrow text-signal">What happens next</p><ol className="mt-5 grid gap-4 text-sm leading-6 text-white/65"><li><strong className="text-white">1. Confirm on GitHub.</strong> The site prepares but does not submit the issue.</li><li><strong className="text-white">2. Editors verify.</strong> Sources, license, status, wording, and duplicates are checked.</li><li><strong className="text-white">3. Code review publishes.</strong> No issue can write directly to the directory.</li></ol><a href="/review/" className="mt-6 inline-block text-sm font-extrabold text-signal">Open review queue →</a></aside></section></main>; }

function ReviewView() { return <main><PageIntro eyebrow="Editorial review queue" title="Review the proof, not the pitch." description="Inspect open project and policy submissions, verify every eligibility claim, and prepare accepted records for an ordinary reviewed code change. Nothing on this page publishes automatically." aside={<div className="max-w-xs border border-line bg-white p-5"><span className="eyebrow text-blue">Reviewer access</span><strong className="mt-2 block font-display text-lg">Public to inspect · GitHub sign-in to act</strong><span className="mt-2 block text-xs leading-5 text-slate">Anyone can read the queue. Commenting, labeling, closing, and merging use the repository’s GitHub permissions.</span></div>} /><ReviewQueue /></main>; }

function ContactView() { return <main><PageIntro eyebrow="Contact & corrections" title="Make the record better." description="Flag a correction, suggest an official source, report an accessibility issue, or ask a question through the public project tracker." /><section className="page-shell grid gap-8 py-14 lg:grid-cols-[.7fr_1.3fr]"><div className="grid content-start gap-3"><InfoCard title="Corrections" body="Include the record URL, field needing attention, and a primary source supporting the change." /><InfoCard title="Coverage suggestions" body="Point editors to a public agency catalog, repository organization, policy, or official publication." /><InfoCard title="Public by design" body="Messages become GitHub issues. Do not include personal, confidential, classified, export-controlled, or vulnerability information." /></div><SubmissionForm mode="contact" /></section></main>; }
function InfoCard({ title, body }: { title: string; body: string }) { return <article className="border border-line bg-white p-5"><h2 className="font-display text-lg font-black tracking-tight">{title}</h2><p className="mt-2 text-xs leading-5 text-slate">{body}</p></article>; }

function StaticFooter({ navigate }: { navigate: (view: View) => void }) { return <footer className="site-footer border-t border-white/15 bg-ink text-white"><div className="page-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]"><div><p className="font-display text-2xl font-extrabold tracking-tight">Public money.<br />Reusable code.</p><p className="mt-4 max-w-sm text-sm leading-6 text-white/60">An independent, source-backed directory for finding government-sponsored open source and the policy that supports it.</p><a href="https://ko-fi.com/gosdir" target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-bold text-signal hover:text-white">Support GOSDIR ↗</a></div><FooterGroup title="Explore" items={[["directory", "Project directory"], ["coverage", "Coverage maps"], ["policy", "Policy library"], ["timeline", "Timeline"], ["guide", "Release guide"]]} navigate={navigate} /><FooterGroup title="Participate" items={[["contribute", "Submit a record"], ["review", "Review queue"], ["methodology", "Methodology"], ["glossary", "Glossary"], ["contact", "Contact & corrections"]]} navigate={navigate} /></div><div className="border-t border-white/10"><div className="page-shell flex flex-col gap-2 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:justify-between"><span>Evidence reviewed 12 Sep 2026</span><span>Coverage means verified records, not absence of work</span></div></div></footer>; }
function FooterGroup({ title, items, navigate }: { title: string; items: [View, string][]; navigate: (view: View) => void }) { return <div><p className="eyebrow text-signal">{title}</p><div className="mt-4 grid gap-2 text-left text-sm text-white/70">{items.map(([view, label]) => <button type="button" key={view} onClick={() => navigate(view)} className="route-button w-fit hover:text-white">{label}</button>)}</div></div>; }

createRoot(document.getElementById('root')!).render(<App />);
