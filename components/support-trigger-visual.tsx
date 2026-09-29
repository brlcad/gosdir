import { ArrowRight, HeartHandshake } from 'lucide-react';

export const supportTriggerClassName =
  'group mt-5 flex min-h-16 w-full max-w-sm cursor-pointer items-center gap-3 rounded-lg border border-white/30 bg-white/[.08] px-3.5 py-3 text-left text-white transition-colors hover:border-signal hover:bg-white/[.14] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal aria-disabled:cursor-wait aria-disabled:opacity-70';

export function SupportTriggerVisual({
  pending = false,
}: {
  pending?: boolean;
}) {
  return (
    <>
      <span
        className="grid size-10 shrink-0 place-items-center rounded-md bg-signal text-ink"
        aria-hidden="true"
      >
        <HeartHandshake className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-medium leading-4 text-white/65">
          Help keep the directory growing
        </span>
        <span className="mt-0.5 block font-display text-base font-extrabold leading-5">
          {pending ? 'Opening support…' : 'Support GOSDIR'}
        </span>
      </span>
      <ArrowRight
        className="size-4 shrink-0 text-signal transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </>
  );
}
