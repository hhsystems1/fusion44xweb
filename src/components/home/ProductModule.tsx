export function ProductModule() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 backdrop-blur-xl p-8">
              <div className="flex h-full w-full items-center justify-center rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-accent/10 border border-accent/20">
                    <svg className="h-14 w-14 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <p className="text-sm text-foreground-secondary">Fusion 44X Unit</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
              The Technology
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              What the{" "}
              <span className="text-accent">Fusion 44X</span> Does
            </h2>
            <p className="mt-4 text-foreground-secondary leading-relaxed">
              The Fusion 44X system uses a patented contained process inside the
              unit to treat your pool or spa water. No chlorine, salt, or
              sanitizer chemicals are added to the water. The system installs
              inline with your existing plumbing and works automatically to
              maintain clean, clear, soft water.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Eliminates the need for added chlorine and sanitizer chemicals",
                "Reduces maintenance to simple acid checks twice a month",
                "Works with existing pool and spa plumbing",
                "Backed by patented technology and quality testing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground-secondary">
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
          </div>
        </div>
      </div>
    </section>
  );
}
