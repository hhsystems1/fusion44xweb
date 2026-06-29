import type { Metadata } from "next";
import Link from "next/link";

import { FinancingApplicationForm } from "@/components/forms/FinancingApplicationForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Apply for Financing | Fusion 44X",
  description:
    "Apply for financing for your Fusion 44X pool or spa system and send the request into CRM 2.1.",
  alternates: {
    canonical: `${siteConfig.url}/apply-financing`,
  },
  openGraph: {
    title: "Apply for Financing | Fusion 44X",
    description:
      "A focused financing application page for pool and spa buyers.",
    url: `${siteConfig.url}/apply-financing`,
    type: "website",
  },
};

export default function ApplyFinancingPage() {
  return (
    <main className="bg-[linear-gradient(180deg,#f4fbff_0%,#ffffff_50%,#eef7ff_100%)] px-4 py-16 text-[#071832] sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <section className="max-w-2xl">
          <div className="inline-flex rounded-full border border-[#0757c7]/15 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#0757c7] shadow-sm">
            Financing application
          </div>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl">
            Apply for financing without leaving the pricing flow.
          </h1>
          <p className="mt-6 max-w-xl text-lg font-bold leading-8 text-[#052f78]">
            Give us a few details and we&apos;ll send the application to CRM 2.1 so the team can
            follow up with the next step.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-[#0757c7]/25 bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#052f78] transition hover:border-[#0757c7]/50 hover:text-[#0757c7]"
            >
              Back to pricing
            </Link>
          </div>
        </section>

        <FinancingApplicationForm />
      </div>
    </main>
  );
}
