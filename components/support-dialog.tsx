'use client';

import { useState } from 'react';

const importSupportDialogPanel = () =>
  import('@/components/support-dialog-panel');
let supportDialogPanelPromise:
  | ReturnType<typeof importSupportDialogPanel>
  | undefined;

function loadSupportDialogPanel() {
  if (!supportDialogPanelPromise) {
    supportDialogPanelPromise = importSupportDialogPanel().catch((error) => {
      supportDialogPanelPromise = undefined;
      throw error;
    });
  }

  return supportDialogPanelPromise;
}

type SupportDialogPanelComponent = Awaited<
  ReturnType<typeof loadSupportDialogPanel>
>['default'];
type LoadState = 'idle' | 'loading' | 'error';

const triggerClassName =
  'mt-4 inline-flex cursor-pointer border-0 bg-transparent p-0 text-sm font-bold text-signal hover:text-white aria-disabled:cursor-wait aria-disabled:opacity-70';

export function SupportDialog() {
  const [Panel, setPanel] = useState<SupportDialogPanelComponent | null>(null);
  const [loadState, setLoadState] = useState<LoadState>('idle');

  if (Panel) return <Panel initiallyOpen />;

  const preload = () => {
    void loadSupportDialogPanel().catch(() => undefined);
  };
  const open = () => {
    if (loadState === 'loading') return;
    setLoadState('loading');
    void loadSupportDialogPanel()
      .then(({ default: LoadedPanel }) => {
        setPanel(() => LoadedPanel);
        setLoadState('idle');
      })
      .catch(() => setLoadState('error'));
  };

  return (
    <>
      <SupportTrigger
        onClick={open}
        onFocus={preload}
        onPointerEnter={preload}
        pending={loadState === 'loading'}
      />
      {loadState === 'loading' && (
        <output className="sr-only">
          Opening the support dialog…
        </output>
      )}
      {loadState === 'error' && (
        <p className="mt-2 max-w-sm text-xs leading-5 text-white/70" role="alert">
          The support dialog could not load.{' '}
          <a
            href="https://ko-fi.com/gosdir"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-signal hover:text-white"
          >
            Open Ko-fi directly ↗
          </a>
        </p>
      )}
    </>
  );
}

function SupportTrigger({
  onClick,
  onFocus,
  onPointerEnter,
  pending = false,
}: {
  onClick?: () => void;
  onFocus?: () => void;
  onPointerEnter?: () => void;
  pending?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label="Support GOSDIR"
      aria-busy={pending}
      aria-disabled={pending}
      onClick={pending ? undefined : onClick}
      onFocus={onFocus}
      onPointerEnter={onPointerEnter}
      className={triggerClassName}
    >
      {pending ? 'Opening support…' : 'Support GOSDIR'}
    </button>
  );
}
