'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { BrandLockup } from '@/components/brand-lockup';
import { cn } from '@/lib/utils';

const nav = [
  { href: '/directory', label: 'Directory' },
  { href: '/coverage', label: 'Coverage' },
  { href: '/policy', label: 'Policy' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/glossary', label: 'Glossary' },
];

export function Brand() {
  return (
    <Link href="/" className="group" aria-label="GOSDIR — Government Open Source Directory home">
      <BrandLockup />
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-xl">
      <div className="page-shell flex h-[74px] items-center justify-between gap-6">
        <Brand />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn('nav-link', pathname.startsWith(item.href) && 'nav-link-active')}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="text-sm font-bold text-ink hover:text-blue">Contact</Link>
          <Link href="/contribute" className="button-primary">
            <Plus className="size-4" /> Submit a record
          </Link>
        </div>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-line bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-paper px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-6xl gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-base font-bold hover:bg-white" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/contact" className="button-secondary justify-center" onClick={() => setOpen(false)}>Contact</Link>
              <Link href="/contribute" className="button-primary justify-center" onClick={() => setOpen(false)}>Submit</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-ink text-white">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">Public money.<br />Reusable code.</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">An independent research prototype for finding government-sponsored open source and the policy that supports it.</p>
        </div>
        <div>
          <p className="eyebrow text-signal">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link href="/directory" className="hover:text-white">Project directory</Link>
            <Link href="/coverage" className="hover:text-white">Coverage maps</Link>
            <Link href="/policy" className="hover:text-white">Policy library</Link>
            <Link href="/timeline" className="hover:text-white">Timeline</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-signal">About</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link href="/methodology" className="hover:text-white">Methodology</Link>
            <Link href="/glossary" className="hover:text-white">Glossary</Link>
            <Link href="/contact" className="hover:text-white">Contact & corrections</Link>
            <Link href="/contribute" className="hover:text-white">Submit a record</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-2 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Launch dataset reviewed 03 Sep 2026</span>
          <span>Coverage means verified records, not absence of work</span>
        </div>
      </div>
    </footer>
  );
}
