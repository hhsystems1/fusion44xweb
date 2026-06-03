import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Spa & Jacuzzi Products",
  description:
    "Explore Fusion 44X spa and Jacuzzi water treatment systems. Chlorine-free, salt-free, chemical-free water for your spa.",
};

export default function ProductsPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Fusion 44X Spa Systems"
          subtitle="Premium water treatment for spas, hot tubs, and Jacuzzis."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            {
              name: "Fusion 44X Spa",
              tagline: "For standard residential spas",
              features: [
                "Designed for spas up to 500 gallons",
                "Compact inline installation",
                "No chlorine, salt, or sanitizer chemicals added",
                "Low maintenance — acid check twice monthly",
              ],
              cta: "Learn More",
            },
            {
              name: "Fusion 44X Pro",
              tagline: "For larger spas and commercial use",
              features: [
                "Handles spas up to 1,500 gallons",
                "Enhanced flow rate for commercial applications",
                "Heavy-duty construction",
                "Extended warranty coverage",
              ],
              cta: "Learn More",
              featured: true,
            },
            {
              name: "Fusion 44X Dual",
              tagline: "For pool & spa combinations",
              features: [
                "Treats both pool and spa simultaneously",
                "Independent flow control",
                "Single unit for whole-property coverage",
                "Most cost-effective for combined systems",
              ],
              cta: "Learn More",
            },
          ].map((product) => (
            <div
              key={product.name}
              className={`relative rounded-2xl border ${
                product.featured
                  ? "border-accent/30 bg-accent/5"
                  : "border-white/10 bg-white/5"
              } backdrop-blur-xl p-8 transition-all duration-300 hover:border-accent/30`}
            >
              {product.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[10px] font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-xs text-foreground-secondary mb-6">
                {product.tagline}
              </p>
              <ul className="space-y-3 mb-8">
                {product.features.map((f) => (
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
                  product.featured
                    ? "bg-gradient-to-r from-accent to-accent-hover text-white shadow-lg shadow-accent/30"
                    : "border border-white/20 text-foreground hover:border-accent/50 hover:text-accent"
                } px-6 py-3 text-xs font-semibold transition-all duration-300`}
              >
                {product.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
