import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    number: "01",
    eyebrow: "Recommendations",
    title: "Personalized recommendations",
    description: "Get practical next steps tied to your own habits instead of generic sustainability tips.",
  },
  {
    number: "02",
    eyebrow: "Scoring",
    title: "Impact-based scoring",
    description: "See which parts of your lifestyle matter most, ranked in a way that is easy to understand.",
  },
  {
    number: "03",
    eyebrow: "Experience",
    title: "Fast and easy assessment",
    description: "Finish the flow in about two minutes and walk away with something genuinely useful.",
  },
  {
    number: "04",
    eyebrow: "Behavior Change",
    title: "Built for realistic progress",
    description: "TinyWins is designed around practical behavior change, so the advice feels doable in real life.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title="Why TinyWins feels like a product, not just a quiz."
          description="A cleaner interface, better prioritization, and behavior-aware guidance make the whole experience feel more useful from the first click."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
