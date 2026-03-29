import { TinyWinsLogo } from "@/components/tinywins-logo";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.018))] px-6 py-8 text-sm text-white/55 shadow-panel md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <TinyWinsLogo className="h-10 sm:h-11" />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
            TinyWins is a calm, product-led way to understand your impact and find the few changes that matter most.
          </p>
          <p className="mt-4 text-sm text-white/40">Built by Abhishek Ghosh</p>
        </div>
        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex flex-wrap items-center gap-5">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/35">
            (c) 2026 TinyWins. Built for better habits.
          </p>
        </div>
      </div>
    </footer>
  );
}
