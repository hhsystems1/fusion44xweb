import Image from "next/image";
import Link from "next/link";
import { checkoutHref, products } from "@/lib/products";

export function ProductModule() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
              <video
                className="aspect-video w-full bg-black object-cover"
                controls
                preload="metadata"
                playsInline
                poster="/fusion-family-pool.jpeg"
              >
                <source src="/0604-1.mov" type="video/quicktime" />
                <source src="/0604-1.mp4" type="video/mp4" />
              </video>
              <div className="border-t border-white/10 bg-surface/80 px-5 py-4">
                <p className="text-sm font-semibold text-foreground">
                  Fusion 44X probe close-up
                </p>
                <p className="mt-1 text-xs text-foreground-secondary">
                  The probe powers the contained process before treated water
                  circulates through the pool or spa system.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
              The Technology
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              One System for Pools and Spas
            </h2>
            <p className="mt-4 text-foreground-secondary leading-relaxed">
              Fusion 44X uses a patented contained process inside the unit to
              treat pool and spa water. It installs inline with existing
              plumbing and works automatically, reducing chemical handling and
              routine water-care work.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-accent/30"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-foreground-secondary">
                      {product.volume}
                    </p>
                    <p className="mt-4 text-2xl font-bold text-accent">
                      {product.price}
                    </p>
                    <p className="mt-1 text-xs text-foreground-secondary">
                      {product.financing}
                    </p>
                    <Link
                      href={checkoutHref(product.id)}
                      className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-accent/40 px-4 py-2.5 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                    >
                      Purchase
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
