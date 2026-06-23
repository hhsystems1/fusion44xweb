import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/constants";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1749b7]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function TopBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/fusion44x-logo.png"
            alt="Fusion 44X"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-slate-200 bg-white object-cover"
            priority
          />
          <div>
            <p className="text-sm font-bold tracking-tight text-slate-950">Fusion 44X</p>
            <p className="text-xs text-slate-500">Video-first landing page</p>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/free-spa-analysis"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-[#1749b7] hover:text-[#1749b7]"
          >
            Open Form
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="hidden rounded-full bg-[#1749b7] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#123c96] sm:inline-flex"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function VideoSalesLanding() {
  const vimeoEmbedUrl =
    "https://player.vimeo.com/video/1203883518?title=0&byline=0&portrait=0&dnt=1&autoplay=1&muted=1&loop=1&background=1";
  const bullets = [
    "Premium dark-to-blue visuals",
    "Video at the center of the page",
    "Clear path to the form or pricing",
    "Built for ad traffic and mobile scans",
  ];

  return (
    <main className="bg-[#f4f8ff] text-slate-950">
      <TopBar />

      <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(23,73,183,0.14),transparent_32%),radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.1),rgba(244,248,255,1))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1749b7]">
              Page 1: video sales letter
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              What if your pool water was actually easier to trust?
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              The whole page is built around the video. It introduces the promise fast, then points
              people either to the form or to pricing before they wander off and start thinking about
              something less useful.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#1749b7,#1f66d1,#2d7ff0)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(23,73,183,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(23,73,183,0.3)]"
              >
                See Pricing &amp; Financing
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/free-spa-analysis"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-[#1749b7] hover:text-[#1749b7]"
              >
                Open the Form
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Zero chlorine",
                "Zero chemicals",
                "Premium water feel",
                "Clear next step",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <CheckIcon className="h-4 w-4 text-[#1749b7]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-video bg-slate-950">
                <iframe
                  src={vimeoEmbedUrl}
                  title="Fusion44x video sales letter"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,18,45,0.12),rgba(9,18,45,0.18))]" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1749b7] shadow-sm backdrop-blur">
                  Video proof
                </div>
                <div className="absolute bottom-4 right-4 rounded-full bg-[#1749b7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-blue-500/20">
                  Play to learn more
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Video
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">Hero walkthrough</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Keep the pitch compact and let the visuals carry the first impression.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  CTA
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">Form or pricing</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Two clean exits, no maze, no “we’ll explain later.”
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Tone
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">Premium, calm, direct</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  If it starts sounding like a generic SaaS pitch, the page loses the plot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <Image
                src="/fusion-family-pool.jpeg"
                alt="Family enjoying a pool with Fusion 44X"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="What the video sells"
                title="The landing page should answer the objection before it gets the chance to grow teeth."
                description="This section gives you the same comparison energy as the reference screenshot: what traditional pool ownership feels like, then what changes when Fusion 44X is the system."
              />
              <div className="mt-6 grid gap-4">
                {bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef4ff] text-[#1749b7]">
                      <CheckIcon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium text-slate-700">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="grid gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 md:grid-cols-[1.1fr_1fr_1fr]">
              <div>Experience</div>
              <div>Traditional approach</div>
              <div>Fusion44X</div>
            </div>
            {[
              ["Attention flow", "Static brochure page", "Video-led and easier to scan"],
              ["Next step", "Buried under too much copy", "Form and pricing stay obvious"],
              ["Visual quality", "Generic template energy", "Premium editorial feel"],
              ["Traffic fit", "Leaky for paid traffic", "Built to keep momentum"],
            ].map(([label, traditional, fusion44x], index) => (
              <div
                key={label}
                className={[
                  "grid gap-4 px-5 py-4 text-sm leading-7 md:grid-cols-[1.1fr_1fr_1fr]",
                  index !== 3 ? "border-b border-slate-100" : "",
                ].join(" ")}
              >
                <div className="font-medium text-slate-900">{label}</div>
                <div className="text-slate-600">{traditional}</div>
                <div className="text-[#1749b7]">{fusion44x}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Fusion44X difference"
            title="Give people a clean comparison they can understand without a sales seminar."
            description="The left side is the old way. The right side is the better story. That is the whole trick, and it works because humans like obvious answers."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="border-b border-slate-200 bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Traditional pool
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[1fr_0.9fr]">
                <div className="space-y-3 text-sm leading-7 text-slate-600">
                  <p>• Chemical dependent</p>
                  <p>• Chlorine smell</p>
                  <p>• Irritated eyes</p>
                  <p>• Manual balancing</p>
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/fusion-clear-pool.jpg"
                    alt="Traditional pool comparison"
                    width={900}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-blue-200 bg-[#eef4ff] shadow-sm">
              <div className="border-b border-blue-200 bg-[linear-gradient(135deg,#1749b7,#1f66d1)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Fusion44X pool
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-[1fr_0.9fr]">
                <div className="space-y-3 text-sm leading-7 text-slate-700">
                  <p>• Hydrogen-rich water experience</p>
                  <p>• Zero chlorine</p>
                  <p>• Zero chemicals</p>
                  <p>• Clean, healthy water</p>
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/poolex4.webp"
                    alt="Fusion44X comparison"
                    width={900}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </article>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-8 text-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
                  Ready for the next step?
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Start with the video, then send them to the form before they drift away.
                </h3>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/free-spa-analysis"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Open the Form
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
