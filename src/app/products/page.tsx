import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, checkoutHref } from "@/lib/products";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Fusion 44X spa, Jacuzzi, and residential pool systems with provider-neutral purchase links ready for checkout integration.",
};

export default function ProductsPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Fusion 44X Products"
          subtitle="Two core systems cover spas, Jacuzzis, and residential pools without adding chlorine, salt, or sanitizer chemicals to the water."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className={`overflow-hidden rounded-lg border ${
                product.featured
                  ? "border-accent/30 bg-accent/5"
                  : "border-white/10 bg-white/5"
              } transition-colors hover:border-accent/40`}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                      {product.shortName}
                    </p>
                    <h2 className="mt-2 font-serif text-2xl font-bold text-foreground">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      {product.volume}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-3xl font-bold text-accent">
                      {product.price}
                    </p>
                    <p className="mt-1 text-xs text-foreground-secondary">
                      {product.financing}
                    </p>
                  </div>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
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
                    Free Analysis
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
