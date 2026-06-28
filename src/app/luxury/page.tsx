import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/constants";
import { checkoutHref } from "@/lib/products";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Fusion 44X | Luxury Pool Water Without Harsh Chemicals",
  description:
    "A luxury homeowner landing page focused on premium water aesthetics, outdoor living asset protection, and travertine-friendly pool care.",
  alternates: {
    canonical: `${siteConfig.url}/luxury`,
  },
  openGraph: {
    title: "Fusion 44X | Luxury Pool Water Without Harsh Chemicals",
    description:
      "Protect the look, feel, and finishes of high-end pool environments with Fusion 44X.",
    url: `${siteConfig.url}/luxury`,
    type: "website",
  },
};

const proofPoints = [
  "Premium clear-water aesthetic",
  "No chlorine odor around outdoor living spaces",
  "Designed for high-end residential pools",
] as const;

const assetCards = [
  {
    title: "Stone & Travertine",
    copy: "Reduce dependence on harsh chemical routines around expensive pool surrounds and hardscape.",
    image: "/fusion-clear-pool.jpg",
  },
  {
    title: "Outdoor Living",
    copy: "A luxury pool should not make the patio smell like chlorine after every swim.",
    image: "/fusion-family-pool.jpeg",
  },
  {
    title: "Water Presentation",
    copy: "Clear, soft-feeling water helps the pool look like an asset, not a maintenance liability.",
    image: "/poolex4.webp",
  },
] as const;

function CtaButton({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-14 items-center justify-center rounded-xl px-6 text-center text-xs font-black uppercase tracking-[0.12em] transition hover:-translate-y-0.5 ${
        secondary
          ? "border border-[#0757c7]/25 bg-white text-[#052f78] shadow-[0_14px_34px_rgba(5,47,120,0.10)] hover:border-[#0757c7]/45"
          : "bg-[linear-gradient(180deg,#0967e8,#064db7)] text-white shadow-[0_18px_46px_rgba(7,87,199,0.32)]"
      }`}
    >
      {children}
    </Link>
  );
}

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex w-fit rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] ${dark ? "border-cyan-200/20 bg-white/10 text-cyan-100" : "border-[#0757c7]/15 bg-white/85 text-[#0757c7] shadow-sm"}`}>
      {children}
    </div>
  );
}

export default function LuxuryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#071832]">
      <header className="sticky top-0 z-50 border-b border-[#0757c7]/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/fusion44x-logo.png" alt="Fusion 44X" width={52} height={52} className="h-12 w-12 rounded-full border border-[#0757c7]/10 bg-white object-cover shadow-sm" priority />
            <div className="leading-none">
              <p className="text-lg font-black tracking-[-0.04em] text-[#052f78] sm:text-xl">Fusion 44X</p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#0757c7]">Water made perfect</p>
            </div>
          </Link>
          <Link href="/free-spa-analysis" className="inline-flex items-center justify-center rounded-full bg-[#0757c7] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#052f78]">Explore fit</Link>
        </div>
      </header>

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#eaf6ff] px-4 pb-14 pt-10 sm:px-6 md:min-h-[720px] lg:min-h-[calc(100svh-77px)] lg:px-8">
        <Image src="/fusion-clear-pool.jpg" alt="" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.80)_38%,rgba(255,255,255,0.18)_70%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto flex min-h-[inherit] max-w-7xl items-center">
          <div className="max-w-2xl">
            <Pill>Luxury homeowner landing page</Pill>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#071832] sm:text-6xl lg:text-7xl">
              Protect the pool, the stone, and the way the estate feels.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#052f78] lg:text-xl">
              Fusion 44X creates hydrogen-rich, balanced water without chlorine, chemicals, or pesticides, so premium outdoor spaces stay beautiful and easier to enjoy.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/free-spa-analysis">Check system sizing</CtaButton>
              <CtaButton href="/how-it-works" secondary>View technical specs</CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#071832] sm:text-5xl lg:text-6xl">
            Luxury pool ownership is about protecting the whole environment.
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {assetCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-[1.35rem] bg-white shadow-[0_16px_42px_rgba(6,27,58,0.13)]">
                <div className="relative aspect-[16/10]">
                  <Image src={card.image} alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061b3a]/78 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] text-white">{card.title}</h3>
                  </div>
                </div>
                <p className="p-5 text-sm font-bold leading-7 text-[#052f78]">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_14%_46%,rgba(28,137,255,0.36),transparent_18rem),linear-gradient(90deg,#03142e,#06285c_58%,#03142e)] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#061c3a] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <Image src="/probe.png" alt="Fusion 44X monitoring probe" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain p-6 sm:p-8" />
          </div>
          <div>
            <Pill dark>Hydro-pH-Infusion</Pill>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-6xl">Premium water without the harsh chemical story.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point} className="rounded-3xl border border-white/10 bg-white/[0.07] p-4 text-center text-xs font-black uppercase leading-5 tracking-[0.05em] text-white backdrop-blur-sm">{point}</div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={checkoutHref("fusion-residential-pool")}>Start pool checkout</CtaButton>
              <CtaButton href="/pricing" secondary>See financing</CtaButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
