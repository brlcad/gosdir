'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe2, Landmark, Map, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { policies, projects } from '@/lib/data';

const featured = projects.filter((project) => project.featured).slice(0, 4);

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div className="civic-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="page-shell relative grid min-h-[680px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div>
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="status-pill"><span className="size-1.5 rounded-full bg-current" /> Curated public-interest index</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate">18 launch records · 8 source documents</span>
            </div>
            <h1 className="font-display max-w-3xl text-[clamp(3.7rem,8vw,7.4rem)] font-black leading-[.83] tracking-[-0.075em] text-ink">
              Public code,<br /><span className="text-blue">public value.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate md:text-xl">
              Find government-sponsored open source projects, the policies that made them possible, and the public teams proving a better way to build.
            </p>
            <form action="/directory" className="search-panel mt-9 max-w-2xl">
              <Search className="size-5 shrink-0 text-blue" />
              <label htmlFor="home-search" className="sr-only">Search public code</label>
              <input id="home-search" name="q" placeholder="Search projects, agencies, countries, or policy…" className="min-w-0 flex-1 bg-transparent text-[15px] font-medium outline-none placeholder:text-slate/65" />
              <button className="button-primary hidden sm:inline-flex" type="submit">Explore <ArrowRight className="size-4" /></button>
            </form>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-green" /> Government sponsor verified</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-green" /> OSI-approved or public domain</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="signal-card relative z-10">
              <div className="flex items-start justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="eyebrow text-signal">Coverage signal</p>
                  <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">Where public code is showing up</h2>
                </div>
                <Globe2 className="size-8 text-signal" strokeWidth={1.5} />
              </div>
              <div className="globe-field my-7" aria-label="Stylized global coverage map">
                {[
                  ['US', '24%', '38%'], ['CA', '18%', '31%'], ['UK', '48%', '28%'], ['FR', '50%', '37%'],
                  ['EE', '56%', '22%'], ['SG', '78%', '61%'], ['AU', '84%', '77%'],
                ].map(([label, left, top]) => (
                  <span key={label} className="map-point" style={{ left, top }}><i />{label}</span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                <Metric icon={<Landmark />} value="9" label="Federal records" />
                <Metric icon={<Map />} value="2" label="State records" />
                <Metric icon={<Globe2 />} value="7" label="Global records" />
              </div>
              <Link href="/coverage" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-signal hover:text-white">
                Explore all coverage <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="absolute -bottom-5 -right-5 hidden h-full w-full border-2 border-ink/15 bg-signal md:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="page-shell py-20 lg:py-28">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-blue">Projects of record</p>
            <h2 className="section-title">Built in public.<br />Ready to reuse.</h2>
          </div>
          <div className="max-w-md">
            <p className="text-base leading-7 text-slate">Each record connects a public repository to an identifiable government sponsor and a verified open license.</p>
            <Link href="/directory" className="text-link mt-5">Browse the full directory <ArrowRight /></Link>
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
                <Link href={`/directory?project=${project.id}`} className="grid size-10 shrink-0 place-items-center rounded-full border border-ink transition-colors group-hover:bg-ink group-hover:text-white" aria-label={`View ${project.name}`}>
                  <ArrowRight className="size-4" />
                </Link>
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
            <Link href="/policy" className="button-primary mt-8">Open the policy library <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid gap-3">
            {policies.slice(0, 4).map((policy) => (
              <Link key={policy.id} href={`/policy?record=${policy.id}`} className="policy-row group">
                <span className="font-mono text-xs font-bold text-blue">{policy.year}</span>
                <span>
                  <strong className="block font-display text-lg tracking-tight text-ink group-hover:text-blue">{policy.title}</strong>
                  <span className="mt-1 block text-sm text-slate">{policy.issuer}</span>
                </span>
                <ArrowRight className="size-4 text-slate transition-transform group-hover:translate-x-1 group-hover:text-blue" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue text-white">
        <div className="page-shell grid gap-10 py-16 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow text-signal">Know a missing project?</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Help close the map.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">Submit a repository with sponsor and license evidence. Every record is reviewed before it appears.</p>
          </div>
          <Link href="/contribute" className="button-light">Submit for verification <ArrowRight className="size-4" /></Link>
        </div>
      </section>
    </main>
  );
}

function Metric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="border border-white/15 bg-white/[.06] p-3">
      <div className="flex items-center gap-2 text-signal [&_svg]:size-4">{icon}<strong className="font-mono text-lg text-white">{value}</strong></div>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-[.12em] text-white/50">{label}</p>
    </div>
  );
}
