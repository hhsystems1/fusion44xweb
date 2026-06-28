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
  title: "Fusion 44X | Safer Pool Water for Pet Owners",
  description:
    "A pet-safety focused Fusion 44X landing page for dog owners worried about harsh pool chemicals, fumes, and irritated skin or eyes.",
  alternates: {
    canonical: `${siteConfig.url}/pet-owners`,
  },
  openGraph: {
    title: "Fusion 44X | Safer Pool Water for Pet Owners",
    description:
      "Hydrogen-rich, balanced pool water without chlorine, chemicals, or pesticides for pet-focused pool owners.",
    url: `${siteConfig.url}/pet-owners`,
    type: "website",
  },
};

export default function PetOwnersPage() {
  return <PetLandingPage bodyFontClassName={inter.className} />;
}
