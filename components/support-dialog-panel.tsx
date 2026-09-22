'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const KOFI_PANEL_URL =
  'https://ko-fi.com/gosdir/?hidefeed=true&widget=true&embed=true&preview=true';

export default function SupportDialogPanel({
  initiallyOpen = false,
}: {
  initiallyOpen?: boolean;
}) {
  const [open, setOpen] = useState(initiallyOpen);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button
            type="button"
            aria-label="Support GOSDIR"
            className="mt-4 inline-flex cursor-pointer border-0 bg-transparent p-0 text-sm font-bold text-signal hover:text-white"
          />
        }
      >
        Support GOSDIR
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-2rem)] gap-0 overflow-y-auto rounded-none border border-line bg-paper p-0 text-ink ring-0 sm:max-w-[600px]">
        <DialogHeader className="border-b border-line px-5 py-5 pr-14 text-left sm:px-6">
          <p className="eyebrow text-blue">
            Independent public-interest directory
          </p>
          <DialogTitle className="font-display text-2xl leading-tight font-black tracking-tight text-ink">
            Support GOSDIR
          </DialogTitle>
          <DialogDescription className="max-w-lg text-sm leading-6 text-slate">
            If GOSDIR has been useful, you can help cover hosting and ongoing
            source review. Every record follows the same independent evidence review.
          </DialogDescription>
        </DialogHeader>

        {open && (
          <iframe
            src={KOFI_PANEL_URL}
            title="Support GOSDIR on Ko-fi"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="payment"
            className="block h-[min(712px,65dvh)] w-full border-0 bg-[#f9f9f9]"
          />
        )}

        <div className="flex flex-col gap-2 border-t border-line bg-white px-5 py-3 text-xs leading-5 text-slate sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>
            Payments are processed by PayPal or Stripe through Ko-fi.
            Contributions are not tax-deductible.
          </span>
          <a
            href="https://ko-fi.com/gosdir"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-bold text-blue hover:text-ink"
          >
            Open Ko-fi directly ↗
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
