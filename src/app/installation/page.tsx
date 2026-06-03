import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Installation",
  description:
    "Learn about the Fusion 44X installation process. Professional installation by certified technicians. Compatible with most pool and spa systems.",
};

export default function InstallationPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Installation Process"
          subtitle="Professional installation by certified technicians. Fast, clean, and hassle-free."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Site Evaluation",
                desc: "Our certified technician visits your property to assess your spa or pool setup and determine the optimal installation location.",
              },
              {
                step: "2",
                title: "Installation",
                desc: "The Fusion 44X unit is installed inline with your existing plumbing. The process typically takes 2-4 hours for most residential installations.",
              },
              {
                step: "3",
                title: "System Setup",
                desc: "We configure the system for your specific water volume and flow rate, then verify everything is operating correctly.",
              },
              {
                step: "4",
                title: "Walkthrough",
                desc: "We show you how to monitor your system, explain the minimal maintenance required, and answer any questions.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-serif font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs text-foreground-secondary leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Compatibility
              </h3>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  In-ground and above-ground pools
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Spas, hot tubs, and Jacuzzis
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Pool and spa combinations
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Works with most existing equipment
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Maintenance
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed mb-4">
                The Fusion 44X system is designed for minimal maintenance.
                The primary ongoing task is monitoring and adjusting pH
                balance, which typically requires acid about twice a month.
              </p>
              <ul className="space-y-2 text-sm text-foreground-secondary">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  No chemical additions needed
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Simple acid pH adjustment only
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Annual system check recommended
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Link
                href="/free-spa-analysis"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40"
              >
                Schedule Installation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
