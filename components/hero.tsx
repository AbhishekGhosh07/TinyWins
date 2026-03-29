import Link from "next/link";

import { ProductFactsStrip } from "@/components/product-facts-strip";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden pb-[23rem] sm:min-h-[94vh] sm:pb-72 lg:min-h-[900px] lg:pb-44"
      style={{
        backgroundImage: "url('/tinywins-hero.webp.png')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.85)_0%,rgba(3,7,18,0.65)_35%,rgba(3,7,18,0.30)_55%,transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_48%,transparent_42%,rgba(2,6,14,0.10)_72%,rgba(2,6,14,0.40)_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.6)_0,transparent_0.7%),radial-gradient(circle_at_72%_24%,rgba(255,255,255,0.38)_0,transparent_0.6%),radial-gradient(circle_at_28%_74%,rgba(255,255,255,0.4)_0,transparent_0.65%)] [background-size:220px_220px,280px_280px,260px_260px]" />
      <div className="absolute inset-y-0 right-0 w-[28%] bg-gradient-to-l from-[#030711] via-[rgba(3,7,17,0.38)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-[rgba(3,7,17,0.46)] to-[#030711]" />
      <div className="absolute bottom-[-6%] right-[-4%] h-[46%] w-[34%] rounded-full bg-[radial-gradient(circle,rgba(3,7,17,0.68),rgba(3,7,17,0.16)_52%,transparent_80%)] blur-[42px]" />

      <div className="relative mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="hero-fade-in max-w-[520px] py-20 sm:py-24 lg:py-36">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-brand-teal shadow-[0_0_14px_rgba(56,200,162,0.85)]" />
            Small changes. Real impact.
          </div>

          <h1 className="mt-7 text-balance text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.9rem] lg:leading-[0.96]">
            Track the lifestyle changes that shape your impact.
          </h1>

          <p className="mt-6 max-w-[520px] text-balance text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            TinyWins helps you measure your habits, discover your highest-impact
            opportunities, and build more sustainable routines in under 2 minutes.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link href="/assessment" className="btn-primary">
              Start Assessment
            </Link>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works
            </a>
          </div>
        </div>
      </div>

      <ProductFactsStrip className="absolute inset-x-0 bottom-8 z-10 pb-0 sm:bottom-10 lg:bottom-12" />
    </section>
  );
}
