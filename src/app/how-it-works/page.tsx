import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "How Fusion 44X Works & Technical Specs",
  description:
    "Detailed scientific overview, installation fit, and technical specs for the Fusion 44X Hydro-pH-Infusion system.",
  alternates: {
    canonical: `${siteConfig.url}/how-it-works`,
  },
};

const specs = [
  ["Water treatment method", "Patented Hydro-pH-Infusion process"],
  ["Pool compatibility", "Residential pools and spas with existing circulation equipment"],
  ["Install approach", "Inline system integration with the current plumbing loop"],
  ["Power options", "110v and 220v options depending on installation"],
  ["Warranty", "Lifetime warranty"],
] as const;

const steps = [
  ["Install inline", "The system is connected into the existing circulation loop by a qualified installer."],
  ["Treat inside the unit", "Water moves through the contained Fusion 44X process before returning to the pool."],
  ["Circulate balanced water", "Your pump distributes hydrogen-rich, balanced water through the pool or spa."],
] as const;

export default function HowItWorksPage() {
  return (
    <div className="bg-white text-[#071832]">
      <section className="relative isolate overflow-hidden bg-[#eaf6ff] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Image src="/probe.png" alt="" fill sizes="100vw" className="object-contain p-10 opacity-12" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98),rgba(255,255,255,0.88),rgba(255,255,255,0.56))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#0757c7]/15 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#0757c7] shadow-sm">
              Science & Technical Specs
            </div>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#071832] sm:text-6xl lg:text-7xl">
              How Hydro-pH-Infusion changes pool water.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#052f78] lg:text-xl">
              Fusion 44X uses a patented contained process to create hydrogen-rich, balanced water without adding chlorine, salt, or sanitizer chemicals to the pool.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {steps.map(([title, copy], index) => (
            <article key={title} className="rounded-[1.35rem] border border-[#0757c7]/12 bg-[#f4fbff] p-6 shadow-[0_16px_42px_rgba(6,27,58,0.08)]">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#0757c7] text-sm font-black text-white">{index + 1}</div>
              <h2 className="mt-5 text-2xl font-black uppercase leading-none tracking-[-0.04em] text-[#071832]">{title}</h2>
              <p className="mt-4 text-sm font-bold leading-7 text-[#052f78]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f4fbff] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0757c7]">Technical blueprint</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#071832] sm:text-5xl">Specs buyers ask for before checkout.</h2>
          </div>
          <div className="overflow-hidden rounded-[1.35rem] border border-[#0757c7]/12 bg-white shadow-[0_16px_42px_rgba(6,27,58,0.08)]">
            {specs.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-[#0757c7]/10 p-5 last:border-b-0 sm:grid-cols-[0.55fr_1fr]">
                <p className="text-sm font-black uppercase tracking-[0.08em] text-[#071832]">{label}</p>
                <p className="text-sm font-bold leading-6 text-[#052f78]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_14%_46%,rgba(28,137,255,0.36),transparent_18rem),linear-gradient(90deg,#03142e,#06285c_58%,#03142e)] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#061c3a] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <Image src="/probe.png" alt="Fusion 44X probe and technical system component" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain p-6 sm:p-8" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-100">Next step</p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-6xl">Match the science to your pool size.</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing" className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-6 text-center text-xs font-black uppercase tracking-[0.12em] text-[#0757c7] transition hover:-translate-y-0.5">See sizing and financing</Link>
              <Link href="/" className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/25 px-6 text-center text-xs font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5">Back to brand hub</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
