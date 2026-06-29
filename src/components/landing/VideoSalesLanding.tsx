"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

type AngleKey = "parents" | "pets" | "luxury";

type AngleContent = {
  label: string;
  eyebrow: string;
  heroHeadline: string;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  positioningTitle: string;
  positioningBody: string;
  problemTitle: string;
  problemBody: string;
  solutionTitle: string;
  solutionBody: string;
  benefits: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

const ANGLES: Record<AngleKey, AngleContent> = {
  parents: {
    label: "Parents",
    eyebrow: "Family-first angle",
    heroHeadline: "Stop Letting Your Kids Swim in Harsh Pool Chemicals.",
    heroBody:
      "Your kids should not have to deal with red eyes, dry skin, chemical smell, or throat irritation just to enjoy the backyard. Fusion 44X is built to make the pool feel calmer, cleaner, and a lot less like a science experiment.",
    primaryCta: "Check My Family's Pool Compatibility",
    secondaryCta: "Learn How It Connects to Your Equipment",
    positioningTitle: "Pure, Hydrogen-Rich Wellness Water for Your Family",
    positioningBody:
      "Fusion 44X creates hydrogen-rich, balanced water for families who want a cleaner pool experience without chlorine, salt, or traditional pool chemicals. Powered by patented Hydro-pH-Infusion technology, it is designed to deliver a more refined, spa-like swimming experience.",
    problemTitle: "The Toxic Reality of the Traditional Chlorine Loop",
    problemBody:
      "Every week, parents drag home chlorine, acid, and shock treatments just to keep the water passable. Chlorine binds with organic matter to create chloramines, which are a big part of the burning eyes, itchy skin, respiratory irritation, and that heavy pool smell that never quite leaves the towels.",
    solutionTitle: "Break the Chemical Cycle Permanently with Fusion 44X",
    solutionBody:
      "The Fusion 44X system is designed to connect to existing pool equipment in about an hour, without pipe cutting or a full remodel. It replaces the usual chemical routine with a cleaner, more manageable path to balanced water.",
    benefits: [
      {
        title: "No More Red Eyes or Throat Irritation",
        description:
          "Kids can swim longer without the stinging, burning, or scratchy aftermath that usually comes with a chlorine-heavy pool.",
      },
      {
        title: "Silky-Smooth Skin and Protected Hair",
        description:
          "No more dry, itchy post-swim skin or brittle hair that smells like the pool for the rest of the day.",
      },
      {
        title: "Zero Chemical Odor",
        description:
          "The backyard stays fresh and breathable instead of carrying the strong chloramine odor common with traditional pools.",
      },
      {
        title: "Lower-Toxin Swimming Environment",
        description:
          "The result is a pool that feels gentler on the body and far less dependent on weekly chemical balancing.",
      },
    ],
    faqs: [
      {
        question: "Is it really 100% chemical-free?",
        answer:
          "Fusion 44X is presented as eliminating the need for chlorine, salt, bromine, and traditional pool chemicals while keeping the water balanced through Hydro-pH-Infusion technology.",
      },
      {
        question: "How long does installation take?",
        answer:
          "The system is designed for a simple installation on the existing equipment pad in about one hour, without a full plumbing overhaul.",
      },
      {
        question: "Is financing available?",
        answer:
          "Yes. The plan calls for financing options starting at $75 per month so the upgrade remains accessible without a large upfront payment.",
      },
    ],
  },
  pets: {
    label: "Pet owners",
    eyebrow: "Pet-safe angle",
    heroHeadline: "WHAT IF YOUR POOL WATER WAS ACTUALLY SAFER FOR YOUR DOG?",
    heroBody:
      "Pets swim, splash, lick their fur, and absolutely do drink pool water when nobody is looking. Fusion 44X is built for owners who want the backyard to be safe, simple, and free from the harsh chemical cycle.",
    primaryCta: "GET A FREE ESTIMATE FOR YOUR PET",
    secondaryCta: "SEE FUSION POOLS FOR DOGS",
    positioningTitle: "Pet-Safe, Hydrogen-Rich Water Made for Swimming and Splashing",
    positioningBody:
      "Fusion 44X creates hydrogen-rich, balanced pool water for pets who swim, splash, lick their fur, and occasionally treat the pool like a communal bowl. The goal is clean, mineral-balanced water without harsh chemical residue on skin or coat.",
    problemTitle: "DOGS DON'T JUST SWIM IN YOUR POOL, THEY DRINK FROM IT.",
    problemBody:
      "Traditional pool chemistry leaves behind chloramines and irritants that cause red eyes, dull coats, and chemical tastes. Saltwater pools are still part of the chlorine cycle—they just hide it better.",
    solutionTitle: "The Ultimate Pet-Wellness Upgrade: Fusion 44X",
    solutionBody:
      "Fusion 44X uses Hydro-pi Diffusion Technology to create hydrogen-rich, balanced water throughout your pool, eliminating the need for harsh chemicals and protecting your pet's health.",
    benefits: [
      {
        title: "Safer for Pet to Drink",
        description:
          "The pool is positioned as a water-first environment rather than a chemical-heavy space pets have to navigate.",
      },
      {
        title: "Protects Sensitive Skin and Paws",
        description:
          "Less exposure to harsh pool chemistry means fewer irritated patches, cracked pads, and post-swim misery.",
      },
      {
        title: "No Harsh Chemical Smell",
        description:
          "The goal is to avoid the dry, bleached, chemical-smelling coat that often follows traditional pool exposure.",
      },
      {
        title: "Clearer, Healthier Water",
        description:
          "Pets can swim and recover without the same burning-eye, stinging-skin routine people have come to accept as normal.",
      },
    ],
    faqs: [
      {
        question: "Is Fusion 44X safe for my dogs to drink?",
        answer:
          "The system is described as producing water that meets drinking-water standards, making accidental sips far less concerning than with a traditional chemical pool.",
      },
      {
        question: "Can I use Fusion 44X on an old pool?",
        answer:
          "Yes. The installation is designed to integrate with the existing equipment pad, so the project stays simple instead of becoming a major remodel.",
      },
      {
        question: "What does hydrogen water mean?",
        answer:
          "It refers to water enriched with molecular hydrogen, which helps maintain a balanced pH and creates a gentler environment for skin and eyes.",
      },
      {
        question: "What is the main difference?",
        answer:
          "Unlike saltwater or chlorine systems, Fusion 44X removes the need for a continuous chemical cycle, replacing it with a patented diffusion technology.",
      },
    ],
  },
  luxury: {
    label: "Luxury homeowners",
    eyebrow: "Estate-preservation angle",
    heroHeadline: "Your Pool Looks Premium. Your Water System Should Too.",
    heroBody:
      "Luxury estates deserve water that looks clean, feels expensive, and does not quietly corrode the hardscape while nobody is paying attention. Fusion 44X is the cleaner, calmer, more polished story.",
    primaryCta: "Request A Pool System Review",
    secondaryCta: "Download Architectural and Technical Specs",
    positioningTitle: "A High-Tech Wellness Upgrade for Premium Aquatic Estates",
    positioningBody:
      "Fusion 44X upgrades luxury pools with hydrogen-rich, balanced water that moves beyond chlorine, salt, and the usual maintenance burden. It is built to feel premium, protect hardscapes, and suit a home where the pool is part of the architecture, not an afterthought.",
    problemTitle: "The Hidden Cost of Chlorine and Salt on Premium Estates",
    problemBody:
      "Traditional systems can corrode brushed metal fixtures, bleach surfaces, and wear away at travertine, marble, and flagstone over time. Add in the testing, hauling, dumping, and rebalancing ritual and the whole thing starts to feel more like punishment than ownership.",
    solutionTitle: "The New Standard of Luxury Filtration: Fusion 44X",
    solutionBody:
      "Fusion 44X is designed to integrate with existing premium equipment in about an hour, while keeping the water balanced with less manual intervention. The result is a cleaner, quieter, more elegant system that protects the estate as much as it supports the swim.",
    benefits: [
      {
        title: "Protects High-End Hardscapes and Surfaces",
        description:
          "Zero salt and zero chlorine help reduce the corrosion that can damage expensive stone and metal fixtures over time.",
      },
      {
        title: "Elite Skin-Hydration and Rejuvenation",
        description:
          "The water is positioned to feel silky and refined, like the pool finally got the memo about being expensive.",
      },
      {
        title: "Autopilot Operation",
        description:
          "The system aims to reduce the normal juggling act of testing, hauling, and balancing chemicals every week.",
      },
      {
        title: "Silent, Odorless Elegance",
        description:
          "No strong chemical smell means the backyard keeps its premium feel instead of advertising the water chemistry to everyone nearby.",
      },
    ],
    faqs: [
      {
        question: "Will this help protect travertine and metal fixtures?",
        answer:
          "That is one of the core estate-protection claims in the plan: fewer corrosive inputs, less surface damage, and better long-term preservation.",
      },
      {
        question: "Can it work with home automation?",
        answer:
          "The system is meant to integrate with common pool automation and equipment setups instead of forcing a ground-up redesign.",
      },
      {
        question: "What about warranty and guarantee?",
        answer:
          "The plan specifies a lifetime hardware warranty and a 30-day money-back guarantee.",
      },
    ],
  },
};

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 3.5 19 6.8v5.2c0 4.9-3.2 7.7-7 8.5-3.8-.8-7-3.6-7-8.5V6.8L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m9.2 12 1.9 1.9 3.9-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  headingClassName = "",
}: {
  eyebrow: string;
  title: string;
  description: string;
  headingClassName?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-200/80">{eyebrow}</p>
      <h2 className={`${headingClassName} mt-3 text-3xl font-bold tracking-[0.05em] text-[#F4F7FC] sm:text-4xl lg:text-5xl`}>
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

function TopBar({ headingFontClassName }: { headingFontClassName: string }) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#06111d]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/fusion44x-logo.png"
            alt="Fusion 44X"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-cyan-300/20 bg-[#0d1d31] object-cover"
            priority
          />
          <div>
            <p className={`${headingFontClassName} text-sm font-bold tracking-[0.05em] text-[#F4F7FC]`}>Fusion 44X</p>
            <p className="text-xs text-slate-400">Multi-angle landing page</p>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/pool-analysis"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10"
          >
            Open the form
          </a>
          <Link
            href="/pricing"
            className="hidden rounded-full bg-[linear-gradient(135deg,#00d2ff,#00f5d4)] px-4 py-2 text-xs font-semibold text-[#071423] transition hover:brightness-110 sm:inline-flex"
          >
            View pricing
          </Link>
        </div>
      </div>
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/85">
      {children}
    </div>
  );
}

