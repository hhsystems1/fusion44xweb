import Link from "next/link";

export function SAHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,133,43,0.1)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-6">
            Free Spa Analysis
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Stop Buying{" "}
            <span className="text-accent">Chemicals</span>
          </h1>
          <p className="mt-6 text-lg text-foreground-secondary leading-relaxed max-w-2xl mx-auto">
            Discover how much you could save by switching to the Fusion 44X
            chlorine-free spa water system. No salt, no sanitizer chemicals
            added to your water. Just cleaner, softer spa water with less
            maintenance.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/pool-analysis"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 active:scale-100"
            >
              Get My Free Spa Analysis
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-foreground-secondary">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              No obligation
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Free consultation
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Lifetime warranty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
