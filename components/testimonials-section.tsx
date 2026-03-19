import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    quote:
      "TinyWins made sustainability feel surprisingly doable. I got three specific actions that fit my actual routine.",
    name: "Maya Chen",
    title: "Product Designer",
  },
  {
    quote:
      "Most climate tools overwhelm me. This one felt calm, smart, and immediately useful.",
    name: "Jordan Ellis",
    title: "Growth Lead",
  },
  {
    quote:
      "The experience is polished enough to trust, but simple enough that I actually came back the next week.",
    name: "Ava Thompson",
    title: "Community Strategist",
  },
];

export function TestimonialsSection() {
  return (
    <section id="product" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Trust"
          title="Built to feel encouraging, not exhausting."
          description="A premium experience earns trust through clarity, restraint, and thoughtful guidance."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="glass-panel rounded-[1.75rem] p-6"
            >
              <p className="text-base leading-7 text-white/72">
                “{testimonial.quote}”
              </p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-white/48">{testimonial.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
