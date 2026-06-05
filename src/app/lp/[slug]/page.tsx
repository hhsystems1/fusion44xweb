import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { checkoutHref, getProduct } from "@/lib/products";
import { getLandingPage, landingPages } from "@/lib/landing-pages";

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
              daily chlorine handling, harsh smell, or constant chemical
              guesswork.
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
    </div>
  );
}
