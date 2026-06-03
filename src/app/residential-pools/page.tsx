import type { Metadata } from "next";
import Link from "next/link";
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
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
              For Pools
            </div>
            <h2 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Pool Water, Reimagined
            </h2>
            <p className="text-foreground-secondary leading-relaxed mb-6">
              The Fusion 44X residential pool system works inline with your
              existing pool plumbing to treat water without adding chlorine,
              salt, or sanitizer chemicals. The result is cleaner, softer
              water that is gentler on your skin, eyes, and equipment.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Designed for in-ground and above-ground pools",
                "No chlorine, salt, or sanitizer chemicals added to the water",
                "Reduces pool maintenance significantly",
                "Compatible with existing pool equipment",
                "Backed by patented technology",
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
            <Link
              href="/free-spa-analysis"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40"
            >
              Get a Free Analysis
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 aspect-square flex items-center justify-center">
            <div className="text-center">
              <svg
                className="mx-auto h-24 w-24 text-accent/60 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
              <p className="text-sm text-foreground-secondary">
                Fusion 44X Pool System
              </p>
              <p className="text-xs text-foreground-secondary mt-1">
                Product image placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
