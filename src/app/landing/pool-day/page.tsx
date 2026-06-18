import type { Metadata } from "next";

import PoolDayLanding from "@/components/landing/PoolDayLanding";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Fusion44x Pool Day Landing",
  description:
    "A bright, Pool Day-inspired Fusion44x landing page focused on simple shopping, clear product cards, and real pool and spa systems.",
  alternates: {
    canonical: `${siteConfig.url}/landing/pool-day`,
  },
  openGraph: {
    title: "Fusion44x Pool Day Landing",
    description:
      "Bright, product-first Fusion44x landing page inspired by Pool Day's simple shopping flow.",
    url: `${siteConfig.url}/landing/pool-day`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fusion44x Pool Day Landing",
    description:
      "Bright, product-first Fusion44x landing page inspired by Pool Day's simple shopping flow.",
  },
};

export default function PoolDayLandingPage() {
  return <PoolDayLanding />;
}
