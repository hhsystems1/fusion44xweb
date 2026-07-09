import type { Metadata } from "next";
import { Inter } from "next/font/google";

import YouTubeVsl2LandingPage from "@/components/landing/YouTubeVsl2LandingPage";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Fusion 44X | Pools and Spas VSL 2",
  description:
    "A different water system for pools and spas with no chlorine, no salt, and no harsh chemicals.",
  alternates: {
    canonical: `${siteConfig.url}/landing/youtube-vsl-2`,
  },
  openGraph: {
    title: "Fusion 44X | Pools and Spas VSL 2",
    description:
      "Fusion 44X creates hydrogen-rich, balanced pool and spa water with no chlorine, no salt, and no harsh chemicals.",
    url: `${siteConfig.url}/landing/youtube-vsl-2`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion 44X | Pools and Spas VSL 2",
    description:
      "Fusion 44X creates hydrogen-rich, balanced pool and spa water with no chlorine, no salt, and no harsh chemicals.",
  },
};

export default function YouTubeVsl2Page() {
  return <YouTubeVsl2LandingPage bodyFontClassName={inter.className} />;
}
