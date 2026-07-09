import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

const poolAnalysisHref = "/pool-analysis?source_page=youtube-vsl-2";

const processSteps = ["Test water", "Add chlorine", "Add shock", "Add acid", "Repeat"] as const;

const whoWeHelp = [
  {
    title: "Health-Conscious Families",
    copy: "Protect your loved ones from harsh chemicals and irritation.",
  },
  {
    title: "Pet Owners",
    copy: "Gentler water for your pets inside and outside the pool.",
  },
  {
    title: "Luxury Homeowners",
    copy: "Premium water quality that matches your lifestyle.",
  },
  {
    title: "Spa Owners",
    copy: "Cleaner, clearer water for relaxation and recovery.",
  },
  {
    title: "Pool Professionals",
    copy: "A better water solution your clients will love and trust.",
  },
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
          href={poolAnalysisHref}
          className="inline-flex items-center justify-center rounded-full bg-[#0757c7] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#052f78]"
        >
          Check Pool Fit
        </Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#eaf6ff] px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(77,167,255,0.16),transparent_28rem),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(225,244,255,0.92))]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <Pill>Meet Fusion 44X</Pill>
          <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#071832] sm:text-6xl lg:text-7xl xl:text-8xl">
            A Different Water System For Pools And Spas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#052f78] sm:text-xl">
            Fusion 44X creates hydrogen-rich, balanced pool and spa water with no chlorine, no salt,
            and no harsh chemicals.
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
            <CtaButton href={poolAnalysisHref}>
              Check My Pool Compatibility
              <ArrowIcon className="h-4 w-4" />
            </CtaButton>
            <CtaButton href="/pricing" variant="secondary">
              See Pricing and Financing
              <ArrowIcon className="h-4 w-4" />
            </CtaButton>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border-[7px] border-white bg-[#0b76cf] shadow-[0_30px_90px_rgba(4,29,75,0.22)]">
            <div className="relative aspect-[0.92] min-h-[390px] lg:min-h-[520px]">
              <Image
                src="/fusion-family-pool.jpeg"
                alt="Fusion 44X pool lifestyle preview"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_32%,rgba(255,255,255,0.55),transparent_18%),linear-gradient(180deg,rgba(9,96,201,0.06),rgba(3,18,47,0.56))]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-24 w-24 place-items-center rounded-full border-4 border-white bg-[#061b3a]/42 text-3xl text-white shadow-[0_18px_46px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                  <span className="translate-x-0.5">▶</span>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-[#041024]/80 p-5 text-center text-sm font-extrabold leading-6 text-white shadow-[0_18px_46px_rgba(0,0,0,0.24)] backdrop-blur-md sm:text-base">
                Fusion 44X was created to challenge the chlorine, salt, and balancing cycle.
                <span className="block text-[#5db4ff]">Hydro-pH-Infusion changes the routine.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] border-[7px] border-white shadow-[0_24px_70px_rgba(4,29,75,0.16)]">
          <Image
            src="/fusion-swim-lifestyle.jpeg"
            alt="Clean pool lifestyle"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061b3a]/42 to-transparent" />
        </div>
        <div>
          <Pill>Who we are</Pill>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#071832] sm:text-5xl lg:text-6xl">
            Fusion 44X Was Created To Change Pool Water.
          </h2>
          <p className="mt-5 text-base font-bold leading-8 text-[#052f78] sm:text-lg">
            For decades, pool owners have been taught to rely on chlorine, shock, acid, stabilizer,
            algaecides, and constant balancing. Fusion 44X was created to challenge that cycle.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  return (
    <section className="bg-[#f4fbff] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <Pill>What we do</Pill>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#071832] sm:text-5xl lg:text-6xl">
            We Help Pool Owners Move Beyond The Chemical Cycle.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#0757c7]/12 bg-white p-6 shadow-[0_16px_42px_rgba(6,27,58,0.08)]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0757c7]">Old way</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-center">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="rounded-full border border-[#0757c7]/15 bg-[#eef6ff] px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#052f78] sm:px-5">
                    {step}
                  </div>
                  {index < processSteps.length - 1 ? <span className="text-2xl font-black text-[#0757c7]">→</span> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#0757c7]/12 bg-[#071f47] p-6 text-white shadow-[0_16px_42px_rgba(6,27,58,0.08)]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Fusion way</p>
            <p className="mt-4 text-lg font-bold leading-8 text-slate-100">
              Fusion 44X continuously creates hydrogen-rich, balanced water. No chlorine. No salt.
              No harsh chemicals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeHelpSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Pill>Who we help</Pill>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#071832] sm:text-5xl lg:text-6xl">
            Built For More Than One Kind Of Pool Owner.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {whoWeHelp.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.35rem] border border-[#0757c7]/12 bg-[#f4fbff] p-5 shadow-[0_16px_42px_rgba(6,27,58,0.08)]"
            >
              <h3 className="text-lg font-black uppercase leading-tight tracking-[-0.03em] text-[#061b3a]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-bold leading-7 text-[#052f78]">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
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
          <Pill dark>Patented advanced water science</Pill>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Powered By Hydro-pH-Infusion Technology
          </h2>
          <p className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/8 p-5 text-lg font-bold leading-8 text-slate-100 backdrop-blur-sm">
            Hydro-pH-Infusion technology helps create hydrogen-rich, balanced water with no chlorine,
            no salt, and no harsh chemicals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={poolAnalysisHref}>
              Check My Pool Compatibility
              <ArrowIcon className="h-4 w-4" />
            </CtaButton>
            <CtaButton href={poolAnalysisHref} variant="secondary">
              Schedule A Pool Review Call
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

function FinalCtaSection() {
  return (
    <section className="bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,255,255,0.68)),radial-gradient(circle_at_82%_34%,rgba(9,103,232,0.24),transparent_18rem),linear-gradient(135deg,#dff5ff,#76d6ff)]">
      <div className="mx-auto grid min-h-[340px] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
        <div>
          <Pill>Keep it simple</Pill>
          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.94] tracking-[-0.06em] text-[#0757c7] sm:text-5xl lg:text-6xl">
            Healthier Water. Better Swims. Less Guessing.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={poolAnalysisHref}>
              Check My Pool Compatibility
              <ArrowIcon className="h-4 w-4" />
            </CtaButton>
            <CtaButton href={poolAnalysisHref} variant="secondary">
              Schedule A Pool Review Call
              <ArrowIcon className="h-4 w-4" />
            </CtaButton>
            <CtaButton href="/pricing" variant="secondary">
              See Pricing and Financing
              <ArrowIcon className="h-4 w-4" />
            </CtaButton>
          </div>
        </div>
        <div className="relative hidden min-h-[280px] overflow-hidden rounded-[2rem] border-[7px] border-white shadow-[0_24px_70px_rgba(4,29,75,0.18)] lg:block">
          <Image
            src="/fusion-clear-pool.jpg"
            alt="Clear pool water"
            fill
            sizes="38vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061b3a]/35 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default function YouTubeVsl2LandingPage({
  bodyFontClassName = "",
}: {
  bodyFontClassName?: string;
}) {
  return (
    <main className={`min-h-screen overflow-hidden bg-white text-[#071832] ${bodyFontClassName}`}>
      <TopBar />
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <WhoWeHelpSection />
      <TechnologySection />
      <FinalCtaSection />
    </main>
  );
}
