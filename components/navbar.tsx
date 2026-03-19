import Link from "next/link";

const links = ["Home", "Product", "How it Works", "Features", "FAQ"];

function TinyWinsMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-glow">
        <div className="absolute h-6 w-6 rounded-full bg-gradient-to-br from-glow-mint/90 via-white to-glow-ice/80 blur-[2px]" />
        <div className="relative h-3.5 w-3.5 rounded-full bg-slate-950" />
      </div>
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/45">
          TinyWins
        </p>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="px-4 pb-4 pt-4 sm:px-6 lg:px-8">
      <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <TinyWinsMark />
        <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>
        <Link
          href="/assessment"
          className="rounded-full border border-white/12 bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:scale-[1.02] hover:bg-glow-pearl"
        >
          Start Assessment
        </Link>
      </div>
    </header>
  );
}
