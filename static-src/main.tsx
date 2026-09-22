import { lazy, Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Menu, Plus, X } from 'lucide-react';
import { BrandLockup, FooterBrand } from '@/components/brand-lockup';
import { SupportDialog } from '@/components/support-dialog';
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

const routePages = {
  home: lazy(() => import('@/app/page')),
  directory: lazy(() => import('@/app/directory/page')),
  coverage: lazy(() => import('@/app/coverage/page')),
  policy: lazy(() => import('@/app/policy/page')),
  timeline: lazy(() => import('@/app/timeline/page')),
  guide: lazy(() => import('@/app/guide/page')),
  glossary: lazy(() => import('@/app/glossary/page')),
  methodology: lazy(() => import('@/app/methodology/page')),
  contribute: lazy(() => import('@/app/contribute/page')),
  review: lazy(() => import('@/app/review/page')),
  contact: lazy(() => import('@/app/contact/page')),
};

function viewFromPath(pathname: string): View | null {
  const segments = pathname.split('/').filter(Boolean);
  if (!segments.length) return 'home';
  if (segments.length !== 1) return null;
  const [segment] = segments;
  return Object.hasOwn(routeTitles, segment) ? segment as View : null;
}

function readLocation() {
  const { pathname, search, hash } = window.location;
  return {
    key: `${pathname}${search}${hash}`,
    view: viewFromPath(pathname) ?? 'home',
  };
}

function App() {
  const [routeLocation, setRouteLocation] = useState(readLocation);
  const Page = routePages[routeLocation.view];

  useEffect(() => {
    const sync = () => setRouteLocation(readLocation());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  useEffect(() => {
    const followInternalLink = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest('a[href]');
      if (
        !(anchor instanceof HTMLAnchorElement) ||
        (anchor.target && anchor.target !== '_self') ||
        anchor.hasAttribute('download')
      ) return;

      const destination = new URL(anchor.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        viewFromPath(destination.pathname) === null ||
        (
          destination.pathname === window.location.pathname &&
          destination.search === window.location.search &&
          destination.hash
        )
      ) return;

      event.preventDefault();
      const href = `${destination.pathname}${destination.search}${destination.hash}`;
      const currentHref = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (href === currentHref) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }

      window.history.pushState({}, '', href);
      setRouteLocation(readLocation());
    };

    document.addEventListener('click', followInternalLink);
    return () => document.removeEventListener('click', followInternalLink);
  }, []);

  useEffect(() => {
    document.title = routeTitles[routeLocation.view];
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [routeLocation.key, routeLocation.view]);

  return (
    <>
      <StaticHeader view={routeLocation.view} />
      <Suspense fallback={<RouteFallback />}>
        <Page key={routeLocation.key} />
      </Suspense>
      <StaticFooter />
    </>
  );
}

function RouteFallback() {
  return (
    <main className="page-shell py-20" aria-live="polite">
      <p className="eyebrow text-blue">Loading page…</p>
    </main>
  );
}

const primaryNav: [View, string][] = [['directory', 'Directory'], ['coverage', 'Coverage'], ['policy', 'Policy'], ['timeline', 'Timeline'], ['guide', 'Release guide'], ['glossary', 'Glossary']];

function StaticHeader({ view }: { view: View }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-xl">
    <div className="page-shell flex h-[74px] items-center justify-between gap-5">
      <a href="/" className="group text-left" aria-label="GOSDIR — Government Open Source Directory home"><BrandLockup /></a>
      <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">{primaryNav.map(([key, label]) => <a key={key} href={`/${key}/`} className={`nav-link ${view === key ? 'nav-link-active' : ''}`} aria-current={view === key ? 'page' : undefined}>{label}</a>)}</nav>
      <div className="hidden items-center gap-3 xl:flex"><a href="/contact/" className="text-sm font-bold text-ink hover:text-blue">Contact</a><a href="/contribute/" className="button-primary"><Plus className="size-4" /> Submit a record</a></div>
      <button type="button" className="route-button grid size-11 place-items-center rounded-lg border border-line bg-white xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
    </div>
    {open && <nav className="border-t border-line bg-paper px-5 py-4 xl:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-6xl gap-1">{primaryNav.map(([key, label]) => <a key={key} href={`/${key}/`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-left text-base font-bold hover:bg-white" aria-current={view === key ? 'page' : undefined}>{label}</a>)}<div className="mt-2 grid grid-cols-2 gap-2"><a href="/contact/" onClick={() => setOpen(false)} className="button-secondary justify-center">Contact</a><a href="/contribute/" onClick={() => setOpen(false)} className="button-primary justify-center">Submit</a></div></div></nav>}
  </header>;
}


function StaticFooter() { return <footer className="site-footer border-t border-white/15 bg-ink text-white"><div className="page-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]"><div><FooterBrand /><p className="mt-4 max-w-sm text-sm leading-6 text-white/60">An independent, source-backed directory for finding government-sponsored open source and the policy that supports it.</p><SupportDialog /></div><FooterGroup title="Explore" items={[["directory", "Project directory"], ["coverage", "Coverage maps"], ["policy", "Policy library"], ["timeline", "Timeline"], ["guide", "Release guide"]]} /><FooterGroup title="Participate" items={[["contribute", "Submit a record"], ["review", "Review queue"], ["methodology", "Methodology"], ["glossary", "Glossary"], ["contact", "Contact & corrections"]]} /></div><div className="border-t border-white/10"><div className="page-shell flex flex-col gap-2 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:justify-between"><span>Evidence reviewed 12 Sep 2026</span><span>Source-backed records, growing with the community</span></div></div></footer>; }
function FooterGroup({ title, items }: { title: string; items: [View, string][] }) { return <div><p className="eyebrow text-signal">{title}</p><div className="mt-4 grid gap-2 text-left text-sm text-white/70">{items.map(([view, label]) => <a key={view} href={`/${view}/`} className="w-fit hover:text-white">{label}</a>)}</div></div>; }

createRoot(document.getElementById('root')!).render(<App />);
