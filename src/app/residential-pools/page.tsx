import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { checkoutHref } from "@/lib/products";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Residential Pool Systems",
  description:
    "Fusion 44X residential pool water treatment. A chlorine-free pool system designed to reduce harsh chemical maintenance.",
};

export default function ResidentialPoolsPage() {
  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Residential Pool Systems"
          subtitle="A chlorine-free approach to pool water care. Fewer chemicals, less maintenance, better swimming."
        />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
              For 5,000-28,000 gallon pools
            </div>
            <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
              Fusion Residential Pool
            </h2>
            <p className="mb-2 text-3xl font-bold text-accent">$5,890</p>
            <p className="mb-6 text-sm text-foreground-secondary">
              As low as $99/month with financing
            </p>
            <p className="mb-6 leading-relaxed text-foreground-secondary">
              The Fusion 44X residential pool system works inline with your
              existing pool plumbing to treat water without adding chlorine,
              salt, or sanitizer chemicals. The result is cleaner, softer water
              that is gentler on skin, eyes, and equipment.
            </p>
            <ul className="mb-8 space-y-3">
              {[
                "Designed for in-ground and above-ground residential pools",
                "No chlorine, salt, or sanitizer chemicals added to the water",
                "Reduces pool maintenance significantly",
                "Compatible with existing pool equipment",
                "Lifetime warranty and 30-day money-back guarantee",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground-secondary"
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
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href={checkoutHref("fusion-residential-pool")}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40"
              >
                Purchase Pool System
              </Link>
              <Link
                href="/free-spa-analysis"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                Get a Free Analysis
              </Link>
            </div>
          </div>
          <div className="relative min-h-[18rem] sm:min-h-[30rem] overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/poolex4.webp"
              alt="Residential pool with Fusion 44X installed"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-6">
              <p className="text-sm font-semibold text-white">
                Installed residential pool
              </p>
              <p className="mt-1 text-xs text-white/70">
                Existing customer pool with Fusion 44X installed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
