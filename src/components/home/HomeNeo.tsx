"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { checkoutHref, products } from "@/lib/products";
import { faqs, testimonials, trustFeatures } from "@/lib/constants";

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/75">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-white/76 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_20%_18%,rgba(14,165,233,0.14),transparent_24%),radial-gradient(circle_at_78%_10%,rgba(16,185,129,0.10),transparent_22%),linear-gradient(180deg,rgba(2,6,23,0.2),rgba(2,6,23,0.96))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="absolute left-[-8rem] top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl animate-[f44xDrift_14s_ease-in-out_infinite]" />
      <div className="absolute right-[-7rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-400/8 blur-3xl animate-[f44xDrift_18s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-[-8rem] left-1/2 h-[26rem] w-[52rem] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl animate-[f44xPulse_12s_ease-in-out_infinite]" />
    </div>
  );
}

function BoardTile({
  title,
  subtitle,
  image,
  imageAlt,
  className = "",
  compact = false,
}: {
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] shadow-[0_18px_60px_rgba(2,6,23,0.5)]",
        className,
      ].join(" ")}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 1024px) 50vw, 18vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.82))]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_42%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.98))]" />
      )}

      <div className="relative flex h-full flex-col justify-end p-4">
        <p
          className={[
            "font-semibold text-white",
            compact ? "text-sm" : "text-base",
          ].join(" ")}
        >
          {title}
        </p>
        <p className="mt-1 text-xs leading-5 text-white/70">{subtitle}</p>
      </div>
    </div>
  );
}

function MetricTile({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(8,15,29,0.96),rgba(2,6,23,0.98))] p-5">
      <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/76">
        {label}
      </p>
      <p className="mt-3 text-sm leading-6 text-white/72">{note}</p>
    </div>
  );
}

