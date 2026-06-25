import type { Metadata } from "next";
import { FinalCTA } from "@/components/spa-analysis/FinalCTA";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Free Pool Recommendation",
    description:
      "Tell us about your pool and get a free Fusion 44X recommendation tailored to your setup.",
    openGraph: {
      title: "Free Pool Recommendation | Fusion 44X",
      description: "Tell us about your pool and get a free Fusion 44X recommendation tailored to your setup.",
      url: `${siteConfig.url}/free-spa-analysis`,
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/free-spa-analysis`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Free Pool Recommendation | Fusion 44X",
      description: "Tell us about your pool and get a free Fusion 44X recommendation tailored to your setup.",
    },
};

export default function FreeSpaAnalysisPage() {
  return <FinalCTA />;
}
