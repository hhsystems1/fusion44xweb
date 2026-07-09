import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ParentsLandingPage from "@/components/landing/ParentsLandingPage";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Fusion 44X | Family Pool Water",
  description:
    "Are these toxic pool chemicals even needed? Check whether Fusion 44X is compatible with your family pool.",
  alternates: {
    canonical: `${siteConfig.url}/landing/family-pool-water`,
  },
  openGraph: {
    title: "Fusion 44X | Family Pool Water",
    description:
      "Hydrogen-rich, balanced pool water for families who want to move beyond the chemical cycle.",
    url: `${siteConfig.url}/landing/family-pool-water`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion 44X | Family Pool Water",
    description:
      "Hydrogen-rich, balanced pool water for families who want to move beyond the chemical cycle.",
  },
};

export default function FamilyPoolWaterPage() {
  return <ParentsLandingPage bodyFontClassName={inter.className} />;
}
