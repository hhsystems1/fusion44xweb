import type { Metadata } from "next";
import { SAHero } from "@/components/spa-analysis/SAHero";
import { BenefitIcons } from "@/components/spa-analysis/BenefitIcons";
import { ComparisonTable } from "@/components/spa-analysis/ComparisonTable";
import { VideoBlock } from "@/components/spa-analysis/VideoBlock";
import { BeforeAfterSlider } from "@/components/spa-analysis/BeforeAfterSlider";
import { SavingsCalculator } from "@/components/spa-analysis/SavingsCalculator";
import { SAReviews } from "@/components/spa-analysis/ReviewsSection";
import { HowItWorksShort } from "@/components/spa-analysis/HowItWorksShort";
import { FinalCTA } from "@/components/spa-analysis/FinalCTA";

export const metadata: Metadata = {
  title: "Free Spa Analysis",
  description:
    "Stop buying chemicals. Get your free spa analysis and discover how much you could save with the Fusion 44X chlorine-free spa water system.",
  openGraph: {
    title: "Free Spa Analysis | Fusion 44X",
    description:
      "Get your free spa analysis and discover how much you could save by switching to a chlorine-free spa water system.",
  },
};

export default function FreeSpaAnalysisPage() {
  return (
    <>
      <SAHero />
      <BenefitIcons />
      <ComparisonTable />
      <VideoBlock />
      <BeforeAfterSlider />
      <SavingsCalculator />
      <SAReviews />
      <HowItWorksShort />
      <FinalCTA />
    </>
  );
}
