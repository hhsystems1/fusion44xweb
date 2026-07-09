import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

import { getPoolAnalysisHref } from "@/lib/pool-journey";

const symptomCards = [
  {
    title: "Red Eyes",
    copy: "Pool days should not end with kids rubbing their eyes.",
    image: "/irraeyes.webp",
    alt: "Red eyes after swimming in a traditional pool",
  },
  {
    title: "Dry-Feeling Skin",
    copy: "Harsh pool routines can leave skin dry and uncomfortable.",
    image: "/dryskin5.webp",
    alt: "Dry skin after swimming",
  },
  {
    title: "Chemical Odor",
    copy: "A heavy chlorine smell should not follow your family inside.",
    image: "/smells.webp",
    alt: "Chemical odor concern around pool water",
  },
] as const;

const featureCards = [
  "No chlorine",
  "No salt",
  "No harsh chemicals",
  "No acid poured directly into the pool water",
  "Hydrogen-rich, balanced water",
  "Built for pools and spas",
] as const;

const steps = [
  "Tell us about your pool, equipment, and water conditions.",
  "We check compatibility with your setup.",
  "We confirm your fit and next steps with no pressure.",
] as const;

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] ${
        dark
          ? "border-cyan-200/20 bg-white/10 text-cyan-100"
          : "border-[#0757c7]/15 bg-white/85 text-[#0757c7] shadow-sm"
      }`}
    >
      {children}
    </div>
  );
}

function CtaButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex min-h-14 items-center justify-center gap-2 rounded-xl px-6 text-center text-xs font-black uppercase tracking-[0.12em] transition hover:-translate-y-0.5";

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`${base} border border-[#0757c7]/25 bg-white text-[#052f78] shadow-[0_14px_34px_rgba(5,47,120,0.10)] hover:border-[#0757c7]/45`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} bg-[linear-gradient(180deg,#0967e8,#064db7)] text-white shadow-[0_18px_46px_rgba(7,87,199,0.32)] hover:shadow-[0_24px_58px_rgba(7,87,199,0.36)]`}
    >
      {children}
    </Link>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0757c7]/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/fusion44x-logo.png"
            alt="Fusion 44X"
            width={52}
            height={52}
            className="h-12 w-12 rounded-full border border-[#0757c7]/10 bg-white object-cover shadow-sm"
            priority
          />
          <div className="leading-none">
            <p className="text-lg font-black tracking-[-0.04em] text-[#052f78] sm:text-xl">Fusion 44X</p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#0757c7]">
              Water made perfect
            </p>
          </div>
        </Link>

        <Link
          href={getPoolAnalysisHref("parents")}
          className="inline-flex items-center justify-center rounded-full bg-[#0757c7] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#052f78]"
        >
          Check Family Fit
        </Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-[#eaf6ff] px-4 pb-14 pt-10 sm:px-6 md:min-h-[720px] lg:min-h-[calc(100svh-77px)] lg:px-8">
      <Image src="/fusion-family-pool.jpeg" alt="" fill sizes="100vw" className="object-cover" priority />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.80)_42%,rgba(255,255,255,0.08)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.84)_36%,rgba(255,255,255,0.18)_70%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl items-center">
        <div className="relative z-10 max-w-2xl text-left">
          <Pill>Parents / Family Pool Water</Pill>
          <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#071832] sm:text-6xl lg:text-6xl xl:text-7xl">
            Are These Toxic Pool Chemicals Even Needed?
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#052f78] lg:text-xl">
            Your pool can look clean and still leave behind red eyes, dry-feeling skin, rough hair,
            and that heavy chlorine smell. Before adding more chemicals, ask whether your family&apos;s
            pool needs the chemical cycle at all.
          </p>

          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["No chlorine", "No salt", "No harsh chemicals", "Hydrogen-rich water"].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#0757c7]/15 bg-white/85 p-4 text-center shadow-[0_14px_38px_rgba(5,47,120,0.08)]"
              >
                <p className="text-xs font-black uppercase tracking-[0.08em] text-[#052f78]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={getPoolAnalysisHref("parents")}>
              Check My Family&apos;s Pool Compatibility
              <ArrowIcon className="h-4 w-4" />
            </CtaButton>
            <CtaButton href="/pricing" variant="secondary">
              See Pricing and Financing
              <ArrowIcon className="h-4 w-4" />
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function SymptomsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-black uppercase leading-none tracking-[-0.04em] text-[#061b3a] sm:text-4xl lg:text-5xl">
          The Pool Looks Clean, But Then The Same Things Start Showing Up.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-base font-bold leading-8 text-[#052f78] sm:text-lg">
          Parents notice the same pattern after swimming. These signs are your pool telling you
          something is not right.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {symptomCards.map((card) => (
            <article
              key={card.title}
              className="relative overflow-hidden rounded-[1.35rem] bg-[#071f47] shadow-[0_16px_42px_rgba(6,27,58,0.13)]"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,58,0.10)_20%,rgba(6,27,58,0.86)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-3xl xl:text-4xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm font-bold leading-6 text-white/90">{card.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChemicalCycleSection() {
  return (
    <section className="bg-[#f4fbff] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <Pill>The old chemical cycle</Pill>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#071832] sm:text-5xl lg:text-6xl">
            The Old Way Trains Pool Owners To Keep Adding More.
          </h2>
        </div>
        <div className="mt-8 rounded-[2rem] border border-[#0757c7]/12 bg-white p-5 shadow-[0_16px_42px_rgba(6,27,58,0.08)] sm:p-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            {["Test water", "Add chlorine", "Add shock", "Add acid", "Repeat"].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <div className="rounded-full border border-[#0757c7]/15 bg-[#eef6ff] px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#052f78] sm:px-5">
                  {item}
                </div>
                {index < 4 ? <span className="text-2xl font-black text-[#0757c7]">→</span> : null}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 max-w-3xl">
          <p className="text-lg font-bold leading-8 text-[#052f78]">
            Maybe your pool does not need more chemicals. Maybe it needs a different water system.
          </p>
          <div className="mt-6">
            <CtaButton href={getPoolAnalysisHref("parents")}>
              Check My Family&apos;s Pool Compatibility
              <ArrowIcon className="h-4 w-4" />
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_14%_46%,rgba(28,137,255,0.36),transparent_18rem),linear-gradient(90deg,#03142e,#06285c_58%,#03142e)] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_0_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#061c3a] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
          <Image
            src="/probe.png"
            alt="Fusion 44X probe unit"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-contain p-6 sm:p-8"
          />
        </div>

        <div className="relative z-10">
          <Pill dark>The Fusion 44X difference</Pill>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Hydrogen-rich water without the old chemical routine.
          </h2>
          <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
              Powered by advanced water science
            </p>
            <p className="mt-3 text-lg font-bold leading-8 text-slate-100">
              Powered by Hydro-pH-Infusion technology. Fusion 44X creates hydrogen-rich, balanced
              water without chlorine, salt, or harsh chemicals.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-4 text-center backdrop-blur-sm"
              >
                <p className="text-xs font-black uppercase leading-tight tracking-[0.05em] text-white">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StartHereSection({ showUpgradeCard = true }: { showUpgradeCard?: boolean }) {
  const layoutClassName = showUpgradeCard
    ? "lg:grid-cols-[1fr_0.9fr]"
    : "lg:grid-cols-1 lg:max-w-4xl";

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className={`mx-auto grid max-w-7xl gap-8 lg:items-center ${layoutClassName}`}>
        <div>
          <Pill>Start here</Pill>
          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.94] tracking-[-0.06em] text-[#0757c7] sm:text-5xl lg:text-6xl">
            First, let&apos;s see if your pool is a fit.
          </h2>
          <div className="mt-8 grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.35rem] border border-[#0757c7]/12 bg-[#f4fbff] p-5 shadow-[0_16px_42px_rgba(6,27,58,0.08)]"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0757c7]">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-lg font-bold leading-8 text-[#052f78]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {showUpgradeCard ? (
          <div className="rounded-[2rem] border border-[#0757c7]/12 bg-[#f4fbff] p-6 shadow-[0_16px_42px_rgba(6,27,58,0.08)] sm:p-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-white bg-white shadow-sm">
              <Image
                src="/fusion-family-pool.jpeg"
                alt="Family enjoying a Fusion 44X pool"
                width={960}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <CtaButton href={getPoolAnalysisHref("parents")}>
                Check My Family&apos;s Pool Compatibility
                <ArrowIcon className="h-4 w-4" />
              </CtaButton>
              <CtaButton href={getPoolAnalysisHref("parents")} variant="secondary">
                Schedule A Pool Review Call
                <ArrowIcon className="h-4 w-4" />
              </CtaButton>
              <CtaButton href="/pricing" variant="secondary">
                See Pricing and Financing
                <ArrowIcon className="h-4 w-4" />
              </CtaButton>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function ParentsLandingPage({
  bodyFontClassName = "",
  showUpgradeCard = true,
}: {
  bodyFontClassName?: string;
  showUpgradeCard?: boolean;
}) {
  return (
    <main className={`min-h-screen overflow-hidden bg-white text-[#071832] ${bodyFontClassName}`}>
      <TopBar />
      <HeroSection />
      <SymptomsSection />
      <ChemicalCycleSection />
      <DifferenceSection />
      <StartHereSection showUpgradeCard={showUpgradeCard} />
    </main>
  );
}
