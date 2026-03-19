import Link from "next/link";
import type { ReactNode } from "react";

export function AppShell({
  title,
  description,
  children,
  actions,
}: {
  title: string;
  description: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell noise-overlay shadow-soft">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-glow-mint/10 blur-[120px]" />
          <div className="absolute right-[-8%] top-20 h-80 w-80 rounded-full bg-glow-ice/10 blur-[140px]" />

          <header className="px-4 pb-4 pt-4 sm:px-6 lg:px-8">
            <div className="glass-panel mx-auto flex max-w-6xl flex-col gap-4 rounded-[2rem] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/45 transition hover:text-white/75"
                >
                  <span>Back to TinyWins</span>
                </Link>
                <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {title}
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
                  {description}
                </p>
              </div>
              {actions ? <div className="flex shrink-0 items-center gap-3">{actions}</div> : null}
            </div>
          </header>

          <div className="relative px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12">{children}</div>
        </div>
      </div>
    </main>
  );
}
