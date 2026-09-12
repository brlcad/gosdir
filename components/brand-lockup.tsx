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
        <span className="block text-base font-black uppercase tracking-[-0.035em] text-ink">GOSDIR</span>
        <span className="mt-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-slate sm:hidden">
          Gov open source directory
        </span>
        <span className="mt-1 hidden font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-slate sm:block">
          Government Open Source Directory
        </span>
      </span>
    </span>
  );
}
