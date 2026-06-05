import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function LifestyleSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience Water the Way Nature Intended"
          subtitle="Step into clean, soft water without the harsh smell and feel of traditional chlorine maintenance."
        />
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[24rem] overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/fusion-swim-lifestyle.jpeg"
              alt="Clear pool water in a private outdoor setting"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-0 max-w-xl p-6 sm:p-8">
              <p className="text-sm font-semibold text-white">
                Built for daily use
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Fusion 44X is designed for the real pool and spa routines that
                homeowners repeat every week: cleaner water, less handling, and
                fewer maintenance decisions.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              {
                title: "Gentle on Skin & Eyes",
                description:
                  "No red eyes, no dry skin, no chemical smell. Just clean, soft water that feels as good as it looks.",
              },
              {
                title: "Better for Equipment",
                description:
                  "Reducing harsh chemical handling helps protect covers, pumps, heaters, and nearby surfaces.",
              },
              {
                title: "Lower Routine Load",
                description:
                  "Routine care moves toward periodic acid checks and system monitoring instead of daily chemical guesswork.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:border-accent/30"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
