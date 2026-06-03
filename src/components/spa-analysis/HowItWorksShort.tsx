export function HowItWorksShort() {
  return (
    <section className="py-20 sm:py-28 bg-surface/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Getting cleaner spa water is simpler than you think.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Book Your Analysis",
              description:
                "Schedule a free, no-obligation spa analysis with one of our certified specialists.",
            },
            {
              step: "02",
              title: "Professional Installation",
              description:
                "Our certified technicians install the Fusion 44X system inline with your existing spa plumbing in just a few hours.",
            },
            {
              step: "03",
              title: "Enjoy Cleaner Water",
              description:
                "Experience softer, clearer spa water without the harsh chemicals. Maintenance is reduced to simple acid checks.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:border-accent/30"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent font-serif text-xl font-bold mx-auto">
                {item.step}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-foreground-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
