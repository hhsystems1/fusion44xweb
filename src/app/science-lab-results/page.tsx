import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Science & Lab Results",
  description:
    "View independent lab testing results, patent information, and safety documentation for the Fusion 44X water treatment system.",
};

export default function ScienceLabResultsPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Science & Lab Results"
          subtitle="Independent testing, patent documentation, and safety data for the Fusion 44X system."
        />
        <div className="mt-12 space-y-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
              Independent Laboratory Testing
            </h3>
            <p className="text-sm text-foreground-secondary leading-relaxed mb-4">
              The Fusion 44X system has been tested by independent
              laboratories to verify its performance and safety. Water
              quality has been evaluated against drinking-water quality
              benchmarks to ensure it meets rigorous safety standards.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs text-foreground-secondary">
                <span className="text-accent font-medium">Note:</span> Full
                lab reports are available upon request. Contact us for
                detailed documentation specific to your application.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
              Patented Technology
            </h3>
            <p className="text-sm text-foreground-secondary leading-relaxed mb-4">
              The Fusion 44X water treatment process is protected by
              multiple US patents. Our technology represents years of
              research and development in non-chemical water treatment.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs text-foreground-secondary">
                <span className="text-accent font-medium">Patent Info:</span>{" "}
                US patent numbers available upon request. The Fusion 44X
                system uses a proprietary contained process for water
                treatment.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
              Safety & Quality
            </h3>
            <p className="text-sm text-foreground-secondary leading-relaxed mb-4">
              The Fusion 44X system is designed with safety as a priority.
              Water treated by the system has been evaluated against
              established water quality benchmarks. The system does not add
              chlorine, salt, or sanitizer chemicals to the water.
            </p>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Tested against water quality benchmarks
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                No added chlorine, salt, or sanitizer chemicals
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Patented contained process
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Quality tested during manufacturing
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
              Documentation
            </h3>
            <p className="text-sm text-foreground-secondary leading-relaxed mb-4">
              We believe in transparency. Below is a list of available
              documentation. Contact us to request copies.
            </p>
            <ul className="space-y-3">
              {[
                "Independent lab test results",
                "Patent documentation",
                "Installation manual",
                "Warranty information",
                "Safety data sheets",
              ].map((doc) => (
                <li
                  key={doc}
                  className="flex items-center gap-3 text-sm text-foreground-secondary"
                >
                  <svg
                    className="h-4 w-4 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  {doc}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="mailto:info@fusion44x.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                Request Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
