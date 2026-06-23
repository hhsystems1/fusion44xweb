import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { checkoutHref, products } from "@/lib/products";
import { faqs, howItWorksSteps, testimonials, trustFeatures } from "@/lib/constants";

function BackgroundAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.14),transparent_26%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.08),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.2),rgba(2,6,23,0.94))]" />
      <div className="absolute left-[-7rem] top-16 h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl animate-[f44xDrift_14s_ease-in-out_infinite]" />
      <div className="absolute right-[-6rem] top-1/4 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl animate-[f44xDrift_16s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-[-8rem] left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl animate-[f44xPulse_12s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
    </div>
  );
}

function SectionFrame({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/75">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
            {subtitle}
          </p>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function HomeNeo() {
  return (
    <main className="relative isolate overflow-hidden bg-slate-950 text-white">
      <BackgroundAtmosphere />

      <section className="relative px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur-xl">
              Fusion44x alt home concept
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              A darker, sharper home page for the same product.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              This concept keeps the Fusion44x facts intact, but presents them in
              a split-panel, dashboard-style layout with neon accents, signal
              cards, and a more editorial feel.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={checkoutHref("fusion-residential-pool")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/35 bg-[linear-gradient(135deg,rgba(14,165,233,0.95),rgba(34,211,238,0.8),rgba(16,185,129,0.92))] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(14,165,233,0.24)] transition duration-300 hover:-translate-y-0.5"
              >
                Purchase Pool System
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white/92 backdrop-blur-xl transition duration-300 hover:border-cyan-300/30 hover:bg-white/10"
              >
                View original home
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: "Neon", label: "dashboard accents" },
                { value: "Split", label: "hero composition" },
                { value: "Clear", label: "comparison path" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl"
                >
                  <p className="text-2xl font-semibold tracking-tight text-white">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(8,15,29,0.96),rgba(2,6,23,0.98))] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.68)]">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
                      Signal board
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      The same product, presented like a control room.
                    </p>
                  </div>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                    Live concept
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    { value: "2", label: "product lanes" },
                    { value: "4", label: "trust signals" },
                    { value: "1", label: "clear next step" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-4"
                    >
                      <p className="text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
                      <p className="mt-1 text-sm text-white/68">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/50">
                  <video
                    className="aspect-[4/5] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/fusion-family-pool.jpeg"
                  >
                    <source src="/0604-1.mov" type="video/quicktime" />
                    <source src="/0604-1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Water outcome",
                      text: "Cleaner-feeling water without the flat brochure look.",
                    },
                    {
                      title: "Decision path",
                      text: "The route to buy or analyze is obvious from the first scroll.",
                    },
                    {
                      title: "Mood",
                      text: "Dark navy, teal glow, and a central signal lattice.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl"
                    >
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-4">
          {trustFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-colors hover:border-cyan-300/25"
            >
              <p className="text-sm font-semibold text-white">{feature.title}</p>
              <p className="mt-2 text-sm leading-6 text-white/68">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionFrame
        eyebrow="Product lanes"
        title="Same product facts, different visual language."
        subtitle="This version keeps the current pricing and product data, but packages it with tighter contrast and stronger panel symmetry."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`overflow-hidden rounded-[1.75rem] border ${
                index === 1
                  ? "border-cyan-300/25 bg-[linear-gradient(180deg,rgba(8,15,29,0.92),rgba(2,6,23,0.98))]"
                  : "border-white/10 bg-white/5"
              } backdrop-blur-xl`}
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-64">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.75))]" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
                    {product.shortName}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/68">{product.volume}</p>
                  <p className="mt-5 text-4xl font-semibold tracking-tight text-white">
                    {product.price}
                  </p>
                  <p className="mt-2 text-sm text-cyan-100/80">{product.financing}</p>
                  <ul className="mt-5 space-y-2">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-white/78">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={checkoutHref(product.id)}
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:bg-cyan-400/18"
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow="Process"
        title="Keep the steps, change the stage."
        subtitle="The old homepage tells the story cleanly. This one tells it like a live system."
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(2,6,23,0.98))] p-5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 text-lg font-semibold text-cyan-100">
                {step.step}
              </div>
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/68">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow="Proof"
        title="Keep the proof, remove the brochure crust."
        subtitle="The testimonial and FAQ content stays the same, but the framing is tighter and more editorial."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="rounded-[1.75rem] border border-cyan-300/15 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
              Questions
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              FAQ in a darker frame
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/72">
              The answers are the same ones the current site uses. The difference
              here is just the visual rhythm and contrast.
            </p>
            <div className="mt-6">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </SectionFrame>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(2,6,23,0.98))] p-8 text-center shadow-[0_30px_100px_rgba(2,6,23,0.72)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/80">
            Compare both
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Keep the original. Keep the alternate. Let the owner pick.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
            The point is not to throw away the existing design. It is to give
            Fusion44x two serious directions that can be compared side by side.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300/35 hover:bg-white/10"
            >
              View original home
            </Link>
            <Link
              href={checkoutHref("fusion-residential-pool")}
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/12 px-6 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:bg-cyan-400/18"
            >
              Purchase Pool System
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
