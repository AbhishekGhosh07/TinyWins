import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { Navbar } from "@/components/navbar";
import { ProductFactsStrip } from "@/components/product-facts-strip";
import { ProductPreviewSection } from "@/components/product-preview-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden px-4 pb-6 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell noise-overlay shadow-soft">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute left-[-12%] top-20 h-72 w-72 rounded-full bg-brand-teal/10 blur-[120px]" />
          <div className="absolute right-[-8%] top-16 h-80 w-80 rounded-full bg-brand-blue/10 blur-[140px]" />
          <Navbar />
          <Hero />
          <ProductFactsStrip />
          <FeaturesSection />
          <HowItWorksSection />
          <ProductPreviewSection />
          <FaqSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
