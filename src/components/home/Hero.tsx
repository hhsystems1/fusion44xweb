import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,133,43,0.08)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              Patented Water Technology
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Chlorine-Free Pool{" "}
              <span className="text-accent">&amp; Spa</span> Water Systems
            </h1>
            <p className="mt-6 text-base text-foreground-secondary leading-relaxed sm:text-lg max-w-lg">
              A smarter water care system designed to reduce harsh chemical
              maintenance. Experience cleaner, softer water without chlorine,
              salt, or sanitizer chemicals added to your pool or spa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/free-spa-analysis"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 active:scale-100"
              >
                Get Your Free Spa Analysis
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/discover-fusion-44x/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/50 hover:text-accent"
              >
                How It Works
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-foreground-secondary">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Lifetime Warranty
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Low Maintenance
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Professional Installation
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-[2rem] border border-white/10 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 backdrop-blur-xl p-8">
              <div className="flex h-full w-full items-center justify-center rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                    <svg className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground-secondary">Fusion 44X Unit</p>
                  <p className="text-xs text-foreground-secondary mt-1">Product image placeholder</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-surface/80 backdrop-blur-xl p-4">
              <p className="text-xs font-medium text-foreground">Tested against quality benchmarks</p>
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl border border-accent/20 bg-accent/10 backdrop-blur-xl p-4">
              <p className="text-xs font-medium text-accent">US Patented Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
