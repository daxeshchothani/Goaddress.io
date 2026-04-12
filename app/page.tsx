import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StatsBar } from "@/components/sections/StatsBar";
import { Features } from "@/components/sections/Features";
import { CodeDemo } from "@/components/sections/CodeDemo";
import { DocsOverview } from "@/components/sections/DocsOverview";
import { Pricing } from "@/components/sections/Pricing";
import { Integrations } from "@/components/sections/Integrations";
import { Testimonials } from "@/components/sections/Testimonials";
import { Enterprise } from "@/components/sections/Enterprise";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <div aria-hidden="true" className="site-ambient">
          <span className="orb orb-one" />
          <span className="orb orb-two" />
          <span className="orb orb-three" />
          <span className="grid-shimmer" />
        </div>
        <Hero />
        <TrustedBy />
        <HowItWorks />
        <StatsBar />
        <Features />
        <CodeDemo />
        <DocsOverview />
        <Pricing />
        <Integrations />
        <Testimonials />
        <Enterprise />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
