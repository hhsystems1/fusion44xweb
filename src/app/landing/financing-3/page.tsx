import type { Metadata } from "next";
import { Suspense } from "react";

import Fusion44xLandingPage from "@/components/landing/Fusion44xLanding";
import { fusion44xLandingCampaigns } from "@/content/fusion44xLanding";
import { siteConfig } from "@/lib/constants";

const campaign = fusion44xLandingCampaigns["financing-3"];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${campaign.seoTitle} | Fusion44x`,
  description: campaign.seoDescription,
  alternates: {
    canonical: `${siteConfig.url}/landing/financing-3`,
  },
  openGraph: {
    title: `${campaign.seoTitle} | Fusion44x`,
    description: campaign.seoDescription,
    url: `${siteConfig.url}/landing/financing-3`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${campaign.seoTitle} | Fusion44x`,
    description: campaign.seoDescription,
  },
};

export default function FinancingIterationThreeLandingPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-950" />}>
      <Fusion44xLandingPage campaign={campaign} pagePath="/landing/financing-3" />
    </Suspense>
  );
}
