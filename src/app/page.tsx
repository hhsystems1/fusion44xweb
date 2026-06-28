import Image from "next/image";
import Link from "next/link";

const paths = [
  {
    title: "Parents",
    href: "/parents",
    label: "Health & Dermal Focus",
    copy: "For families searching around red eyes, skin rashes, allergies, and harsh pool chemical exposure.",
    image: "/fusion-swim-lifestyle.jpeg",
  },
  {
    title: "Pet Owners",
    href: "/pet-owners",
    label: "Pet Safety Focus",
    copy: "For dog owners worried about drinking pool water, fumes, irritated eyes, and chemical toxicity.",
    image: "/petimg2.png",
  },
  {
    title: "Luxury Homeowners",
    href: "/luxury",
    label: "Aesthetics & Asset Protection",
    copy: "For high-end pools, estate finishes, travertine, outdoor living spaces, and premium water expectations.",
    image: "/fusion-clear-pool.jpg",
  },
] as const;

function CtaLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#0757c7] px-6 text-center text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_18px_46px_rgba(7,87,199,0.28)] transition hover:-translate-y-0.5 hover:bg-[#052f78]"
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-[#071832]">
      <section className="relative isolate overflow-hidden bg-[#eaf6ff] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Image
          src="/fusion-family-pool.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-28"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,255,255,0.82)_48%,rgba(255,255,255,0.38))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#0757c7]/15 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#0757c7] shadow-sm">
              Fusion 44X Brand Hub
            </div>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-[#071832] sm:text-6xl lg:text-7xl">
              Hydro-pH-Infusion for every reason people rethink pool water.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#052f78] lg:text-xl">
              Fusion 44X replaces harsh chlorine-centered pool routines with hydrogen-rich, balanced water for families, pets, and premium properties.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/free-spa-analysis">Find your path</CtaLink>
              <Link
                href="/how-it-works"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-[#0757c7]/25 bg-white px-6 text-center text-xs font-black uppercase tracking-[0.12em] text-[#052f78] shadow-[0_14px_34px_rgba(5,47,120,0.10)] transition hover:-translate-y-0.5 hover:border-[#0757c7]/45"
              >
                See the science
              </Link>
              <Link
                href="/free-spa-analysis"
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#0757c7] px-6 text-center text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_18px_46px_rgba(7,87,199,0.28)] transition hover:-translate-y-0.5 hover:bg-[#052f78]"
              >
                See if it fits your pool needs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0757c7]">
              Self-segmentation paths
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] text-[#071832] sm:text-5xl">
              Who We Help
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {paths.map((path) => (
              <div
                key={path.href}
                className="group overflow-hidden rounded-[1.35rem] border border-[#0757c7]/12 bg-white shadow-[0_16px_42px_rgba(6,27,58,0.10)] transition hover:-translate-y-1 hover:border-[#0757c7]/35"
              >
                <Link href={path.href} className="block">
                  <div className="relative aspect-[16/10]">
                    <Image src={path.image} alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061b3a]/72 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-100">{path.label}</p>
                      <h3 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-white">{path.title}</h3>
                    </div>
                  </div>
                </Link>
                <div className="p-5">
                  <p className="text-sm font-bold leading-7 text-[#052f78]">{path.copy}</p>
                  <Link
                    href="/free-spa-analysis"
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-[#0757c7] px-5 py-2.5 text-xs font-black uppercase tracking-[0.1em] text-white shadow-[0_14px_34px_rgba(7,87,199,0.24)] transition hover:bg-[#052f78]"
                  >
                    See if it fits your pool needs
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
