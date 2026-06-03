import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View Fusion 44X pricing for spa and pool water treatment systems. Contact us for a free customized quote.",
};

export default function PricingPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Pricing"
          subtitle="Transparent pricing for Fusion 44X systems. Contact us for a free customized quote."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            {
              name: "Spa System",
              price: "Contact for Quote",
              tagline: "Perfect for residential spas",
              features: [
                "Fusion 44X Spa Unit",
                "Professional installation",
                "Lifetime warranty",
                "System setup & walkthrough",
                "Customer support",
              ],
            },
            {
              name: "Pool System",
              price: "Contact for Quote",
              tagline: "For in-ground and above-ground pools",
              features: [
                "Fusion 44X Pool Unit",
                "Professional installation",
                "Lifetime warranty",
                "System setup & walkthrough",
                "Customer support",
              ],
              featured: true,
            },
            {
              name: "Dual System",
              price: "Contact for Quote",
              tagline: "For pool & spa combinations",
              features: [
                "Fusion 44X Dual Unit",
                "Professional installation",
                "Lifetime warranty",
                "System setup & walkthrough",
                "Priority customer support",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.featured
                  ? "border-accent/30 bg-accent/5"
                  : "border-white/10 bg-white/5"
              } backdrop-blur-xl p-8 transition-all duration-300 hover:border-accent/30`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[10px] font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-xs text-foreground-secondary mb-4">
                {plan.tagline}
              </p>
              <p className="text-2xl font-bold text-accent mb-6">
                {plan.price}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs text-foreground-secondary"
                  >
                    <svg
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/free-spa-analysis"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full ${
                  plan.featured
                    ? "bg-gradient-to-r from-accent to-accent-hover text-white shadow-lg shadow-accent/30"
                    : "border border-white/20 text-foreground hover:border-accent/50 hover:text-accent"
                } px-6 py-3 text-xs font-semibold transition-all duration-300`}
              >
                Get a Free Quote
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
          <p className="text-sm text-foreground-secondary">
            Pricing varies based on system configuration, water volume, and
            installation requirements. Contact us for a free, no-obligation
            quote tailored to your specific needs.
          </p>
        </div>
      </div>
    </div>
  );
}
