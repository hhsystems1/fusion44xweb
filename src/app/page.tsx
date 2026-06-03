import { HeroSection } from "@/components/home/Hero";
import { TrustStrip } from "@/components/layout/TrustStrip";
import { ProductModule } from "@/components/home/ProductModule";
import { LifestyleSection } from "@/components/home/LifestyleSection";
import { HowItWorksSection } from "@/components/home/HowItWorks";
import { ProofSection } from "@/components/home/ProofSection";
import { ReviewsSection } from "@/components/home/ReviewsCarousel";
import { PricingCTA } from "@/components/home/PricingCTA";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { StructuredData } from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <HeroSection />
      <TrustStrip />
      <ProductModule />
      <LifestyleSection />
      <HowItWorksSection />
      <ProofSection />
      <ReviewsSection />
      <PricingCTA />
      <HomeFAQ />
    </>
  );
}
