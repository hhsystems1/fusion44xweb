import type { Metadata } from "next";
import { FinalCTA } from "@/components/spa-analysis/FinalCTA";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Free Pool Recommendation",
  description:
    "Use the Fusion 44X recommendation form to capture pool type, equipment, photos, and contact details in one place.",
  openGraph: {
    title: "Free Pool Recommendation | Fusion 44X",
    description: "Capture pool details with a reusable recommendation form for every page that needs one.",
    url: `${siteConfig.url}/free-spa-analysis`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/free-spa-analysis`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Pool Recommendation | Fusion 44X",
    description: "Capture pool details with a reusable recommendation form for every page that needs one.",
  },
};

export default function FreeSpaAnalysisPage() {
  return <FinalCTA />;
}
