import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

import { checkoutHref } from "@/lib/products";

const problemCards = [
  { image: "/irraeyes.webp", alt: "Person with irritated eyes after swimming" },
  { image: "/dryskin5.webp", alt: "Person with dry, itchy skin after a pool session" },
  { image: "/smells.webp", alt: "Close-up of pool-related chemical odor caution area" },
  { image: "/chemexpo.webp", alt: "Chloramine-related chemical exposure concern" },
  { image: "/respirratation.webp", alt: "Pump and system maintenance equipment" },

] as const;

const proofPoints = [
  { title: "Zero chlorine", icon: "H2" },
  { title: "Zero chemicals", icon: "pH" },
  { title: "Zero pesticides", icon: "0" },
] as const;

const scienceFeatures = [
  { title: "Hydrogen rich water", icon: "H2" },
  { title: "Balanced pH 7.2-7.8 daily", icon: "pH" },
  { title: "Works with existing equipment", icon: "EQ" },
  { title: "110v and 220v options", icon: "V" },
  { title: "Lifetime warranty", icon: "LW" },
] as const;

const trustBadges = ["Lifetime warranty", "30 day money back guarantee", "EPA compliant", "Made in the USA"] as const;

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
      <path d="M12 3.5 19 6.8v5.2c0 4.9-3.2 7.7-7 8.5-3.8-.8-7-3.6-7-8.5V6.8L12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m9.2 12 1.9 1.9 3.9-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pill({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] ${dark ? "border-cyan-200/20 bg-white/10 text-cyan-100" : "border-[#0757c7]/15 bg-white/85 text-[#0757c7] shadow-sm"}`}>
      {children}
    </div>
  );
}

function CtaButton({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const base = "inline-flex min-h-14 items-center justify-center gap-2 rounded-xl px-6 text-center text-xs font-black uppercase tracking-[0.12em] transition hover:-translate-y-0.5";

  if (variant === "secondary") {
    return <Link href={href} className={`${base} border border-[#0757c7]/25 bg-white text-[#052f78] shadow-[0_14px_34px_rgba(5,47,120,0.10)] hover:border-[#0757c7]/45`}>{children}</Link>;
  }

  return <Link href={href} className={`${base} bg-[linear-gradient(180deg,#0967e8,#064db7)] text-white shadow-[0_18px_46px_rgba(7,87,199,0.32)] hover:shadow-[0_24px_58px_rgba(7,87,199,0.36)]`}>{children}</Link>;
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0757c7]/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/fusion44x-logo.png" alt="Fusion 44X" width={52} height={52} className="h-12 w-12 rounded-full border border-[#0757c7]/10 bg-white object-cover shadow-sm" priority />
          <div className="leading-none">
            <p className="text-lg font-black tracking-[-0.04em] text-[#052f78] sm:text-xl">Fusion 44X</p>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#0757c7]">Water made perfect</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <Pill><ShieldIcon className="h-4 w-4" />Patented Hydro-pH-Infusion</Pill>
          <Pill>Lifetime warranty</Pill>
        </div>

        <Link href="/free-spa-analysis" className="inline-flex items-center justify-center rounded-full bg-[#0757c7] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#052f78]">Get quote</Link>
      </div>
    </header>
  );
}

