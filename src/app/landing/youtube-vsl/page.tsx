import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";

import VideoSalesLanding from "@/components/landing/VideoSalesLanding";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Fusion44x Multi-Angle Video Sales Page",
  description:
    "Dark, premium Fusion44x landing page with three buyer angles, a Vimeo hero, and a compatibility quiz that routes to checkout or consultation.",
  alternates: {
    canonical: `${siteConfig.url}/landing/youtube-vsl`,
  },
  openGraph: {
    title: "Fusion44x Multi-Angle Video Sales Page",
    description:
      "Dark, premium Fusion44x landing page with three buyer angles, a Vimeo hero, and a compatibility quiz that routes to checkout or consultation.",
    url: `${siteConfig.url}/landing/youtube-vsl`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion44x Multi-Angle Video Sales Page",
    description:
      "Dark, premium Fusion44x landing page with three buyer angles, a Vimeo hero, and a compatibility quiz that routes to checkout or consultation.",
  },
};

export default function YoutubeVslLandingPage() {
  return <VideoSalesLanding bodyFontClassName={inter.className} headingFontClassName={syne.className} />;
}
