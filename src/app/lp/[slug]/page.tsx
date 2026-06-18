import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { checkoutHref, getProduct } from "@/lib/products";
import { getLandingPage, landingPages } from "@/lib/landing-pages";
import { trustFeatures, howItWorksSteps, testimonials, faqs } from "@/lib/constants";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

type LandingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: LandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.subtitle,
    openGraph: {
      title: page.title,
      description: page.subtitle,
      images: [page.image],
    },
  };
}

function TrustStrip() {
  const icons: Record<string, React.ReactNode> = {
    shield: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    tool: <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />,
    droplets: <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
    clock: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  };

  return (
    <section className="border-y border-white/5 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustFeatures.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {icons[f.icon]}
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">{f.title}</p>
                <p className="text-[10px] text-foreground-secondary mt-0.5">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
            Simple Process
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-white">How It Works</h2>
          <p className="mt-4 text-white/65">Getting started with Fusion 44X is straightforward. From installation to enjoying cleaner water in just a few steps.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <div key={step.step} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:border-accent/30">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-serif text-lg font-bold">{step.step}</div>
              <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{step.description}</p>
              {step.step < 4 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                  <svg className="h-5 w-5 text-accent/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  const stats = [
    { number: "15+", label: "Years Development" },
    { number: "10K+", label: "Systems Installed" },
    { number: "99.9%", label: "Satisfaction Rate" },
    { number: "Lifetime", label: "Warranty Coverage" },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,133,43,0.06)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
              Proof & Validation
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Tested. Patented. <span className="text-accent">Proven.</span>
            </h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              The Fusion 44X system is backed by independent testing, patented technology, and real-world installations. We believe in transparency and want you to feel confident in your decision.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                { title: "Independent Laboratory Testing", description: "Tested against drinking-water quality benchmarks for safety and performance." },
                { title: "US Patented Technology", description: "Our proprietary water treatment process is protected by multiple US patents." },
                { title: "Thousands of Installations", description: "Trusted by homeowners across the southwestern United States." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-white/60 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/science-lab-results" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover">
              View lab results & documentation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center transition-all duration-300 hover:border-accent/30">
                <p className="font-serif text-3xl font-bold text-accent">{stat.number}</p>
                <p className="mt-1 text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
            Real Results
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-white">What Our Customers Say</h2>
          <p className="mt-4 text-white/65">Hear from homeowners who have made the switch to Fusion 44X.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} name={t.name} location={t.location} rating={t.rating} text={t.text} hasBeforeAfter={t.beforeAfter} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent mb-4">
            Questions?
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-white">Frequently Asked Questions</h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,133,43,0.08)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-white">Ready to Transform Your Water?</h2>
        <p className="mt-4 text-white/65 mx-auto max-w-xl">Get your personalized spa analysis and discover how much you can save by switching to Fusion 44X. No obligation, just clarity.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={checkoutHref("fusion-residential-pool")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 active:scale-100">
            Purchase Pool System
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-accent/50 hover:text-accent">
            View Pricing
          </Link>
        </div>
        <p className="mt-6 text-xs text-white/60">Lifetime warranty included. Professional installation available.</p>
      </div>
    </section>
  );
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { slug } = await params;
  const page = getLandingPage(slug);

  if (!page) {
    notFound();
  }

  const product = getProduct(page.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-black">
      <section className="relative overflow-hidden">
        <Image
          src={page.image}
          alt={page.imageAlt}
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="relative mx-auto min-h-[70vh] md:min-h-[86vh] max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex min-h-[70vh] max-w-2xl flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {page.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/78 sm:text-lg">
              {page.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={checkoutHref(product.id)}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all hover:shadow-accent/40"
              >
                Purchase {product.shortName}
              </Link>
              <Link
                href="/free-spa-analysis"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/60 hover:text-accent"
              >
                Free Analysis
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {page.proofPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-sm font-semibold text-white backdrop-blur"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Why Homeowners Switch
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white">
              {product.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Fusion 44X is built for homeowners who want clear water without
              daily chlorine handling, harsh smell, or constant chemical guesswork.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.bullets.map((bullet) => (
              <div
                key={bullet}
                className="rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/75"
              >
                {bullet}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />
      <HowItWorksSection />
      <ProofSection />
      <ReviewsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
