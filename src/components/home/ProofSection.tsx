import Link from "next/link";

export function ProofSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,133,43,0.06)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
              Proof & Validation
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Tested. Patented.{" "}
              <span className="text-accent">Proven.</span>
            </h2>
            <p className="mt-4 text-foreground-secondary leading-relaxed">
              The Fusion 44X system is backed by independent testing,
              patented technology, and real-world installations. We believe
              in transparency and want you to feel confident in your
              decision.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                {
                  title: "Independent Laboratory Testing",
                  description:
                    "Tested against drinking-water quality benchmarks for safety and performance.",
                },
                {
                  title: "US Patented Technology",
                  description:
                    "Our proprietary water treatment process is protected by multiple US patents.",
                },
                {
                  title: "Thousands of Installations",
                  description:
                    "Trusted by homeowners across the southwestern United States.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-foreground-secondary mt-1">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/science-lab-results"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              View lab results & documentation
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
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                number: "15+",
                label: "Years Development",
              },
              {
                number: "10K+",
                label: "Systems Installed",
              },
              {
                number: "99.9%",
                label: "Satisfaction Rate",
              },
              {
                number: "Lifetime",
                label: "Warranty Coverage",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:border-accent/30"
              >
                <p className="font-serif text-3xl font-bold text-accent">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs text-foreground-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
