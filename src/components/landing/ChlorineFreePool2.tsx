"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useFusion44xLandingTracking } from "@/hooks/useFusion44xLandingTracking";

interface ChlorineFreePool2Props {
  campaign: string;
  pagePath: string;
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="translate-y-7 opacity-0 transition-all duration-700 ease-out [&.is-visible]:translate-y-0 [&.is-visible]:opacity-100"
    >
      {children}
    </div>
  );
}

const KEYFRAMES = `
@keyframes drift {
  from { transform: translate3d(-2%, -1%, 0) rotate(0deg); }
  to { transform: translate3d(2%, 1%, 0) rotate(8deg); }
}
`;

export function ChlorineFreePool2({ campaign, pagePath }: ChlorineFreePool2Props) {
  useFusion44xLandingTracking({ campaign, pagePath });

  return (
    <div className="overflow-hidden bg-[#f7fffb] font-sans text-[#071211]">
      <style>{KEYFRAMES}</style>

      <Hero />
      <Intro />
      <HowItWorks />
      <Compare />
      <Closing />
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────── */

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const fallback = fallbackRef.current;
    if (!video || !fallback) return;

    const hide = () => {
      video.style.display = "none";
      fallback.style.display = "block";
    };

    video.addEventListener("error", hide);
    const source = video.querySelector("source");
    source?.addEventListener("error", hide);

    return () => {
      video.removeEventListener("error", hide);
      source?.removeEventListener("error", hide);
    };
  }, []);

  return (
    <section
      className="relative isolate grid min-h-svh items-stretch text-white"
      aria-label="Chlorine-free pool hero"
      style={{
        background:
          "linear-gradient(110deg,rgba(7,18,17,0.86) 0%,rgba(7,18,17,0.58) 36%,rgba(7,18,17,0.12) 72%),radial-gradient(circle at 78% 34%,rgba(0,184,200,0.35) 0%,transparent 28%),linear-gradient(135deg,#0b4f56 0%,#20b7c0 48%,#d9fff5 100%)",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
        aria-hidden
      >
        <source src="pool-hero-video.mp4" type="video/mp4" />
      </video>

      <div
        ref={fallbackRef}
        className="absolute inset-0 -z-10 hidden overflow-hidden"
        aria-hidden
        style={{
          background:
            "linear-gradient(132deg,rgba(3,76,83,0.92),rgba(0,184,200,0.7) 44%,rgba(234,255,249,0.88)),repeating-linear-gradient(112deg,rgba(255,255,255,0.24) 0 2px,transparent 2px 24px)",
        }}
      >
        <div
          className="absolute inset-[-20%] animate-[drift_16s_linear_infinite] opacity-100"
          style={{
            background:
              "radial-gradient(ellipse at 24% 34%,rgba(255,255,255,0.48) 0%,transparent 18%),radial-gradient(ellipse at 74% 44%,rgba(184,255,49,0.18) 0%,transparent 16%),repeating-radial-gradient(ellipse at 50% 50%,rgba(255,255,255,0.2) 0 2px,transparent 2px 18px)",
            mixBlendMode: "soft-light",
          }}
        />
        <div
          className="absolute inset-[-20%] animate-[drift_24s_linear_infinite_reverse] opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at 24% 34%,rgba(255,255,255,0.48) 0%,transparent 18%),radial-gradient(ellipse at 74% 44%,rgba(184,255,49,0.18) 0%,transparent 16%),repeating-radial-gradient(ellipse at 50% 50%,rgba(255,255,255,0.2) 0 2px,transparent 2px 18px)",
            mixBlendMode: "soft-light",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[-1] h-[38%] bg-gradient-to-t from-[rgba(7,18,17,0.72)] to-transparent" />

      <nav
        className="mx-auto flex w-full max-w-[1160px] items-center justify-between px-5 pb-0 pt-6 max-sm:px-[14px] max-sm:pt-[18px]"
        style={{ position: "absolute", inset: "0 0 auto", zIndex: 3 }}
        aria-label="Primary navigation"
      >
        <a href="#" className="inline-flex items-center gap-2.5 text-lg font-black uppercase tracking-wide text-white no-underline max-sm:text-[15px]">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-full border-2 border-white/70 text-[13px] text-[#b8ff31] max-sm:h-[34px] max-sm:w-[34px]">
            44X
          </span>
          <span>Fusion 44X</span>
        </a>
        <a
          href="#book"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/36 px-[18px] text-sm font-extrabold text-white no-underline backdrop-blur-md transition-all duration-180 hover:-translate-y-0.5 hover:border-[#b8ff31]/74 hover:bg-[rgba(7,18,17,0.2)] max-sm:hidden"
        >
          Book a Pool Check
        </a>
      </nav>

      <div className="mx-auto flex w-full max-w-[1160px] flex-col justify-end px-5 pb-14 pt-28 max-sm:px-[14px] max-sm:pb-9">
        <div className="max-w-[760px]">
          <Reveal>
            <p className="mb-[18px] inline-flex items-center gap-[9px] text-[13px] font-black uppercase leading-none text-[#b8ff31]">
              <span className="inline-block h-[2px] w-[34px] bg-current" />
              Chlorine-free pool experience
            </p>
            <h1 className="mb-5 max-w-[740px] font-['Impact',Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(58px,10vw,142px)] font-black leading-[0.86] tracking-normal text-white uppercase max-sm:text-[clamp(56px,18vw,86px)]">
              Clear water. <span className="text-[#b8ff31] drop-shadow-[0_0_28px_rgba(184,255,49,0.26)]">Zero harsh smell.</span>
            </h1>
            <p className="mb-[30px] max-w-[560px] text-[clamp(18px,2vw,24px)] font-semibold leading-[1.35] text-white/90 max-sm:max-w-[440px]">
              A softer, cleaner-feeling pool setup for families who want the swim without the chemical bite.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch">
              <a
                href="#book"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#b8ff31] px-6 text-[15px] font-black uppercase text-[#071211] no-underline shadow-[0_18px_42px_rgba(184,255,49,0.2)] transition-all duration-180 hover:-translate-y-0.5 hover:bg-[#d6ff72] hover:shadow-[0_24px_52px_rgba(184,255,49,0.3)] max-sm:w-full"
              >
                Get My Pool Plan
              </a>
              <a
                href="#how"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/34 bg-[rgba(255,255,255,0.12)] px-6 text-[15px] font-black uppercase text-white no-underline shadow-none backdrop-blur-md transition-all duration-180 hover:bg-[rgba(255,255,255,0.2)] max-sm:w-full"
              >
                See How It Works
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="mt-14 grid w-full max-w-[740px] grid-cols-3 gap-0 border-t border-white/22 max-sm:mt-[38px] max-sm:grid-cols-1"
              aria-label="Key benefits"
            >
              {[
                { strong: "No chlorine odor", span: "Water that feels fresh when you step outside." },
                { strong: "Gentler feel", span: "Less harshness on skin, hair, eyes, and swim gear." },
                { strong: "Simple switch", span: "Built for a clean changeover without a confusing process." },
              ].map((item) => (
                <div key={item.strong} className="pt-5 pr-[22px] max-sm:pt-4 max-sm:pr-0">
                  <strong className="block text-[26px] font-black leading-none text-[#b8ff31]">
                    {item.strong}
                  </strong>
                  <span className="mt-[7px] block text-[13px] font-bold leading-[1.35] text-white/76">
                    {item.span}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Intro ─────────────────────────────────────────────────── */

function Intro() {
  return (
    <section className="bg-[#f7fffb] py-[92px] max-sm:py-[70px]">
      <div className="mx-auto grid max-w-[1160px] items-end gap-[60px] px-5 max-sm:grid-cols-1 max-sm:gap-[34px] max-sm:px-[14px] sm:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.48fr)]">
        <Reveal>
          <p className="mb-[15px] text-[13px] font-black uppercase text-[#007b8a]">The promise</p>
          <h2 className="mb-[22px] font-['Impact',Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(44px,7vw,92px)] font-black leading-[0.92] tracking-normal uppercase">
            Pool water that feels as clean as it looks.
          </h2>
          <p className="max-w-[690px] text-[20px] font-semibold leading-[1.5] text-[rgba(7,18,17,0.72)]">
            Fusion 44X gives the page a sharper, more confident pitch: bright pool energy, simple
            benefit-led copy, and a hero that lets your video do the selling.
          </p>
        </Reveal>
        <Reveal delay={70}>
          <div
            className="aspect-square w-full max-w-[260px] rotate-[-8deg] self-end justify-self-end rounded-full border-2 border-[#071211] text-[#071211] max-sm:justify-self-start max-sm:w-[190px]"
            aria-label="Chlorine-free"
          >
            <span className="flex h-full w-full items-center justify-center px-[12%] font-['Impact',Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(34px,5vw,58px)] font-black leading-[0.92] uppercase text-center">
              Chlorine Free
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── How It Works ─────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "Check the current water.",
    desc: "Start with the pool you already have. Test, inspect, and identify what needs to change.",
  },
  {
    num: "02",
    title: "Convert the care plan.",
    desc: "Move away from the harsh chlorine routine and into a cleaner-feeling treatment system.",
  },
  {
    num: "03",
    title: "Swim with less bite.",
    desc: "Keep the water clear, the routine simple, and the pool easier to enjoy all season.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-[#dff7ef] py-[100px] max-sm:py-[70px]" id="how">
      <div className="mx-auto max-w-[1160px] px-5 max-sm:px-[14px]">
        <Reveal>
          <p className="mb-[15px] text-[13px] font-black uppercase text-[#007b8a]">How it works</p>
        </Reveal>
        <div className="grid grid-cols-3 border-y-2 border-[#071211] max-sm:grid-cols-1">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 70}>
              <article
                className={`flex min-h-[310px] flex-col justify-between ${
                  i === 0
                    ? "pr-8 max-sm:pb-7 max-sm:pr-0 sm:border-r-2 sm:border-[#071211]"
                    : i === 1
                      ? "border-[#071211] px-8 max-sm:border-b-2 max-sm:px-0 max-sm:pb-7 sm:border-r-2"
                      : "pl-8 max-sm:pl-0"
                } py-[34px] max-sm:min-h-[220px] max-sm:py-7 max-sm:[&:not(:last-child)]:border-b-2 max-sm:[&:not(:last-child)]:border-[#071211]`}
              >
                <span className="text-[15px] font-black text-[#007b8a]">{step.num}</span>
                <div>
                  <h3 className="mb-4 text-[clamp(25px,3vw,40px)] font-black leading-none">
                    {step.title}
                  </h3>
                  <p className="text-[17px] font-semibold leading-[1.45] text-[rgba(7,18,17,0.68)]">
                    {step.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Compare ──────────────────────────────────────────────── */

const comparisons = [
  {
    label: "Before",
    strong: "Strong smell after every treatment.",
    p: "That familiar pool bite can make the water feel less inviting, even when it is clear.",
  },
  {
    label: "After",
    strong: "Fresh water that looks bright on video.",
    p: "Your hero video becomes the proof point: clean movement, sparkle, and no heavy chemical mood.",
  },
  {
    label: "Before",
    strong: "Generic pool-service pitch.",
    p: "Too much copy makes the page feel like a brochure instead of a simple funnel.",
  },
  {
    label: "After",
    strong: "One crisp conversion path.",
    p: "Watch the water, understand the benefit, and book the pool check.",
  },
];

function Compare() {
  return (
    <section className="bg-white py-[92px] max-sm:py-[70px]">
      <div className="mx-auto max-w-[1160px] px-5 max-sm:px-[14px]">
        <div className="mb-[42px] flex items-end justify-between gap-8 max-sm:flex-col">
          <Reveal>
            <p className="mb-[15px] text-[13px] font-black uppercase text-[#007b8a]">Why people care</p>
            <h2 className="mb-[22px] font-['Impact',Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(44px,7vw,92px)] font-black leading-[0.92] tracking-normal uppercase">
              Less chemical cloud. More backyard shine.
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="max-w-[690px] text-[20px] font-semibold leading-[1.5] text-[rgba(7,18,17,0.72)]">
              The page should make the decision feel obvious in under ten seconds: softer water,
              cleaner air around the pool, and a simpler path to get there.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 border-t border-[rgba(7,18,17,0.14)] max-sm:grid-cols-1">
          {comparisons.map((item, i) => (
            <Reveal key={`${item.label}-${i}`} delay={i * 70}>
              <article
                className={`py-8 ${
                  i % 2 === 0
                    ? "pr-[34px] max-sm:pr-0"
                    : "border-l border-[rgba(7,18,17,0.14)] pl-[34px] max-sm:border-l-0 max-sm:pl-0"
                } border-b border-[rgba(7,18,17,0.14)] max-sm:py-7`}
              >
                <span className="mb-[18px] inline-flex text-[13px] font-black uppercase text-[#007b8a]">
                  {item.label}
                </span>
                <strong className="mb-2.5 block text-[clamp(26px,3vw,40px)] font-black leading-none">
                  {item.strong}
                </strong>
                <p className="text-[17px] font-semibold leading-[1.45] text-[rgba(7,18,17,0.68)]">
                  {item.p}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Closing ──────────────────────────────────────────────── */

function Closing() {
  return (
    <section
      className="py-[112px] text-white max-sm:py-[70px]"
      id="book"
      style={{
        background:
          "linear-gradient(115deg,rgba(7,18,17,0.96),rgba(16,36,33,0.86)),linear-gradient(90deg,#00b8c8,#b8ff31)",
      }}
    >
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-5 max-sm:grid-cols-1 max-sm:gap-[34px] max-sm:px-[14px] sm:grid-cols-[minmax(0,0.9fr)_minmax(260px,0.44fr)]">
        <Reveal>
          <p className="mb-[15px] text-[13px] font-black uppercase text-[#b8ff31]">Ready for the switch?</p>
          <h2 className="mb-[22px] font-['Impact',Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[clamp(44px,7vw,92px)] font-black leading-[0.92] tracking-normal uppercase">
            Make the pool feel new again.
          </h2>
          <p className="max-w-[690px] text-[20px] font-semibold leading-[1.5] text-white/78">
            Replace this call-to-action with your booking link, phone number, or form embed when you
            move from prototype to live funnel.
          </p>
          <a
            href="mailto:hello@example.com?subject=Chlorine-Free%20Pool%20Plan"
            className="mt-6 inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#b8ff31] px-6 text-[15px] font-black uppercase text-[#071211] no-underline shadow-[0_18px_42px_rgba(184,255,49,0.2)] transition-all duration-180 hover:-translate-y-0.5 hover:bg-[#d6ff72] hover:shadow-[0_24px_52px_rgba(184,255,49,0.3)] max-sm:w-full"
          >
            Request My Pool Plan
          </a>
        </Reveal>
        <Reveal delay={70}>
          <div className="border-l-2 border-[#b8ff31] pl-[30px] max-sm:pl-[22px]">
            <strong className="mb-2 block text-[42px] font-black leading-none text-[#b8ff31]">44X</strong>
            <span className="text-[17px] font-bold leading-[1.4] text-white/74">
              Built around clean visuals, high-contrast type, and a hero video that can carry the sale.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
