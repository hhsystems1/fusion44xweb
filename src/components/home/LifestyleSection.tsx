import { SectionHeading } from "@/components/shared/SectionHeading";

export function LifestyleSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,133,43,0.06)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience Water the Way Nature Intended"
          subtitle="Imagine stepping into your pool or spa knowing the water is clean, soft, and free from the harsh effects of chlorine and chemical additives. That's the Fusion 44X difference."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Gentle on Skin & Eyes",
              description:
                "No red eyes, no dry skin, no chemical smell. Just clean, soft water that feels as good as it looks.",
              icon: "heart",
            },
            {
              title: "Better for Your Spa Equipment",
              description:
                "Without harsh chemicals, your spa covers, pumps, and heaters last longer and perform better.",
              icon: "shield",
            },
            {
              title: "Environmentally Conscious",
              description:
                "Reduce chemical runoff and plastic waste from chemical containers. A cleaner choice for your home and the planet.",
              icon: "sparkles",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-white/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {item.icon === "heart" && (
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  )}
                  {item.icon === "shield" && (
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  )}
                  {item.icon === "sparkles" && (
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  )}
                </svg>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
