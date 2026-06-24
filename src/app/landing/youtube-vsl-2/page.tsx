import type { Metadata } from "next";

import YoutubeVsl2Landing from "@/components/landing/YoutubeVsl2Landing";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Fusion44x YouTube VSL 2",
  description:
    "Bright, health-focused Fusion44x video sales landing page for chlorine-free, hydrogen-rich pool water.",
  alternates: {
    canonical: `${siteConfig.url}/landing/youtube-vsl-2`,
  },
  openGraph: {
    title: "Fusion44x YouTube VSL 2",
    description:
      "Bright, health-focused Fusion44x video sales landing page for chlorine-free, hydrogen-rich pool water.",
    url: `${siteConfig.url}/landing/youtube-vsl-2`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion44x YouTube VSL 2",
    description:
      "Bright, health-focused Fusion44x video sales landing page for chlorine-free, hydrogen-rich pool water.",
  },
};

export default function YoutubeVsl2LandingPage() {
  return <YoutubeVsl2Landing />;
}
