import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Landmark,
  Map,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { policies, projects } from '@/lib/data';

const featured = projects.filter((project) => project.featured).slice(0, 4);
const sponsorCount = new Set(projects.map((project) => project.sponsor)).size;

const coverage = [
  {
    label: 'U.S. federal',
    count: projects.filter((project) => project.jurisdiction === 'U.S. federal').length,
    icon: Landmark,
  },
  {
    label: 'International',
    count: projects.filter((project) => project.jurisdiction === 'International').length,
    icon: Globe2,
  },
  {
    label: 'U.S. state',
    count: projects.filter((project) => project.jurisdiction === 'U.S. state').length,
    icon: Map,
  },
];

const latestReview = [...projects.map((project) => project.verified), ...policies.map((policy) => policy.reviewed)]
  .sort()
  .at(-1);

const reviewLabel = latestReview
  ? new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${latestReview}T00:00:00Z`))
  : 'launch review';

export function HomeLanding() {
  return (
    <main>
      <section className="home-hero relative overflow-hidden border-b border-line bg-paper">
        <div className="civic-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="hero-watermark" aria-hidden="true">GOSDIR</div>
        <div className="page-shell relative grid gap-12 py-12 sm:py-16 lg:min-h-[690px] lg:grid-cols-[1.06fr_.94fr] lg:items-center lg:gap-16 lg:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="grid size-8 shrink-0 place-items-center bg-blue font-mono text-xs font-black text-white shadow-[3px_3px_0_#111b34]" aria-hidden="true">G</span>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-blue">GOSDIR / Government Open Source Directory</p>
            </div>

            <h1 className="mt-7 max-w-4xl font-display text-[clamp(3.25rem,7vw,6.65rem)] font-black leading-[.86] tracking-[-0.072em] text-ink">
              Public code,<br /><span className="text-blue">public value.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate sm:text-xl">
              Find government-sponsored open source software—and the evidence behind it. Explore public stewards, open licenses, repositories, and the policies shaping open delivery.
            </p>

            <div className="mt-8 max-w-2xl">
              <label htmlFor="home-search" className="text-sm font-extrabold text-ink">Search the directory</label>
              <form action="/directory/" method="get" className="search-panel mt-3">
                <Search className="size-5 shrink-0 text-blue" aria-hidden="true" />
                <input
                  id="home-search"
                  name="q"
                  placeholder="Project, agency, place, license…"
                  className="min-w-0 flex-1 bg-transparent text-base font-medium outline-none placeholder:text-slate/65"
                />
                <button className="button-primary shrink-0 px-4 sm:px-5" type="submit">
                  Search <ArrowRight className="size-4" />
                </button>
              </form>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href="/directory/" className="text-link">Browse all {projects.length} projects <ArrowRight /></a>
              <a href="/coverage/" className="text-link text-ink">Explore coverage <ArrowRight /></a>
              <a href="/methodology/" className="text-link text-ink">How records qualify <ArrowRight /></a>
            </div>

            <ul className="mt-8 grid gap-3 text-sm font-semibold text-slate sm:grid-cols-3" aria-label="Directory trust signals">
              <li className="inline-flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green" /> Sponsorship evidence linked</li>
              <li className="inline-flex items-start gap-2"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-green" /> License status reviewed</li>
              <li className="inline-flex items-start gap-2"><FileCheck2 className="mt-0.5 size-4 shrink-0 text-green" /> Primary policy sources</li>
            </ul>
          </div>

          <aside className="directory-board relative" aria-labelledby="directory-snapshot-title">
            <div className="relative z-10 bg-ink p-6 text-white sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-5">
                <p className="eyebrow text-signal">Directory at a glance</p>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[.08em] text-white/60">
                  <span className="size-1.5 rounded-full bg-signal" /> Reviewed {reviewLabel}
                </span>
              </div>

              <h2 id="directory-snapshot-title" className="mt-6 max-w-md font-display text-3xl font-black leading-[1.02] tracking-[-0.045em] sm:text-4xl">
                Find precedent. Trace the proof. Follow suit.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/65">
                Each project record connects the software to a public steward, an eligible license or public-domain status, and official evidence.
              </p>

              <dl className="mt-7 grid grid-cols-3 gap-px border border-white/15 bg-white/15">
                <SnapshotMetric value={projects.length} label="Project records" />
                <SnapshotMetric value={policies.length} label="Policy + reference" />
                <SnapshotMetric value={sponsorCount} label="Sponsor labels" />
              </dl>

              <div className="mt-7">
                <div className="flex items-end justify-between gap-4">
                  <p className="text-sm font-extrabold text-white">Coverage by jurisdiction</p>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[.1em] text-white/45">current records</span>
                </div>
                <div className="mt-4 grid gap-4">
                  {coverage.map(({ label, count, icon: Icon }) => (
                    <div key={label} className="grid grid-cols-[minmax(100px,1fr)_minmax(100px,1.35fr)_24px] items-center gap-3">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/75"><Icon className="size-4 text-signal" /> {label}</span>
                      <span className="h-2 overflow-hidden rounded-full bg-white/10">
                        <span className="block h-full rounded-full bg-signal" style={{ width: `${(count / projects.length) * 100}%` }} />
                      </span>
                      <strong className="text-right font-mono text-sm text-white">{count}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-white/50">Editorial verification checks identity, provenance, and license eligibility—not security or procurement fitness.</p>
                <a href="/coverage/" className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-signal hover:text-white">
                  Open the atlas <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-28">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-blue">Projects of record</p>
            <h2 className="section-title">Built in public.<br />Ready to learn from.</h2>
          </div>
          <div className="max-w-md">
            <p className="text-base leading-7 text-slate">Each record connects a public repository to an identifiable government sponsor and an eligible open license or public-domain status.</p>
            <a href="/directory/" className="text-link mt-5">Browse the full directory <ArrowRight /></a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {featured.map((project, index) => (
            <article key={project.id} className="project-card group">
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-xs font-bold text-blue">{String(index + 1).padStart(2, '0')} / OSS</span>
                <span className="license-pill">{project.license}</span>
              </div>
              <h3 className="mt-12 font-display text-3xl font-extrabold tracking-[-0.035em] text-ink group-hover:text-blue">{project.name}</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate">{project.summary}</p>
              <div className="mt-8 flex items-end justify-between gap-4 border-t border-line pt-5">
                <div>
                  <p className="eyebrow text-slate">Sponsored by</p>
                  <p className="mt-1 text-sm font-bold text-ink">{project.sponsor}</p>
                </div>
                <a href={`/directory/?project=${project.id}`} className="grid size-11 shrink-0 place-items-center rounded-full border border-ink transition-colors group-hover:bg-ink group-hover:text-white" aria-label={`View ${project.name}`}>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="page-shell grid gap-10 py-20 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
          <div>
            <span className="icon-tile"><Sparkles className="size-6" /></span>
            <p className="eyebrow mt-8 text-blue">Policy is infrastructure</p>
            <h2 className="section-title mt-3">See the rules behind the repos.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-slate">Track memoranda, laws, strategies, and implementation guidance—always linked back to the primary source.</p>
            <a href="/policy/" className="button-primary mt-8">Open the policy library <ArrowRight className="size-4" /></a>
          </div>
          <div className="grid gap-3">
            {policies.slice(0, 4).map((policy) => (
              <a key={policy.id} href={`/policy/?record=${policy.id}`} className="policy-row group">
                <span className="font-mono text-xs font-bold text-blue">{policy.year}</span>
                <span>
                  <strong className="block font-display text-lg tracking-tight text-ink group-hover:text-blue">{policy.title}</strong>
                  <span className="mt-1 block text-sm text-slate">{policy.issuer}</span>
                </span>
                <ArrowRight className="size-4 text-slate transition-transform group-hover:translate-x-1 group-hover:text-blue" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue text-white">
        <div className="page-shell grid gap-10 py-16 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow text-signal">Know a missing project?</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Help close the map.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">Prepare a record with sponsor, repository, license, and official-source evidence for editorial review.</p>
          </div>
          <a href="/contribute/" className="button-light">Prepare a project record <ArrowRight className="size-4" /></a>
        </div>
      </section>
    </main>
  );
}

function SnapshotMetric({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-ink px-3 py-4 sm:px-4">
      <dd className="font-mono text-2xl font-black text-signal sm:text-3xl">{value}</dd>
      <dt className="mt-2 text-xs font-bold leading-4 text-white/55">{label}</dt>
    </div>
  );
}
