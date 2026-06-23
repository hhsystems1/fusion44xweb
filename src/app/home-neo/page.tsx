import type { Metadata } from "next";

import HomeNeo from "@/components/home/HomeNeo";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Fusion 44X Home - Neo Reference Board",
  description:
    "An alternate Fusion44x homepage concept built as an image-led reference board so the owner can compare it against the original home design.",
  alternates: {
    canonical: `${siteConfig.url}/home-neo`,
  },
  openGraph: {
    title: "Fusion 44X Home - Neo Reference Board",
    description:
      "An alternate Fusion44x homepage concept built as an image-led reference board so the owner can compare it against the original home design.",
    url: `${siteConfig.url}/home-neo`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion 44X Home - Neo Reference Board",
    description:
      "An alternate Fusion44x homepage concept built as an image-led reference board so the owner can compare it against the original home design.",
  },
};

export default function HomeNeoPage() {
  return <HomeNeo />;
}
