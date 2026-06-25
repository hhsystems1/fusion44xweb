import type { Metadata } from "next";

import DrySkinLanding from "@/components/landing/DrySkinLanding";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Dry Skin Landing Page",
  description:
    "A dry-skin focused Fusion 44X landing page using the pool problem images to show irritation, chloramines, and chemical maintenance.",
  alternates: {
    canonical: `${siteConfig.url}/landing/dry-skin`,
  },
  openGraph: {
    title: "Dry Skin Landing Page",
    description:
      "A dry-skin focused Fusion 44X landing page using the pool problem images to show irritation, chloramines, and chemical maintenance.",
    url: `${siteConfig.url}/landing/dry-skin`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dry Skin Landing Page",
    description:
      "A dry-skin focused Fusion 44X landing page using the pool problem images to show irritation, chloramines, and chemical maintenance.",
  },
};

export default function DrySkinPage() {
  return <DrySkinLanding />;
}
