import Image from "next/image";
import Link from "next/link";

import { siteConfig, faqs } from "@/lib/constants";
import { checkoutHref, products } from "@/lib/products";

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

function TopBar() {
  return (
    <div className="border-b border-slate-200 bg-white/80 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <p>Lifetime warranty and a 30-day money-back guarantee</p>
        <a href={`mailto:${siteConfig.email}`} className="text-accent transition hover:text-slate-900">
          Questions? {siteConfig.email}
        </a>
      </div>
    </div>
  );
}

function MainNav() {
  const links = [
    { href: "#products", label: "Shop All" },
    { href: "#guide", label: "How It Works" },
    { href: "#tips", label: "Water Wisdom" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#f7f2e9]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/fusion44x-logo.png"
            alt="Fusion44x"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full border border-slate-200 bg-white object-cover shadow-sm"
            priority
          />
          <div>
            <p className="text-sm font-bold tracking-tight text-slate-900">Fusion44x</p>
            <p className="text-xs text-slate-500">Pool & spa care made simple</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
          <Link
            href={checkoutHref("fusion-residential-pool")}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-hover"
          >
            Shop Now
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f2e9]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,133,43,0.10),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(13,148,136,0.09),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-20">
        <div className="relative z-10 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-accent shadow-sm">
            Simple. Premium. Pool-ready.
          </div>
          <h1 className="mt-6 max-w-2xl font-serif text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Pool & spa water care made simple.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Fusion44x brings the same easy-to-shop clarity Pool Day is known for, but with
            our actual pool and spa systems, real pricing, and the cleaner Fusion44x brand.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={checkoutHref("fusion-residential-pool")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-hover"
            >
              Shop Residential Pool
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              href={checkoutHref("fusion-spas-jacuzzis")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-accent hover:text-accent"
            >
              Shop Spa System
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              "Lifetime warranty",
              "Professional installation",
              "Helpful support",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/poolex4.webp"
                alt="Residential pool with Fusion44x installed"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-800 shadow-sm">
                Featured pool system
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-white/92 p-4 shadow-sm backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Residential pool
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">$5,890</p>
                  <p className="mt-1 text-sm text-slate-600">As low as $99/month with financing</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/92 p-4 shadow-sm backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Spa system
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">$2,890</p>
                  <p className="mt-1 text-sm text-slate-600">As low as $65/month financing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section id="products" className="bg-[#f7f2e9] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full border border-accent/20 bg-white px-4 py-1.5 text-xs font-medium text-accent shadow-sm">
            Find your water&apos;s perfect match
          </div>
          <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Two products. One simple buying path.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Like Pool Day, this page keeps the shopping story straightforward. The difference
            is we are showing the real Fusion44x product line, not a pretend shelf.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                {product.featured ? (
                  <div className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                    Best seller
                  </div>
                ) : (
                  <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                    Spa system
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {product.shortName}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-slate-950">{product.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{product.volume}</p>
                <div className="mt-6 flex items-end gap-3">
                  <p className="text-4xl font-bold tracking-tight text-slate-950">{product.price}</p>
                  <p className="pb-1 text-sm text-slate-500">{product.financing}</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {product.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={checkoutHref(product.id)}
                    className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-hover"
                  >
                    Shop now
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-accent hover:text-accent"
                  >
                    View pricing
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const features = [
    {
      title: "Easy to use",
      description:
        "Simple product pages, clear pricing, and a purchase path that does not make the customer work for it.",
    },
    {
      title: "Premium products",
      description:
        "Fusion44x systems are shown as distinct, high-end options instead of one generic catch-all offer.",
    },
    {
      title: "Clear guidance",
      description:
        "The layout keeps the shop flow obvious and the support path easy to find if the pool needs a fit check.",
    },
    {
      title: "Save time",
      description:
        "A better buying flow means less guessing, less bouncing around, and fewer dead-end clicks.",
    },
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-2xl font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          The highest quality and easiest to use products you can buy
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.75rem] border border-slate-200 bg-[#f7f2e9] p-6 shadow-sm"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-accent/10" />
              <h3 className="text-lg font-semibold text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TipsSection() {
  const tips = [
    {
      title: "Weekly routine",
      description:
        "Use the system as part of a regular pool check-in, so the water stays clear and the process stays predictable.",
    },
    {
      title: "Targeted care",
      description:
        "When something seems off, move straight to the product that addresses the issue instead of building a chemistry circus.",
    },
    {
      title: "Opening & closing",
      description:
        "Seasonal changes are easier when the product lineup and support path are already obvious.",
    },
  ];

  return (
    <section id="tips" className="bg-[#f7f2e9] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
            Water wisdom
          </div>
          <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Let us help you help your water
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The Pool Day inspiration is clear here: helpful content that builds trust and
            points people back toward the right product without turning into a dissertation.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {tips.map((tip) => (
            <article
              key={tip.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 aspect-[4/3] rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(212,133,43,0.12),rgba(13,148,136,0.10))]" />
              <h3 className="text-lg font-semibold text-slate-950">{tip.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{tip.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
            Frequently Asked Questions
          </div>
          <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Questions? We kept the answers short.
          </h2>
        </div>
        <div className="mt-10">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#f7f2e9] shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-slate-950">
                  <span>{faq.question}</span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-accent transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-slate-200 px-6 pb-5 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportCTA() {
  return (
    <section className="bg-[#f7f2e9] px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,rgba(212,133,43,0.10),rgba(255,255,255,0.85))] p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Need help deciding?
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              We&apos;re here if you need a fit check before you buy.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Chat, email, or call and we&apos;ll help you sort the right Fusion44x system for the
              pool or spa without making it weird.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:justify-self-end">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-slate-800"
            >
              Call {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-accent hover:text-accent"
            >
              Email support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PoolDayLanding() {
  return (
    <main className="min-h-screen bg-[#f7f2e9] text-slate-900">
      <TopBar />
      <MainNav />
      <Hero />
      <ProductGrid />
      <FeatureGrid />
      <TipsSection />
      <FAQSection />
      <SupportCTA />
    </main>
  );
}
