import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

import { checkoutHref } from "@/lib/products";

const proofPoints = [
  { title: "Zero chlorine", icon: "H2" },
  { title: "Zero chemical odor", icon: "0" },
  { title: "Gentler-feeling water", icon: "pH" },
] as const;

const symptomCards = [
  {
    title: "Red Eyes",
    copy: "Pool days should not end with burning eyes and towels pressed against little faces.",
    image: "/irraeyes.webp",
    alt: "Irritated eyes after swimming in a traditional pool",
  },
  {
    title: "Skin Rashes",
    copy: "Harsh pool routines can leave sensitive skin feeling dry, itchy, and uncomfortable.",
    image: "/dryskin5.webp",
    alt: "Dry irritated skin after swimming",
  },
  {
    title: "Chemical Odors",
    copy: "That strong pool smell is not freshness. It is the sign families are trying to get away from.",
    image: "/smells.webp",
    alt: "Harsh chemical odor concern around pool water",
  },
] as const;

const sequence = [
  "Tell us about the pool your children swim in most.",
  "Confirm system fit, plumbing, volume, and current sanitizer routine.",
  "Get a clear compatibility recommendation before you buy.",
] as const;

const scienceFeatures = [
  { title: "Hydrogen rich water", icon: "H2" },
  { title: "Balanced pH support", icon: "pH" },
  { title: "No chlorine added", icon: "0" },
  { title: "Existing equipment fit", icon: "EQ" },
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
          <Pill>Family pool compatibility</Pill>
        </div>

        <Link href="/free-spa-analysis" className="inline-flex items-center justify-center rounded-full bg-[#0757c7] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#052f78]">Check fit</Link>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-[#eaf6ff] px-4 pb-14 pt-10 sm:px-6 md:min-h-[720px] lg:min-h-[calc(100svh-77px)] lg:px-8">
      <Image
        src="/fusion-swim-lifestyle.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.78)_42%,rgba(255,255,255,0.08)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.82)_36%,rgba(255,255,255,0.18)_70%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl items-center">
        <div className="relative z-10 max-w-2xl text-left">
          <Pill><ShieldIcon className="h-4 w-4" />Parents Landing Page</Pill>
          <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#071832] sm:text-6xl lg:text-6xl xl:text-7xl">
            Stop Letting Your Children Swim in <span className="block text-[#0757c7]">Harsh Pool Chemicals.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#052f78] lg:text-xl">
            Zero red eyes, zero skin rashes, zero chemical odors. Fusion 44X creates hydrogen-rich, balanced water without chlorine, chemicals, or pesticides.
          </p>

          <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item.title} className="rounded-3xl border border-[#0757c7]/15 bg-white/85 p-4 text-center shadow-[0_14px_38px_rgba(5,47,120,0.08)]">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border-[3px] border-[#0757c7] text-base font-black text-[#0757c7]">{item.icon}</div>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.06em] text-[#052f78]">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="/free-spa-analysis">Check My Family&apos;s Pool Compatibility<ArrowIcon className="h-4 w-4" /></CtaButton>
            <CtaButton href="/pricing" variant="secondary">See pricing and financing<ArrowIcon className="h-4 w-4" /></CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-black uppercase leading-none tracking-[-0.04em] text-[#061b3a] sm:text-4xl lg:text-5xl">
          Your pool can look clean and still feel rough on kids.
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {symptomCards.map((card) => (
            <article key={card.title} className="relative overflow-hidden rounded-[1.35rem] bg-white shadow-[0_16px_42px_rgba(6,27,58,0.13)]">
              <div className="relative aspect-[16/9] w-full">
                <Image src={card.image} alt={card.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,58,0.06)_18%,rgba(6,27,58,0.82)_100%)]" />
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

function AgitationSection() {
  return (
    <section className="bg-[#f4fbff] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border-[7px] border-white shadow-[0_24px_70px_rgba(4,29,75,0.16)]">
          <Image src="/fusion-family-pool.jpeg" alt="Family enjoying a backyard pool" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061b3a]/42 to-transparent" />
        </div>
        <div>
          <Pill>Health and dermal focus</Pill>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#071832] sm:text-5xl lg:text-6xl">
            The problem is not that kids love the pool. It is what the pool leaves on them.
          </h2>
          <p className="mt-5 text-base font-bold leading-8 text-[#052f78] sm:text-lg">
            Parents notice the same pattern: red eyes, itchy skin, heavy chemical smell, and another rinse-off after swimming. Fusion 44X is built for families who want pool time without the harsh chemical routine.
          </p>
        </div>
      </div>
    </section>
  );
}

function PromiseSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <Pill>Clean water promise</Pill>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#071832] sm:text-5xl lg:text-6xl">
            A family pool should feel soft, clear, and easy to trust.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["No chlorine added to the pool", "No heavy chemical odor around the water", "No weekly shock routine deciding the weekend"].map((item) => (
            <div key={item} className="rounded-[1.35rem] border border-[#0757c7]/12 bg-[#f4fbff] p-6 shadow-[0_16px_42px_rgba(6,27,58,0.08)]">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#1da35b]/10 text-lg font-black text-[#1da35b]">✓</div>
              <p className="mt-5 text-lg font-black uppercase leading-tight tracking-[-0.025em] text-[#052f78]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MechanismSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_14%_46%,rgba(28,137,255,0.36),transparent_18rem),linear-gradient(90deg,#03142e,#06285c_58%,#03142e)] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_0_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#061c3a] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
          <Image src="/probe.png" alt="Fusion 44X monitoring probe used for Hydro-pi monitoring" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain p-6 sm:p-8" />
        </div>
        <div className="relative z-10">
          <Pill dark>Patented advanced water science</Pill>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-6xl">Powered by Hydro-pi Diffusion Technology</h2>
          <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-200 sm:text-lg">
            Fusion 44X creates hydrogen-rich, balanced water throughout your pool or spa using patented advanced water science instead of adding chlorine, salt, or sanitizer chemicals to the pool.
          </p>
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

function CompatibilitySection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <Pill>Simple next step</Pill>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#071832] sm:text-5xl">
              Check compatibility before changing your pool.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sequence.map((item, index) => (
              <div key={item} className="rounded-[1.35rem] border border-[#0757c7]/12 bg-[#f4fbff] p-6">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#0757c7] text-sm font-black text-white">{index + 1}</div>
                <p className="mt-5 text-sm font-black uppercase leading-6 tracking-[0.05em] text-[#052f78]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ObjectionSection() {
  return (
    <section className="bg-[#f4fbff] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        {[
          ["Will it work with our pool?", "Fusion 44X is designed to connect with existing residential pool equipment after fit is confirmed."],
          ["Is this just another chemical?", "The system is built around a patented process, not another weekly jug, tablet, or shock routine."],
          ["What happens after install?", "Compatibility, setup, warranty, and support are handled through the consultation and purchase process."],
        ].map(([title, copy]) => (
          <article key={title} className="rounded-[1.35rem] border border-[#0757c7]/12 bg-white p-6 shadow-[0_16px_42px_rgba(6,27,58,0.08)]">
            <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.04em] text-[#071832]">{title}</h3>
            <p className="mt-4 text-sm font-bold leading-7 text-[#052f78]">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto overflow-hidden rounded-[2rem] border border-[#0757c7]/14 bg-[linear-gradient(135deg,#f4fbff,#ffffff)] shadow-[0_24px_70px_rgba(4,29,75,0.12)]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10">
            <Pill>Family pool upgrade</Pill>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#0757c7] sm:text-5xl lg:text-6xl">
              Start with a compatibility check.
            </h2>
            <p className="mt-5 max-w-3xl text-base font-bold leading-8 text-[#052f78]">
              Tell us about your pool and we will help confirm whether Fusion 44X is the right fit for your family before you move forward.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/free-spa-analysis">Check My Family&apos;s Pool Compatibility</CtaButton>
              <CtaButton href={checkoutHref("fusion-residential-pool")} variant="secondary">Start pool checkout</CtaButton>
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <Image src="/fusion-clear-pool.jpg" alt="Clear blue family pool water" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061b3a]/35 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,255,255,0.68)),radial-gradient(circle_at_82%_34%,rgba(9,103,232,0.24),transparent_18rem),linear-gradient(135deg,#dff5ff,#76d6ff)]">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
        <Pill>Protect the next pool day</Pill>
        <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-black uppercase leading-[0.94] tracking-[-0.06em] text-[#0757c7] sm:text-5xl lg:text-6xl">
          Zero red eyes. Zero skin rashes. Zero chemical odors.
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaButton href="/free-spa-analysis">Check My Family&apos;s Pool Compatibility</CtaButton>
          <CtaButton href="/pricing" variant="secondary">See pricing and financing</CtaButton>
        </div>
      </div>
      <div className="grid border-t border-[#0757c7]/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((badge) => (
          <div key={badge} className="flex min-h-20 items-center justify-center gap-3 border-[#0757c7]/10 px-4 text-center text-xs font-black uppercase tracking-[0.08em] text-[#052f78] sm:border-l">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1da35b]/10 text-base text-[#1da35b]">✓</span>
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ParentsLandingPage({ bodyFontClassName = "" }: { bodyFontClassName?: string }) {
  return (
    <main className={`min-h-screen overflow-hidden bg-white text-[#071832] ${bodyFontClassName}`}>
      <TopBar />
      <HeroSection />
      <ProblemSection />
      <AgitationSection />
      <PromiseSection />
      <MechanismSection />
      <CompatibilitySection />
      <ObjectionSection />
      <OfferSection />
      <FinalCtaSection />
    </main>
  );
}
