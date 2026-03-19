import { SectionHeading } from "@/components/section-heading";

const steps = [
  "Answer a few quick questions",
  "See where your impact mostly comes from",
  "Get your top TinyWins",
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <SectionHeading
          eyebrow="How It Works"
          title="Three quick steps. Clearer decisions."
          description="The experience is designed to feel effortless, insightful, and useful from the first minute."
        />
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="glass-panel flex items-start gap-5 rounded-[1.5rem] p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-sm font-medium text-white">
                0{index + 1}
              </div>
              <div>
                <p className="text-lg font-medium text-white">{step}</p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  TinyWins keeps the signal high and the friction low, so you can move
                  from insight to action without the mental overload.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
