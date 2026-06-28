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
  title: "Fusion 44X | Safer Pool Water for Families",
  description:
    "Stop letting your children swim in harsh pool chemicals. Check whether Fusion 44X is compatible with your family pool.",
  alternates: {
    canonical: `${siteConfig.url}/parents`,
  },
  openGraph: {
    title: "Fusion 44X | Safer Pool Water for Families",
    description:
      "Zero red eyes, zero skin rashes, zero chemical odors. Check your family's pool compatibility with Fusion 44X.",
    url: `${siteConfig.url}/parents`,
    type: "website",
  },
};

export default function ParentsPage() {
  return <ParentsLandingPage bodyFontClassName={inter.className} />;
}
