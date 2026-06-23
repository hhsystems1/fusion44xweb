import type { Metadata } from "next";

import VideoSalesLanding from "@/components/landing/VideoSalesLanding";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Fusion44x Video Sales Letter",
  description:
    "Premium video-first landing page for Fusion44x with a clear route to the form or pricing.",
  alternates: {
    canonical: `${siteConfig.url}/landing/youtube-vsl`,
  },
  openGraph: {
    title: "Fusion44x Video Sales Letter",
    description: "Premium video-first landing page for Fusion44x with a clear route to the form or pricing.",
    url: `${siteConfig.url}/landing/youtube-vsl`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion44x Video Sales Letter",
    description: "Premium video-first landing page for Fusion44x with a clear route to the form or pricing.",
  },
};

export default function YoutubeVslLandingPage() {
  return <VideoSalesLanding />;
}
