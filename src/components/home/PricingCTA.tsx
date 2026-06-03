import Link from "next/link";

export function PricingCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,133,43,0.08)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Transform Your Water?
        </h2>
        <p className="mt-4 text-foreground-secondary mx-auto max-w-xl">
          Get your personalized spa analysis and discover how much you can save
          by switching to Fusion 44X. No obligation, just clarity.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/free-spa-analysis"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 active:scale-100"
          >
            Book Your Free Spa Analysis
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/50 hover:text-accent"
          >
            View Pricing
          </Link>
        </div>
        <p className="mt-6 text-xs text-foreground-secondary">
          Lifetime warranty included. Professional installation available.
        </p>
      </div>
    </section>
  );
}
