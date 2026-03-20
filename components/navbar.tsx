"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { TinyWinsLogo } from "@/components/tinywins-logo";

const links = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pb-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-6xl rounded-[1.75rem] transition duration-300 ${
          isScrolled ? "glass-panel border-white/10 shadow-panel" : "border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-5 px-4 py-3 sm:px-5">
          <TinyWinsLogo priority className="translate-y-[1px]" />

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link href="/assessment" className="btn-primary">
              Start Assessment
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white/80" />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-white/8 px-4 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-3 py-3 text-sm text-white/70 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/assessment"
                className="btn-primary mt-2"
                onClick={() => setIsOpen(false)}
              >
                Start Assessment
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
