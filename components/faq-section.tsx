import { SectionHeading } from "@/components/section-heading";

const faqs = [
  {
    question: "How long does TinyWins take?",
    answer:
      "Most people get their first personalized snapshot and top recommendations in about two minutes.",
  },
  {
    question: "Is this another guilt-heavy sustainability app?",
    answer:
      "No. TinyWins is designed to reduce overwhelm and focus on the few actions that are both meaningful and realistic.",
  },
  {
    question: "Do I need to track everything?",
    answer:
      "No detailed logging required. The experience starts with a short set of questions and turns that into useful guidance right away.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-pad px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Designed for clarity from the first click."
          description="A few common questions, answered with the same calm and precision as the product itself."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="tw-card p-6"
            >
              <h3 className="text-lg font-medium text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
