export function BrandLockup() {
  return (
    <span className="flex items-center gap-3">
      <span
        className="grid size-9 shrink-0 grid-cols-2 gap-[3px] rounded-[10px] bg-ink p-[7px] shadow-[0_3px_0_#b8f245] transition-transform group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <span className="rounded-[2px] bg-signal" />
        <span className="rounded-[2px] border border-white/70" />
        <span className="rounded-[2px] border border-white/70" />
        <span className="rounded-[2px] bg-white" />
      </span>
      <span className="leading-none">
        <span className="block text-lg font-black uppercase tracking-[-0.035em] text-ink">GOSDIR</span>
        <span className="mt-1 block font-mono text-xs font-semibold uppercase tracking-[0.06em] text-slate sm:hidden">
          Open source directory
        </span>
        <span className="mt-1 hidden font-mono text-xs font-semibold uppercase tracking-[0.06em] text-slate sm:block">
          Government Open Source Directory
        </span>
      </span>
    </span>
  );
}

export function FooterBrand() {
  return (
    <div>
      <p className="font-display text-3xl font-black tracking-[-0.05em] text-white">GOSDIR</p>
      <p className="mt-1 text-sm font-bold text-signal">Government Open Source Directory</p>
    </div>
  );
}
