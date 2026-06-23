import Image from "next/image";
import Link from "next/link";
import { checkoutHref } from "@/lib/products";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[92vh] overflow-hidden">
      <Image
        src="/poolex4.webp"
        alt="Residential pool with Fusion 44X installed"
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
      <div className="relative mx-auto flex min-h-[80vh] md:min-h-[92vh] w-full max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-black/40 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Patented Hydro-pH-Infusion Technology
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Chlorine-Free Pool & Spa Water Systems
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Fusion 44X installs into existing pool and spa plumbing to help
              maintain clear, soft water without adding chlorine, salt, or
              sanitizer chemicals to the water.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={checkoutHref("fusion-residential-pool")}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40"
              >
                Purchase Pool System
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/free-spa-analysis"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-accent/60 hover:text-accent"
              >
                Get a Free Analysis
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href="/home-neo"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/65 transition-colors hover:text-accent"
              >
                View alternate home concept
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 12h15"
                  />
                </svg>
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl gap-3 text-xs text-white/75 sm:grid-cols-3">
              {[
                "Lifetime warranty",
                "Professional installation",
                "30-day money-back guarantee",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/15 bg-black/30 px-4 py-3 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden justify-self-end lg:block">
            <div className="w-[min(28rem,38vw)] overflow-hidden rounded-lg border border-white/15 bg-black/50 shadow-2xl shadow-black/40">
              <video
                className="aspect-[4/5] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/fusion-family-pool.jpeg"
              >
                <source src="/0604-1.mov" type="video/quicktime" />
                <source src="/0604-1.mp4" type="video/mp4" />
              </video>
              <div className="border-t border-white/10 bg-black/75 px-5 py-4">
                <p className="text-sm font-semibold text-white">
                  Fusion 44X probe close-up
                </p>
                <p className="mt-1 text-xs text-white/65">
                  A closer look at the contained process that powers cleaner
                  pool and spa water.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