export default function VideoSalesLanding({ headingFontClassName = "", bodyFontClassName = "" }: { headingFontClassName?: string; bodyFontClassName?: string }) {
  const active = ANGLES["parents"];
  const VIMEO_VIDEO_ID = "1204214237";

  return (
    <main
      className={`${bodyFontClassName} min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,210,255,0.16),transparent_28%),radial-gradient(circle_at_20%_8%,rgba(0,245,212,0.12),transparent_22%),linear-gradient(180deg,#071423_0%,#081a2f_42%,#06111d_100%)] text-[#F4F7FC]`}
    >
      <TopBar headingFontClassName={headingFontClassName} />

      <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,245,212,0.14),transparent_26%),radial-gradient(circle_at_18%_12%,rgba(0,210,255,0.16),transparent_28%)]"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="relative z-10">
            <Pill>
              <ShieldIcon className="h-4 w-4 text-cyan-200" />
              Chemical-Free Pool System
            </Pill>
            <h1 className={`${headingFontClassName} mt-6 max-w-4xl text-5xl font-bold tracking-[0.05em] text-[#F4F7FC] sm:text-6xl lg:text-7xl`}>
              {active.heroHeadline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {active.heroBody}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/pool-analysis"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#00d2ff,#00f5d4)] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-[#06111d] shadow-[0_18px_50px_rgba(0,210,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(0,245,212,0.22)]"
              >
                {active.primaryCta}
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href="/pool-analysis"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#F4F7FC] transition hover:border-cyan-300/35 hover:bg-white/10"
              >
                Fill Out the Form
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-[#0f2138] px-6 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-[#132945]"
              >
                View pricing
              </Link>
            </div>
          </div>

          <div className="relative mt-8 max-w-4xl mx-auto lg:max-w-3xl">
            <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-4 shadow-[0_36px_110px_rgba(0,0,0,0.34)] backdrop-blur">
              <div className="rounded-[1.6rem] border border-white/10 bg-[#040b14] p-3">
                <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-slate-950">
                  <iframe
                    src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&dnt=1`}
                    title="Fusion44x video sales letter"
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,30,0.08),rgba(8,17,30,0.2))]" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
                <Image src="/poolex4.webp" alt="Fusion 44X product front" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
                <Image src="/fusion-family-pool.jpeg" alt="Fusion 44X product side" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
                <Image src="/fusion-spa-install.jpg" alt="Fusion 44X system installed" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(0,210,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-200/80">
              The product in one sentence
            </p>
            <p className={`${headingFontClassName} mt-4 max-w-5xl text-3xl font-bold tracking-[0.05em] text-[#F4F7FC] sm:text-4xl lg:text-5xl`}>
              Fusion44X uses Hydro-pH-Infusion technology to create hydrogen-rich, balanced pool
              and spa water without chlorine, salt, or traditional pool chemicals.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur">
          <SectionHeading
            headingClassName={headingFontClassName}
            eyebrow="How it works"
            title="Watch. Check. Choose. Enjoy chemical-free water."
            description="See the system in action, confirm your pool compatibility, and take the next step toward cleaner, softer water."
          />

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Watch the video",
                  description: "See how Fusion 44X transforms your pool into a chemical-free, hydrogen-rich oasis.",
                },
                {
                  step: "02",
                  title: "Choose the angle",
                  description: "Parents, pet owners, and luxury homeowners see the same product through different motivations.",
                },
                {
                  step: "03",
                  title: "Check the fit",
                  description: "Tell us about your pool size and current setup so we can find the right fit.",
                },
                {
                  step: "04",
                  title: "Go to the right path",
                  description: "Standard residential setups go to checkout, larger or complex installs get a free consultation.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.5rem] border border-white/10 bg-[#081524] p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#00d2ff,#00f5d4)] text-sm font-bold text-[#06111d]">
                      {item.step}
                    </div>
                    <p className={`${headingFontClassName} text-lg font-bold tracking-[0.05em] text-[#F4F7FC]`}>
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