function SectionBlock({
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
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function HomeNeo() {
  const pictureBoard = [
    {
      title: "Hero frame",
      subtitle: "One strong opening image, not a pile of noise.",
      image: "/poolex4.webp",
      imageAlt: "Residential pool with Fusion 44X installed",
      className: "aspect-[4/3] lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Proof frame",
      subtitle: "A real-life shot that feels lived in.",
      image: "/fusion-family-pool.jpeg",
      imageAlt: "Family by the pool with Fusion 44X installed",
      className: "aspect-[4/3]",
    },
    {
      title: "Install frame",
      subtitle: "Show the product in context, not as a floating gimmick.",
      image: "/fusion-spa-install.jpg",
      imageAlt: "Fusion 44X spa installation",
      className: "aspect-[4/3]",
    },
    {
      title: "Lifestyle frame",
      subtitle: "Make the water feel like a better place to be.",
      image: "/fusion-swim-lifestyle.jpeg",
      imageAlt: "Person enjoying a swim in a Fusion 44X pool",
      className: "aspect-[4/3]",
    },
    {
      title: "Process frame",
      subtitle: "Keep one clean visual for how the system works.",
      image: "/fusion-clear-pool.jpg",
      imageAlt: "Clear pool water treated by Fusion 44X",
      className: "aspect-[4/3]",
    },
    {
      title: "Board rule",
      subtitle: "Every tile should earn its place.",
      className: "aspect-[4/3]",
    },
    {
      title: "Board rule",
      subtitle: "No generic SaaS cards pretending to be strategy.",
      className: "aspect-[4/3]",
    },
    {
      title: "Board rule",
      subtitle: "Let the owner compare structure, imagery, and tone.",
      className: "aspect-[4/3]",
    },
    {
      title: "Board rule",
      subtitle: "The old home stays live; this is the alternate path.",
      className: "aspect-[4/3]",
    },
  ];

  return (
    <main className="relative isolate overflow-hidden bg-slate-950 text-white">
      <Atmosphere />

      <section className="relative px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 backdrop-blur-xl">
              Built from the 9-picture source set
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              A compare page that looks like a real editorial board, not a template.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              The original home stays intact. This alternate version uses actual
              product and lifestyle imagery, a tighter image-led layout, and a
              contact-sheet feel so the owner can judge the design direction
              instead of staring at the same brochure page in different clothes.
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
              <MetricTile
                value="9"
                label="reference tiles"
                note="A board-like layout that makes the source set visible instead of buried."
              />
              <MetricTile
                value="2"
                label="paths to compare"
                note="Original design and alternate concept stay side by side."
              />
              <MetricTile
                value="1"
                label="clear judgment"
                note="The owner can decide which visual language feels right."
              />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(8,15,29,0.96),rgba(2,6,23,0.99))] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.7)]">
              <div className="mb-4 flex items-center justify-between gap-3 px-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/75">
                    Contact sheet
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Image-first layout for the alternate home.
                  </p>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  Neo concept
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
                {pictureBoard.map((tile) => (
                  <BoardTile key={tile.title + tile.subtitle} {...tile} />
                ))}
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

      <SectionBlock
        eyebrow="What the board changes"
        title="Different stage, different rhythm, same product."
        subtitle="This version is intentionally less brochure-like. It is built so the owner can compare visual language, not just copy tone."
      >
        <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.98))] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/75">
              Original home
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Clean, familiar, direct.
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/72">
              The existing home still does the standard product-story job: hero,
              proof, product, process, testimonials, and CTA.
            </p>
          </div>
          <div className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(8,15,29,0.98),rgba(15,23,42,0.94))] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/75">
              Neo home
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Image-led, board-like, more deliberate.
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/72">
              The alternate version pushes imagery and composition first, then
              lets the copy sit underneath the visuals instead of forcing the
              page to behave like a generic SaaS landing template.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Product imagery"
        title="Use the real media assets as the visual backbone."
        subtitle="The alternate home should feel grounded in the product and the lifestyle shots already in the repo."
      >
        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <div className="grid gap-4 p-4 sm:grid-cols-2">
              {products.map((product, index) => (
                <article
                  key={product.id}
                  className={`overflow-hidden rounded-[1.5rem] border ${
                    index === 1
                      ? "border-cyan-300/20 bg-[linear-gradient(180deg,rgba(8,15,29,0.96),rgba(2,6,23,0.98))]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 36vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.8))]" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/75">
                      {product.shortName}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/68">{product.volume}</p>
                    <p className="mt-5 text-4xl font-semibold tracking-tight text-white">
                      {product.price}
                    </p>
                    <p className="mt-2 text-sm text-cyan-100/80">{product.financing}</p>
                    <Link
                      href={checkoutHref(product.id)}
                      className="mt-6 inline-flex items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:bg-cyan-400/18"
                    >
                      Purchase
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <BoardTile
              title="Lifestyle image"
              subtitle="The pool shot should read like something people want to be in."
              image="/fusion-swim-lifestyle.jpeg"
              imageAlt="Lifestyle swim image"
              className="aspect-[16/11]"
            />
            <BoardTile
              title="Installation image"
              subtitle="The install shot should reinforce trust and real-world use."
              image="/fusion-spa-install.jpg"
              imageAlt="Spa installation image"
              className="aspect-[16/11]"
            />
            <BoardTile
              title="Clear-water image"
              subtitle="The result photo should do most of the heavy lifting."
              image="/fusion-clear-pool.jpg"
              imageAlt="Clear pool image"
              className="aspect-[16/11]"
            />
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Working rules"
        title="A better homepage needs better rules, not louder copy."
        subtitle="These are the design choices that keep the alternate home from collapsing back into a generic template."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold text-white">Imagery first</p>
            <p className="mt-2 text-sm leading-6 text-white/72">
              Lead with actual media, then support it with copy. No fake dashboard
              furniture doing the work.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold text-white">Board logic</p>
            <p className="mt-2 text-sm leading-6 text-white/72">
              Use distinct tiles and uneven composition so the page feels curated
              instead of auto-generated.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold text-white">Decision path</p>
            <p className="mt-2 text-sm leading-6 text-white/72">
              Keep both homes live so the owner can compare them without losing
              the original design.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Proof"
        title="Keep the proof, but stop dressing it like brochure filler."
        subtitle="The testimonials and FAQ stay, but they sit in a cleaner comparison frame."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
          <div className="rounded-[1.75rem] border border-cyan-300/15 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/75">
              Questions
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              FAQ in a darker, cleaner frame
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/72">
              Same answers, less clutter. The point is to make the owner evaluate
              structure and mood, not just read another block of marketing copy.
            </p>
            <div className="mt-6">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </SectionBlock>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/18 bg-[linear-gradient(135deg,rgba(14,165,233,0.16),rgba(2,6,23,0.98))] p-8 text-center shadow-[0_30px_100px_rgba(2,6,23,0.72)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/75">
            Compare both
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Original home stays. Neo home proves a different direction.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
            That’s the whole point: let the owner see both pages side by side
            and choose the one that actually feels like Fusion44x.
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
