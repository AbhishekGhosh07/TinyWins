import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    number: "01",
    title: "Personalized impact snapshot",
    description: "See where your lifestyle has the biggest impact with a clean, focused view of what matters most.",
  },
  {
    number: "02",
    title: "Top 3 TinyWins",
    description: "Get focused actions instead of generic advice, so you know exactly where to start this week.",
  },
  {
    number: "03",
    title: "Progress without guilt",
    description: "Improve over time with clarity, confidence, and a healthier relationship to sustainable choices.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title="A calmer way to build meaningful sustainable habits."
          description="TinyWins turns complexity into a short list of elegant next steps, tailored to your real life."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
