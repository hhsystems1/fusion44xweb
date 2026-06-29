import type { Metadata } from "next";
import Link from "next/link";

import { DistributorApplicationForm } from "@/components/forms/DistributorApplicationForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Become a Distributor | Fusion 44X",
  description:
    "Apply to become a Fusion 44X distributor and send your application into CRM 2.1.",
  alternates: {
    canonical: `${siteConfig.url}/become-a-distributor`,
  },
  openGraph: {
    title: "Become a Distributor | Fusion 44X",
    description:
      "Distributor application page for partners interested in representing Fusion 44X.",
    url: `${siteConfig.url}/become-a-distributor`,
    type: "website",
  },
};

const points = [
  "Built for dealers, installers, and regional partners",
  "Applications are routed to CRM 2.1 for review",
  "Keep territory, volume, and business fit in one place",
] as const;

export default function BecomeDistributorPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#03142e_0%,#0a1e45_34%,#f4fbff_34%,#ffffff_100%)] px-4 pb-16 pt-10 text-[#071832] sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[2.5rem] bg-white/96 p-6 shadow-[0_28px_100px_rgba(2,6,23,0.18)] ring-1 ring-white/60 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
          <section className="max-w-2xl">
            <div className="inline-flex rounded-full border border-[#0757c7]/15 bg-[#eef5ff] px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#0757c7]">
              Distributor application
            </div>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#071832] sm:text-6xl">
              Become a Fusion 44X distributor.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-bold leading-8 text-[#052f78]">
              Tell us who you are, what market you cover, and how you want to work with us. We&apos;ll
              send the application into CRM 2.1 for review.
            </p>

            <div className="mt-8 grid gap-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[#0757c7]/12 bg-[#f4fbff] px-4 py-4 text-sm font-bold text-[#052f78]"
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-[#0757c7]/25 bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#052f78] transition hover:border-[#0757c7]/50 hover:text-[#0757c7]"
              >
                View pricing
              </Link>
            </div>
          </section>

          <DistributorApplicationForm />
        </div>
      </div>
    </main>
  );
}
