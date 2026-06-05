import type { Metadata } from "next";
import Link from "next/link";
import { products, checkoutHref } from "@/lib/products";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View Fusion 44X pricing for spa, Jacuzzi, and residential pool water treatment systems.",
};

export default function PricingPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Pricing"
          subtitle="Current product pricing with checkout links that can be pointed to your preferred purchase platform later."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className={`relative rounded-lg border ${
                product.featured
                  ? "border-accent/30 bg-accent/5"
                  : "border-white/10 bg-white/5"
              } p-8 transition-colors hover:border-accent/40`}
            >
              {product.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-accent px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  Popular
                </div>
              )}
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {product.shortName}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-foreground">
                {product.name}
              </h2>
              <p className="mt-2 text-sm text-foreground-secondary">
                {product.volume}
              </p>
              <p className="mt-8 text-4xl font-bold text-accent">
                {product.price}
              </p>
              <p className="mt-2 text-sm text-foreground-secondary">
                {product.financing}
              </p>
              <ul className="mt-8 space-y-3">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground-secondary"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
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
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={checkoutHref(product.id)}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40"
                >
                  Purchase
                </Link>
                <Link
                  href="/free-spa-analysis"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                >
                  Get Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-lg border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm text-foreground-secondary">
            Professional installation, warranty coverage, and system setup are
            handled during checkout or consultation based on your pool or spa
            configuration.
          </p>
        </div>
      </div>
    </div>
  );
}
