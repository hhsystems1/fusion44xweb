import type { Metadata } from "next";
import Link from "next/link";
import { products, checkoutHref } from "@/lib/products";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View Fusion 44X pricing for spa, Jacuzzi, and residential pool water treatment systems.",
};

export default function PricingPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#f4fbff_0%,#ffffff_44%,#eef7ff_100%)] py-20 text-[#071832] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-[#0757c7]/15 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#0757c7] shadow-sm">
            Fusion 44X Pricing
          </div>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#071832] sm:text-6xl">
            Choose your water system
          </h1>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className={`relative rounded-lg border ${
                product.featured
                  ? "border-[#0757c7]/30 bg-[#0757c7]/5"
                  : "border-[#0757c7]/12 bg-white"
              } p-8 shadow-[0_24px_70px_rgba(4,29,75,0.10)] transition-colors hover:border-[#0757c7]/45`}
            >
              {product.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-[#0757c7] px-4 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                  Popular
                </div>
              )}
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0757c7]">
                {product.shortName}
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.045em] text-[#071832]">
                {product.name}
              </h2>
              <p className="mt-8 text-5xl font-black tracking-[-0.05em] text-[#0757c7]">
                {product.price}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={checkoutHref(product.id)}
                  className="inline-flex items-center justify-center rounded-full bg-[#0757c7] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_18px_46px_rgba(7,87,199,0.28)] transition-all hover:bg-[#052f78]"
                >
                  Purchase
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-[#0757c7]/25 bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#052f78] transition-colors hover:border-[#0757c7]/50 hover:text-[#0757c7]"
                >
                  Specs
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-[#0757c7]/14 bg-white p-8 shadow-[0_24px_70px_rgba(4,29,75,0.10)]">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0757c7]">
                Financing Options
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.045em] text-[#071832]">
                Monthly payment options are available
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg border border-[#0757c7]/12 bg-[#f4fbff] p-5"
                >
                  <p className="text-sm font-black uppercase tracking-[0.08em] text-[#052f78]">
                    {product.shortName}
                  </p>
                  <p className="mt-2 text-xl font-black tracking-[-0.03em] text-[#0757c7]">
                    {product.financing}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
