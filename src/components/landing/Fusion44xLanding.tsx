"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";

import {
  CURRENT_MAIN_SITE_URL,
  type Fusion44xDestination,
} from "@/lib/fusion44xLinks";
import { checkoutHref, products } from "@/lib/products";
import { useFusion44xLandingTracking } from "@/hooks/useFusion44xLandingTracking";
import type { Fusion44xLandingCampaign } from "@/content/fusion44xLanding";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="m6 12 3.5 3.5L18 7"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 3 19 6v6c0 4.4-2.9 8.2-7 9-4.1-.8-7-4.6-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.1 11 14l3.8-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M9 7.5v9l8-4.5-8-4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WaveIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M2 15c2.3 0 2.3-2 4.6-2s2.3 2 4.6 2 2.3-2 4.6-2 2.3 2 4.6 2 2.3-2 2.6-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M2 10c2.3 0 2.3-2 4.6-2s2.3 2 4.6 2 2.3-2 4.6-2 2.3 2 4.6 2 2.3-2 2.6-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        opacity=".5"
      />
    </svg>
  );
}

function DropletIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M12 3s5.5 5.2 5.5 10.1A5.5 5.5 0 0 1 12 18.6a5.5 5.5 0 0 1-5.5-5.5C6.5 8.2 12 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Button({
  href,
  label,
  tone = "primary",
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  tone?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}) {
  const toneClass =
    tone === "primary"
      ? "border-accent/35 bg-[linear-gradient(135deg,rgba(212,133,43,0.98),rgba(240,160,64,0.88),rgba(184,118,11,0.98))] text-white shadow-[0_18px_50px_rgba(212,133,43,0.28)]"
      : "border-white/15 bg-white/6 text-slate-100 hover:border-accent/35 hover:bg-white/10";

  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 sm:px-6 sm:py-3.5",
        "backdrop-blur-xl hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]",
        toneClass,
        className,
      ].join(" ")}
    >
      {label}
      {tone === "primary" ? <ArrowIcon className="h-4 w-4" /> : null}
    </a>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function BackgroundAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,133,43,0.14),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(240,160,64,0.12),transparent_26%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(180deg,rgba(2,6,23,0.28),rgba(2,6,23,0.92))]" />
      <div className="absolute left-[-7rem] top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-[f44xDrift_11s_ease-in-out_infinite]" />
      <div className="absolute right-[-7rem] top-1/3 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl animate-[f44xDrift_14s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/6 blur-3xl animate-[f44xPulse_10s_ease-in-out_infinite]" />
    </div>
  );
}

