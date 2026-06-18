import type { Metadata } from "next";
import { Suspense } from "react";

import { ChlorineFreePool2 } from "@/components/landing/ChlorineFreePool2";
import { siteConfig } from "@/lib/constants";

const campaignSlug = "chlorine-free-pool2";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Chlorine-Free Pool Experience | Fusion44x",
  description:
    "A cleaner, softer-feeling pool experience without the harsh chlorine smell. Built for families who want the swim without the chemical bite.",
  alternates: {
    canonical: `${siteConfig.url}/landing/chlorine-free-pool2`,
  },
  openGraph: {
    title: "Chlorine-Free Pool Experience | Fusion44x",
    description:
      "A cleaner, softer-feeling pool experience without the harsh chlorine smell.",
    url: `${siteConfig.url}/landing/chlorine-free-pool2`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chlorine-Free Pool Experience | Fusion44x",
    description:
      "A cleaner, softer-feeling pool experience without the harsh chlorine smell.",
  },
};

export default function ChlorineFreePool2Page() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#f7fffb]" />}>
      <ChlorineFreePool2 campaign={campaignSlug} pagePath="/landing/chlorine-free-pool2" />
    </Suspense>
  );
}
