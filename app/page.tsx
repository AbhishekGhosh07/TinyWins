import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { Navbar } from "@/components/navbar";
import { ProductPreviewSection } from "@/components/product-preview-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-6 pt-2">
      <div className="absolute left-[-14%] top-[-6%] h-[28rem] w-[28rem] rounded-full bg-brand-teal/10 blur-[140px]" />
      <div className="absolute right-[-12%] top-[4%] h-[32rem] w-[32rem] rounded-full bg-brand-blue/10 blur-[170px]" />

      <Navbar />
      <Hero />

      <div className="relative z-10 px-4 pb-4 pt-2 sm:px-6 sm:pt-4 lg:px-8 lg:pt-6">
        <div className="mx-auto max-w-7xl">
          <div className="section-shell noise-overlay shadow-soft">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute left-[-12%] top-20 h-72 w-72 rounded-full bg-brand-teal/10 blur-[120px]" />
            <div className="absolute right-[-8%] top-16 h-80 w-80 rounded-full bg-brand-blue/10 blur-[140px]" />
            <FeaturesSection />
            <HowItWorksSection />
            <ProductPreviewSection />
            <FaqSection />
            <CTASection />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
