import type { Metadata } from "next";
import { Inter } from "next/font/google";

import VideoSalesLanding from "@/components/landing/VideoSalesLanding";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Fusion 44X Multi-Angle Video Sales Page",
  description:
    "Dark, premium Fusion 44X landing page with three buyer angles, a YouTube hero, and a compatibility quiz that routes to checkout or consultation.",
  alternates: {
    canonical: `${siteConfig.url}/landing/youtube-vsl`,
  },
  openGraph: {
    title: "Fusion 44X Multi-Angle Video Sales Page",
    description:
      "Dark, premium Fusion 44X landing page with three buyer angles, a YouTube hero, and a compatibility quiz that routes to checkout or consultation.",
    url: `${siteConfig.url}/landing/youtube-vsl`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion 44X Multi-Angle Video Sales Page",
    description:
      "Dark, premium Fusion 44X landing page with three buyer angles, a YouTube hero, and a compatibility quiz that routes to checkout or consultation.",
  },
};

export default function YoutubeVslLandingPage() {
  return <VideoSalesLanding bodyFontClassName={inter.className} headingFontClassName={inter.className} />;
}
