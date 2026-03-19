import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Answer",
    description: "Complete a quick lifestyle assessment in about 2 minutes.",
    icon: "01",
  },
  {
    title: "Discover",
    description: "See which areas of your lifestyle drive the most impact.",
    icon: "02",
  },
  {
    title: "Improve",
    description: "Get 3 personalized actions that are practical and high-leverage.",
    icon: "03",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How It Works"
          title="How TinyWins works"
          description="A fast, product-style flow that turns your everyday habits into a clear set of next moves."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="tw-card p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 text-sm font-semibold text-white">
                {step.icon}
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-white/60">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