export function LandingHeader({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackLeadClick,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackLeadClick: (label: string, section?: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const primaryHref = buildOutboundHref(campaign.primaryCtaTarget);
  const secondaryHref = buildOutboundHref(campaign.secondaryCtaTarget);
  const navItems = [
    { href: "#products", label: "Products" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#financing", label: "Financing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-slate-950/78 px-4 py-3.5 shadow-[0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-2xl sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-white">
            <Image
              src="/fusion44x-logo.png"
              alt="Fusion 44X"
              width={72}
              height={72}
              className="h-11 w-11 rounded-full border border-accent/20 bg-slate-950/80 object-cover sm:h-12 sm:w-12"
              priority
            />
            <span className="hidden text-left sm:block">
              <span className="block text-sm font-semibold text-white">Fusion44x</span>
              <span className="block text-xs uppercase tracking-[0.22em] text-slate-400">
                Premium pool and spa systems
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              href={primaryHref}
              label={campaign.primaryCtaLabel}
              onClick={() =>
                trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, "header")
              }
            />
            <Button
              href={secondaryHref}
              label={campaign.secondaryCtaLabel}
              tone="secondary"
              onClick={() => trackLeadClick(campaign.secondaryCtaLabel, "header")}
            />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Button
                href={primaryHref}
                label={campaign.primaryCtaLabel}
                onClick={() => {
                  trackOutboundClick(
                    campaign.primaryCtaLabel,
                    campaign.primaryCtaTarget,
                    "header-mobile"
                  );
                  setOpen(false);
                }}
                className="w-full"
              />
              <Button
                href={secondaryHref}
                label={campaign.secondaryCtaLabel}
                tone="secondary"
                onClick={() => {
                  trackLeadClick(campaign.secondaryCtaLabel, "header-mobile");
                  setOpen(false);
                }}
                className="w-full"
              />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function HeroVisual({ campaign }: { campaign: Fusion44xLandingCampaign }) {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(2,6,23,0.98))] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.65)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,133,43,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%,rgba(212,133,43,0.08))]" />
        <div className="absolute inset-0 opacity-45 blur-2xl animate-[f44xSpinSlow_20s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(212,133,43,0.06),rgba(255,255,255,0)_16%,rgba(240,160,64,0.12),rgba(255,255,255,0)_44%,rgba(184,118,11,0.14),rgba(255,255,255,0)_76%,rgba(212,133,43,0.06))]" />

        <div className="relative space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              <SparkIcon className="h-4 w-4" />
              Fusion44x product system
            </div>
            <div className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs text-slate-300">
              Real product imagery
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.7),rgba(15,23,42,0.95))] p-4">
              <Image
                src="/poolex4.webp"
                alt="Residential pool with Fusion 44X installed"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,133,43,0.16),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08),transparent_28%)]" />
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                Residential pool
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-white/10 bg-black/60 p-3 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent/90">Pool system</p>
                  <p className="mt-1 text-lg font-semibold text-white">$5,890</p>
                  <p className="text-xs text-slate-300">As low as $99/month with financing</p>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-black/60 p-3 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent/90">Best fit</p>
                  <p className="mt-1 text-lg font-semibold text-white">5,000-28,000 gal</p>
                  <p className="text-xs text-slate-300">Residential pools with a premium finish</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/80">
                  Campaign angle
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{campaign.heroEyebrow}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{campaign.heroSubheadline}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-[1.35rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/80">
                      {product.shortName}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {product.price}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{product.financing}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-accent/15 bg-[linear-gradient(135deg,rgba(48,25,2,0.45),rgba(15,23,42,0.72))] p-4">
            <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
              <ShieldIcon className="h-4 w-4 text-accent" />
              Built from the same Fusion44x product imagery and price points used across the main site.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingHero({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackLeadClick,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackLeadClick: (label: string, section?: string) => void;
}) {
  const primaryHref = buildOutboundHref(campaign.primaryCtaTarget);
  const secondaryHref = buildOutboundHref(campaign.secondaryCtaTarget);

  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-36 sm:px-6 lg:px-8 lg:pt-40">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent backdrop-blur-xl">
            <SparkIcon className="h-4 w-4" />
            {campaign.heroEyebrow}
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            {campaign.heroHeadline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {campaign.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={primaryHref}
              label={campaign.primaryCtaLabel}
              onClick={() =>
                trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, "hero")
              }
              className="sm:min-w-[16rem]"
            />
            <Button
              href={secondaryHref}
              label={campaign.secondaryCtaLabel}
              tone="secondary"
              onClick={() => trackLeadClick(campaign.secondaryCtaLabel, "hero")}
              className="sm:min-w-[16rem]"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {campaign.trustBar.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
              >
                <CheckIcon className="h-4 w-4 text-accent" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <HeroVisual campaign={campaign} />
      </div>
    </section>
  );
}

export function TrustBar({ items }: { items: string[] }) {
  return (
    <section className="px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-slate-950/40 px-4 py-3"
            >
              <CheckIcon className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-slate-100">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VSLSection({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackVslPlay,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackVslPlay: (label: string) => void;
}) {
  const consultationHref = buildOutboundHref(campaign.secondaryCtaTarget);
  const primaryHref = buildOutboundHref(campaign.primaryCtaTarget);

  return (
    <SectionShell
      id="how-it-works"
      eyebrow={campaign.vslEyebrow}
      title={campaign.vslTitle}
      description={campaign.vslDescription}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(2,6,23,0.98))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,133,43,0.18),transparent_30%),linear-gradient(135deg,rgba(212,133,43,0.08),transparent_42%)]" />
          <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-accent/20 bg-[linear-gradient(180deg,rgba(2,6,23,0.65),rgba(15,23,42,0.95))]">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                type="button"
                onClick={() => trackVslPlay(`${campaign.slug}-vsl`)}
                className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-[linear-gradient(135deg,rgba(212,133,43,0.98),rgba(240,160,64,0.95))] text-white shadow-[0_25px_70px_rgba(212,133,43,0.3)] transition hover:scale-105"
                aria-label="Play the Fusion44x walkthrough"
              >
                <PlayIcon className="h-7 w-7 translate-x-0.5" />
              </button>
              <p className="mt-6 text-lg font-semibold text-white">Real product video or installation walkthrough</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                This slot can hold the live walkthrough while the side rail keeps the actual pool and spa products visible.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent/80">
              Why the video matters
            </p>
            <p className="mt-3 text-lg font-semibold text-white">{campaign.vslTitle}</p>
            <ul className="mt-4 space-y-3">
              {campaign.vslBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3">
            <Button
              href={primaryHref}
              label={campaign.primaryCtaLabel}
              onClick={() =>
                trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, "vsl")
              }
              className="w-full justify-between"
            />
            <Button
              href={consultationHref}
              label={campaign.secondaryCtaLabel}
              tone="secondary"
              onClick={() =>
                trackOutboundClick(campaign.secondaryCtaLabel, campaign.secondaryCtaTarget, "vsl")
              }
              className="w-full justify-between"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function ProblemSolutionSection({
  campaign,
}: {
  campaign: Fusion44xLandingCampaign;
}) {
  return (
    <SectionShell
      title="The buyer path should feel calm, premium, and easy to follow."
      description="The section below lays out the friction first, then explains how the landing page resolves it."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-rose-300/15 bg-[linear-gradient(180deg,rgba(127,29,29,0.2),rgba(15,23,42,0.9))] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-200/80">
            {campaign.problemTitle}
          </p>
          <p className="mt-3 text-base leading-7 text-slate-300">{campaign.problemIntro}</p>
          <ul className="mt-5 space-y-3">
            {campaign.problemItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-accent/15 bg-[linear-gradient(180deg,rgba(48,25,2,0.22),rgba(15,23,42,0.92))] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent/80">
            {campaign.solutionTitle}
          </p>
          <p className="mt-3 text-base leading-7 text-slate-300">{campaign.solutionIntro}</p>
          <ul className="mt-5 space-y-3">
            {campaign.solutionItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

export function BenefitsGrid({ campaign }: { campaign: Fusion44xLandingCampaign }) {
  const icons = [WaveIcon, DropletIcon, ShieldIcon, SparkIcon, CheckIcon, ArrowIcon];

  return (
    <SectionShell title={campaign.benefitsTitle} description={campaign.benefitsSubtitle}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {campaign.benefits.map((benefit, index) => {
          const Icon = icons[index % icons.length];

          return (
            <article
              key={benefit.title}
              className="group rounded-[1.6rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl transition hover:border-accent/25 hover:bg-white/8"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{benefit.description}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export function TechnologySection({
  campaign,
}: {
  campaign: Fusion44xLandingCampaign;
}) {
  return (
    <SectionShell
      id="products"
      eyebrow="Products"
      title={campaign.technologyTitle}
      description={campaign.technologySubtitle}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 backdrop-blur-xl"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              {product.featured ? (
                <div className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  Featured
                </div>
              ) : (
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                  Spa system
                </div>
              )}
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent/80">
                {product.shortName}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-white">{product.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{product.volume}</p>
              <div className="mt-6 flex items-end gap-3">
                <p className="text-4xl font-bold tracking-tight text-accent">{product.price}</p>
                <p className="pb-1 text-sm text-slate-400">{product.financing}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {product.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={checkoutHref(product.id)}
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(212,133,43,0.98),rgba(240,160,64,0.9))] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(212,133,43,0.22)] transition hover:-translate-y-0.5"
                >
                  Purchase
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/45 hover:text-accent"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function ComparisonSection({
  campaign,
}: {
  campaign: Fusion44xLandingCampaign;
}) {
  return (
    <SectionShell title={campaign.comparisonTitle} description={campaign.comparisonSubtitle}>
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 backdrop-blur-xl">
        <div className="grid gap-3 border-b border-white/10 bg-slate-950/45 px-5 py-4 text-sm font-semibold text-white md:grid-cols-[1.1fr_1fr_1fr]">
          <div>Experience</div>
          <div className="text-slate-300">Traditional approach</div>
          <div className="text-accent">Fusion44x</div>
        </div>
        {campaign.comparisonRows.map((row, index) => (
          <div
            key={row.label}
            className={[
              "grid gap-4 px-5 py-4 text-sm leading-7 md:grid-cols-[1.1fr_1fr_1fr]",
              index !== campaign.comparisonRows.length - 1 ? "border-b border-white/8" : "",
            ].join(" ")}
          >
            <div className="font-medium text-white">{row.label}</div>
            <div className="text-slate-300">{row.traditional}</div>
            <div className="text-accent">{row.fusion44x}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export function FinancingCTA({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackLeadClick,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackLeadClick: (label: string, section?: string) => void;
}) {
  const primaryHref = buildOutboundHref(campaign.primaryCtaTarget);
  const secondaryHref = buildOutboundHref(campaign.secondaryCtaTarget);

  return (
    <SectionShell
      id="financing"
      eyebrow={campaign.financingBadge}
      title={campaign.financingTitle}
      description={campaign.financingSubtitle}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-accent/15 bg-[linear-gradient(135deg,rgba(48,25,2,0.35),rgba(15,23,42,0.96))] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
              <WaveIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
                From $75/mo
              </p>
              <p className="mt-1 text-lg font-semibold text-white">Keep the upgrade within reach</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {campaign.financingBullets.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent/80">
            Next step
          </p>
          <p className="mt-3 text-lg font-semibold text-white">
            Send them to the live checkout or to a water specialist if they still need reassurance.
          </p>
          <div className="mt-6 grid gap-3">
            <Button
              href={primaryHref}
              label={campaign.primaryCtaLabel}
              onClick={() =>
                trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, "financing")
              }
              className="w-full justify-between"
            />
            <Button
              href={secondaryHref}
              label={campaign.secondaryCtaLabel}
              tone="secondary"
              onClick={() => trackLeadClick(campaign.secondaryCtaLabel, "financing")}
              className="w-full justify-between"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export function TestimonialsSection({
  campaign,
}: {
  campaign: Fusion44xLandingCampaign;
}) {
  return (
    <SectionShell
      id="proof"
      title={campaign.testimonialsTitle}
      description={campaign.testimonialsSubtitle}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {campaign.testimonials.map((testimonial) => (
          <article
            key={testimonial.quote}
            className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl"
          >
            {testimonial.badge ? (
              <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {testimonial.badge}
              </span>
            ) : null}
            <p className="mt-4 text-sm leading-7 text-slate-200">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="mt-5">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="mt-1 text-sm text-slate-400">{testimonial.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function FAQSection({ campaign }: { campaign: Fusion44xLandingCampaign }) {
  return (
    <SectionShell id="faq" title={campaign.faqTitle} description={campaign.faqSubtitle}>
      <div className="grid gap-4 lg:grid-cols-2">
        {campaign.faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur-xl"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
              <span>{faq.question}</span>
              <ChevronDownIcon className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-sm leading-7 text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

export function FinalCTA({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackLeadClick,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackLeadClick: (label: string, section?: string) => void;
}) {
  const primaryHref = buildOutboundHref(campaign.finalPrimaryCtaTarget);
  const secondaryHref = buildOutboundHref(campaign.finalSecondaryCtaTarget);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.25rem] border border-accent/15 bg-[linear-gradient(135deg,rgba(48,25,2,0.35),rgba(15,23,42,0.88))] p-8 shadow-[0_35px_110px_rgba(0,0,0,0.45)] sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-accent/80">
              Final conversion panel
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {campaign.finalTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {campaign.finalSubtitle}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={primaryHref}
              label={campaign.finalPrimaryCtaLabel}
              onClick={() =>
                trackOutboundClick(campaign.finalPrimaryCtaLabel, campaign.finalPrimaryCtaTarget, "final")
              }
              className="sm:min-w-[16rem]"
            />
            <Button
              href={secondaryHref}
              label={campaign.finalSecondaryCtaLabel}
              tone="secondary"
              onClick={() => trackLeadClick(campaign.finalSecondaryCtaLabel, "final")}
              className="sm:min-w-[16rem]"
            />
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Outbound links preserve the campaign UTM parameters from the landing page URL.
          </p>
        </div>
      </div>
    </section>
  );
}

export function StickyMobileCTA({
  campaign,
  buildOutboundHref,
  trackOutboundClick,
  trackLeadClick,
}: {
  campaign: Fusion44xLandingCampaign;
  buildOutboundHref: (destination: Fusion44xDestination) => string;
  trackOutboundClick: (label: string, destination: Fusion44xDestination, section?: string) => void;
  trackLeadClick: (label: string, section?: string) => void;
}) {
  const primaryHref = buildOutboundHref(campaign.primaryCtaTarget);
  const secondaryHref = buildOutboundHref(campaign.secondaryCtaTarget);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/90 px-3 py-3 backdrop-blur-2xl md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
        <Button
          href={primaryHref}
          label={campaign.primaryCtaLabel}
          onClick={() =>
            trackOutboundClick(campaign.primaryCtaLabel, campaign.primaryCtaTarget, "sticky-mobile")
          }
          className="w-full justify-center text-center"
        />
        <Button
          href={secondaryHref}
          label={campaign.secondaryCtaLabel}
          tone="secondary"
          onClick={() => trackLeadClick(campaign.secondaryCtaLabel, "sticky-mobile")}
          className="w-full justify-center text-center"
        />
      </div>
    </div>
  );
}

export default function Fusion44xLandingPage({
  campaign,
  pagePath,
}: {
  campaign: Fusion44xLandingCampaign;
  pagePath: string;
}) {
  const {
    buildOutboundHref,
    trackOutboundClick,
    trackLeadClick,
    trackVslPlay,
  } = useFusion44xLandingTracking({
    campaign: campaign.slug,
    pagePath,
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#03111f_40%,#020617_100%)] text-white">
      <BackgroundAtmosphere />
      <LandingHeader
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackLeadClick={trackLeadClick}
      />
      <LandingHero
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackLeadClick={trackLeadClick}
      />
      <TrustBar items={campaign.trustBar} />
      <VSLSection
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackVslPlay={trackVslPlay}
      />
      <ProblemSolutionSection campaign={campaign} />
      <BenefitsGrid campaign={campaign} />
      <TechnologySection campaign={campaign} />
      <ComparisonSection campaign={campaign} />
      <FinancingCTA
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackLeadClick={trackLeadClick}
      />
      <TestimonialsSection campaign={campaign} />
      <FAQSection campaign={campaign} />
      <FinalCTA
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackLeadClick={trackLeadClick}
      />
      <footer className="px-4 pb-28 pt-4 sm:px-6 md:pb-8 lg:px-8">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>Fusion44x landing system inside the existing website repo.</p>
            <a
              href={CURRENT_MAIN_SITE_URL}
              className="inline-flex items-center gap-2 text-accent transition hover:text-white"
            >
              Visit the current live main site
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
      <StickyMobileCTA
        campaign={campaign}
        buildOutboundHref={buildOutboundHref}
        trackOutboundClick={trackOutboundClick}
        trackLeadClick={trackLeadClick}
      />
    </main>
  );
}
