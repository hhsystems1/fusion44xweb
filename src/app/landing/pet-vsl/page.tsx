import type { Metadata } from "next";
import { Inter } from "next/font/google";

import PetLandingPage from "@/components/landing/PetLandingPage";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Fusion 44X | Safer Water for Your Dog",
  description: "Discover how Fusion 44X creates hydrogen-rich, chemical-free pool water that is safer for your pets and family.",
  alternates: {
    canonical: `${siteConfig.url}/landing/pet-vsl`,
  },
  openGraph: {
    title: "Fusion 44X | Safer Water for Your Dog",
    description: "Chemical-free, hydrogen-rich pool water for a safer swimming experience for pets.",
    url: `${siteConfig.url}/landing/pet-vsl`,
    type: "website",
  },
};

export default function PetVslLandingPage() {
  return <PetLandingPage bodyFontClassName={inter.className} />;
}