function HeroVideoCard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border-[7px] border-white bg-[#0b76cf] shadow-[0_30px_90px_rgba(4,29,75,0.22)]">
      <div className="relative aspect-[0.92] min-h-[390px] lg:min-h-[500px]">
        <Image src="/fusion-family-pool.jpeg" alt="Fusion 44X pool lifestyle video preview" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_32%,rgba(255,255,255,0.55),transparent_18%),linear-gradient(180deg,rgba(9,96,201,0.06),rgba(3,18,47,0.56))]" />
        <div className="absolute right-5 top-5 rounded-full border border-white/25 bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#052f78] shadow-sm">Watch the 3 minute VSL</div>
        <div className="absolute inset-0 grid place-items-center">
          <div className="grid h-24 w-24 place-items-center rounded-full border-4 border-white bg-[#061b3a]/42 text-3xl text-white shadow-[0_18px_46px_rgba(0,0,0,0.24)] backdrop-blur-sm"><span className="translate-x-0.5">▶</span></div>
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-[#041024]/80 p-5 text-center text-sm font-extrabold leading-6 text-white shadow-[0_18px_46px_rgba(0,0,0,0.24)] backdrop-blur-md sm:text-base">
          &ldquo;Most pool owners have accepted chlorine, chemical smells, irritated eyes, and dry skin as part of owning a pool.&rdquo;
          <span className="block text-[#5db4ff]">Fusion 44X changes that.</span>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_0%,rgba(74,179,255,0.20),transparent_34rem),linear-gradient(105deg,#ffffff_0%,#f2faff_46%,#dff3ff_100%)] px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <Pill><ShieldIcon className="h-4 w-4" />Zero chlorine pool upgrade</Pill>
          <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#071832] sm:text-6xl lg:text-7xl xl:text-8xl">
            What if your pool water was <span className="block text-[#0757c7]">actually healthy?</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#052f78] sm:text-xl">Fusion 44X creates hydrogen-rich, balanced water without chlorine, chemicals, or pesticides.</p>

          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item.title} className="rounded-3xl border border-[#0757c7]/15 bg-white/85 p-4 text-center shadow-[0_14px_38px_rgba(5,47,120,0.08)]">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border-[3px] border-[#0757c7] text-base font-black text-[#0757c7]">{item.icon}</div>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.06em] text-[#052f78]">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="/free-spa-analysis">See how Fusion 44X works<ArrowIcon className="h-4 w-4" /></CtaButton>
            <CtaButton href="/pricing" variant="secondary">See pricing and financing<ArrowIcon className="h-4 w-4" /></CtaButton>
          </div>
        </div>

        <HeroVideoCard />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-black uppercase leading-none tracking-[-0.04em] text-[#061b3a] sm:text-4xl lg:text-5xl">Traditional pools expose swimmers to:</h2>
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-2">
          {problemCards.map((card, index) => (
            <article key={`${card.image}-${index}`} className="relative overflow-hidden rounded-[1.35rem] bg-white shadow-[0_16px_42px_rgba(6,27,58,0.13)]">
              <div className="relative aspect-[1198/674] w-full bg-white">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScienceSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_14%_46%,rgba(28,137,255,0.36),transparent_18rem),linear-gradient(90deg,#03142e,#06285c_58%,#03142e)] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_0_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#071c3a] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
          <Image
            src="/probe.png"
            alt="Fusion 44X probe unit showing the treatment process"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-contain p-6 sm:p-8"
          />
        </div>

        <div>
          <Pill dark>Patented advanced water science</Pill>
          <div className="mt-5">
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-6xl">This is where the science begins</h2>
          </div>
          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-200 sm:text-lg">Fusion 44X uses proprietary Hydro-pH-Infusion technology to create hydrogen-rich water throughout your pool or spa while working with your existing equipment.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {scienceFeatures.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.07] p-4 text-center backdrop-blur-sm">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border-2 border-cyan-300 text-xs font-black text-cyan-200">{feature.icon}</div>
                <p className="mt-3 text-xs font-black uppercase leading-tight tracking-[0.05em] text-white">{feature.title}</p>
              </div>
            ))}
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
          <Pill>Trusted by pool owners who want better</Pill>
          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.94] tracking-[-0.06em] text-[#0757c7] sm:text-5xl lg:text-6xl">Healthier water. Happier swimmers. Peace of mind.</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CtaButton href="/pricing">See pricing and financing</CtaButton><CtaButton href={checkoutHref("fusion-residential-pool")} variant="secondary">Start pool checkout</CtaButton></div>
        </div>
        <div className="relative hidden min-h-[280px] overflow-hidden rounded-[2rem] border-[7px] border-white shadow-[0_24px_70px_rgba(4,29,75,0.18)] lg:block"><Image src="/fusion-family-pool.jpeg" alt="Happy family enjoying Fusion 44X pool water" fill sizes="38vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#061b3a]/35 to-transparent" /></div>
      </div>
      <div className="grid border-t border-[#0757c7]/10 bg-white sm:grid-cols-2 lg:grid-cols-4">{trustBadges.map((badge) => <div key={badge} className="flex min-h-20 items-center justify-center gap-3 border-[#0757c7]/10 px-4 text-center text-xs font-black uppercase tracking-[0.08em] text-[#052f78] sm:border-l"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#1da35b]/10 text-base text-[#1da35b]">✓</span>{badge}</div>)}</div>
    </section>
  );
}

export default function YoutubeVsl2Landing() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#071832]">
      <TopBar />
      <HeroSection />
      <ProblemSection />
      <ScienceSection />
      <FinalCtaSection />
    </main>
  );
}
