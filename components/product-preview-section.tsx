import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";

const categories = [
  { label: "Transport", level: "High", width: "78%", tone: "bg-rose-400" },
  { label: "Food", level: "Medium", width: "58%", tone: "bg-amber-300" },
  { label: "Home Energy", level: "Medium", width: "46%", tone: "bg-amber-300" },
  { label: "Consumption", level: "Low", width: "28%", tone: "bg-emerald-300" },
];

const recommendations = [
  {
    title: "Replace one car trip each week",
    meta: "Medium impact - Easy to start",
  },
  {
    title: "Swap 1-2 beef meals this week",
    meta: "High impact - Flexible habit",
  },
  {
    title: "Batch online orders together",
    meta: "Medium impact - Low effort",
  },
];

export function ProductPreviewSection() {
  return (
    <section className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionHeading
            eyebrow="Results Preview"
            title="A fuller dashboard view of what happens after the assessment."
            description="The results experience goes beyond a quick teaser. It organizes your impact areas, shows where to focus, and turns that into a short list of practical next steps."
          />
          <div className="mt-7 space-y-3 text-sm text-white/60">
            <div className="tw-card flex items-start gap-4 p-4">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-teal" />
              <p>Compare your highest-impact categories in one glance.</p>
            </div>
            <div className="tw-card flex items-start gap-4 p-4">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-blue" />
              <p>See why each recommendation made the shortlist.</p>
            </div>
          </div>
          <Link href="/assessment" className="btn-secondary mt-8">
            Start Assessment
          </Link>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-8 h-40 w-40 rounded-full bg-brand-teal/10 blur-[90px]" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-brand-blue/10 blur-[110px]" />
          <div className="tw-card relative overflow-hidden rounded-[2rem] p-4 sm:p-5 lg:p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                  Ranked impact areas
                </p>
                <div className="mt-5 space-y-4">
                  {categories.map((category) => (
                    <div key={category.label}>
                      <div className="flex items-center justify-between text-sm text-white/70">
                        <span>{category.label}</span>
                        <span>{category.level}</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/8">
                        <div
                          className={`h-full rounded-full ${category.tone}`}
                          style={{ width: category.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                  Recommended next steps
                </p>
                <div className="mt-4 space-y-3">
                  {recommendations.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-xs font-medium text-white/80">
                          0{index + 1}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-white">{item.title}</p>
                          <p className="mt-1 text-xs text-white/50">{item.meta}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
