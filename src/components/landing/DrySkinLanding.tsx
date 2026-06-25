import Image from "next/image";
import Link from "next/link";
import { Inter, Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const painPoints = [
  {
    title: "Dry, itchy skin",
    copy: "Your skin should not feel tight or irritated after a swim.",
    image: "/a0aec4b8-bf4f-4986-ba1f-c6561ff21ef7.jpg",
    alt: "Dry, itchy skin near a swimming pool",
  },
  {
    title: "Irritated eyes",
    copy: "That burning, red-eye feeling should not be part of pool day.",
    image: "/263466ad-c35e-4ce0-91bd-b9e2cfb02c3e.jpg",
    alt: "Irritated eyes after swimming",
  },
  {
    title: "Chloramine exposure",
    copy: "Chlorine byproducts are a big reason the water feels rough.",
    image: "/d95e94a2-37f3-4eb6-bd57-47b499da92f7.jpg",
    alt: "Chloramine exposure at the pool edge",
  },
  {
    title: "Harsh chemical smells",
    copy: "If the backyard smells like a lab, the water is telling on itself.",
    image: "/eabca27d-8559-45d3-8361-570701def08f.jpg",
    alt: "Harsh chemical smells around a pool",
  },
];

const additionalSignals = [
  {
    title: "Chemical maintenance",
    copy: "Buckets, bottles, shock, and strips become the weekend routine.",
    image: "/f8cd5c9b-b93a-46fd-bb9d-d909731dafea.jpg",
    alt: "Chemical maintenance supplies around a pool",
  },
  {
    title: "Skin flare-ups",
    copy: "The pool should not leave you with a reminder on your arm.",
    image: "/1b62342a-e56c-4d2c-8b15-c47cbbf0ff79.jpg",
    alt: "Skin irritation after pool exposure",
  },
  {
    title: "More eye sting",
    copy: "The red-eye, rinse-your-face, keep-swimming routine is not ideal.",
    image: "/90a3b889-7512-417c-8235-57073c28ab91.jpg",
    alt: "Irritated eyes from pool chemicals",
  },
  {
    title: "Water testing",
    copy: "The test kit ends up running the backyard instead of the other way around.",
    image: "/f4de05c7-4f89-4479-8c11-846483b4c0d1.jpg",
    alt: "Chemical maintenance and water testing gear",
  },
];

const benefits = [
  "Hydrogen-rich, balanced water without chlorine or salt",
  "Gentler on dry skin, eyes, and the air around the pool",
  "Connects to existing equipment without a full remodel",
  "A cleaner pool story for families who want less hassle",
];

const faqItems = [
  {
    question: "What makes this page different?",
    answer:
      "It leads with the skin and irritation problem, then shows the pool chemistry story visually instead of leaning on a generic product pitch.",
  },
  {
    question: "What does Fusion 44X do?",
    answer:
      "Fusion 44X is positioned as a chlorine-free, salt-free water treatment system that helps create hydrogen-rich, balanced pool and spa water.",
  },
  {
    question: "How hard is installation?",
    answer:
      "The product story is simple: it is designed to work with existing pool equipment, so the upgrade stays closer to an install than a remodel.",
  },
  {
    question: "Is financing available?",
    answer:
      "Yes. The wider site positioning includes financing options starting at $75 per month for qualified buyers.",
  },
];

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
      <path d="m6 12 3.5 3.5L18 7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
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
      <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className={`${syne.className} mt-3 text-3xl font-bold tracking-[0.04em] text-[#F4F7FC] sm:text-4xl lg:text-5xl`}>
        {title}
      </h2>
      <p className={`${inter.className} mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg`}>
        {description}
      </p>
    </div>
  );
}

function ImageTile({
  image,
  alt,
  title,
  copy,
  className = "",
}: {
  image: string;
  alt: string;
  title: string;
  copy: string;
  className?: string;
}) {
  return (
    <article
      className={[
        "group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25",
        className,
      ].join(" ")}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06111d]/80 via-[#06111d]/16 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
          Fusion 44X reference
        </div>
      </div>
      <div className="p-5">
        <h3 className={`${syne.className} text-2xl font-semibold tracking-[0.03em] text-[#F4F7FC]`}>
          {title}
        </h3>
        <p className={`${inter.className} mt-3 text-sm leading-7 text-slate-300`}>
          {copy}
        </p>
      </div>
    </article>
  );
}

function ProblemCard({
  image,
  alt,
  title,
  copy,
}: {
  image: string;
  alt: string;
  title: string;
  copy: string;
}) {
  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className={`${syne.className} text-2xl font-semibold tracking-[0.03em] text-[#F4F7FC]`}>
          {title}
        </h3>
        <p className={`${inter.className} mt-3 text-sm leading-7 text-slate-300`}>
          {copy}
        </p>
      </div>
    </article>
  );
}

export default function DrySkinLanding() {
  return (
    <main
      className={`${inter.variable} ${syne.variable} min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,210,255,0.12),transparent_28%),linear-gradient(180deg,#06111d_0%,#091521_42%,#07111b_100%)] text-[#F4F7FC]`}
    >
      <section className="relative px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-6rem] top-44 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100">
              Dry skin campaign
            </div>
            <h1 className={`${syne.className} mt-6 max-w-3xl text-5xl font-extrabold leading-[0.92] tracking-[0.04em] sm:text-6xl lg:text-7xl`}>
              Dry, itchy skin should not be the souvenir from pool season.
            </h1>
            <p className={`${inter.className} mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl`}>
              If a swim leaves your skin tight, your eyes red, or the backyard smelling like a chemistry set,
              Fusion 44X gives you a cleaner way to think about the water.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/free-spa-analysis"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#00d2ff,#00a7d1)] px-6 text-sm font-semibold text-[#03111c] shadow-[0_18px_50px_rgba(0,210,255,0.28)] transition hover:-translate-y-0.5"
              >
                Check My Pool Compatibility
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <a
                href="#why-it-happens"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 text-sm font-semibold text-[#F4F7FC] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/10"
              >
                See Why It Happens
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["No chlorine-first routine", "No salt system baggage", "Built for existing equipment"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative z-10">
            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="relative aspect-[4/5] min-h-[28rem]">
                  <Image
                    src="/90a3b889-7512-417c-8235-57073c28ab91.jpg"
                    alt="Dry itchy skin after swimming"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,17,29,0.12),rgba(6,17,29,0.66))]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                    Main symptom
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.2rem] border border-white/10 bg-[#06111d]/72 p-4 backdrop-blur-md">
                    <p className={`${syne.className} text-2xl font-semibold tracking-[0.03em]`}>
                      Dry, itchy skin
                    </p>
                    <p className={`${inter.className} mt-2 text-sm leading-6 text-slate-300`}>
                      The kind of after-swim feeling that tells you the water is working too hard.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <ImageTile
                  image="/263466ad-c35e-4ce0-91bd-b9e2cfb02c3e.jpg"
                  alt="Irritated eyes after pool exposure"
                  title="Irritated eyes"
                  copy="If the pool keeps making you blink, sting, or rinse off, the chemistry is part of the problem."
                />
                <ImageTile
                  image="/eabca27d-8559-45d3-8361-570701def08f.jpg"
                  alt="Harsh chemical smells around a pool"
                  title="Harsh chemical smells"
                  copy="When the air around the water feels sharp, the experience is already too chemical-heavy."
                />
                <ImageTile
                  image="/f8cd5c9b-b93a-46fd-bb9d-d909731dafea.jpg"
                  alt="Chemical maintenance supplies around a pool"
                  title="Chemical maintenance"
                  copy="All the buckets, bottles, and balancing chores add up fast."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 rounded-[1.6rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-200 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl bg-[#081522]/70 px-4 py-3">
            <CheckIcon className="h-4 w-4 text-teal-300" />
            Softer-feeling water story
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-[#081522]/70 px-4 py-3">
            <CheckIcon className="h-4 w-4 text-teal-300" />
            Built for skin and eye comfort
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-[#081522]/70 px-4 py-3">
            <CheckIcon className="h-4 w-4 text-teal-300" />
            Fast path to a pool review
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What the pool is telling you"
            title="The problem is not your skin. It is usually the water routine."
            description="These reference images do the heavy lifting: dry skin, irritated eyes, chloramine exposure, and the usual maintenance chaos all point to the same thing - a pool system that is asking too much from the swimmer."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {painPoints.map((item) => (
              <ProblemCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="why-it-happens" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why it happens"
              title="Chlorine can clean the pool and still leave your skin mad about it."
              description="Traditional pool chemistry can react with sweat, sunscreen, and oils to create chloramines. That is where a lot of the eye sting, rough-feeling water, and heavy chemical smell come from."
            />

            <ul className={`${inter.className} mt-8 space-y-4`}>
              {[
                "Chlorine reacts with organic matter, which can create the smell people associate with a 'clean' pool.",
                "Skin can feel dry and tight when the water routine strips away comfort along with contaminants.",
                "The maintenance cycle never really stops if the pool depends on constant chemical balancing.",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-teal-300">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <div className="relative aspect-[16/10]">
              <Image
                src="/d95e94a2-37f3-4eb6-bd57-47b499da92f7.jpg"
                alt="Chloramine exposure at the pool edge"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,17,29,0.14),rgba(6,17,29,0.62))]" />
              <div className="absolute bottom-5 left-5 max-w-md rounded-[1.2rem] border border-white/10 bg-[#06111d]/72 p-4 backdrop-blur-md">
                <p className={`${syne.className} text-2xl font-semibold tracking-[0.03em]`}>
                  Chloramine exposure
                </p>
                <p className={`${inter.className} mt-2 text-sm leading-6 text-slate-300`}>
                  The water can look clear and still feel rough, especially when the byproducts are doing the damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {additionalSignals.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
                >
                  <div className="relative aspect-[16/11]">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 25vw" className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className={`${syne.className} text-xl font-semibold tracking-[0.03em]`}>
                      {item.title}
                    </h3>
                    <p className={`${inter.className} mt-2 text-sm leading-6 text-slate-300`}>
                      {item.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="What Fusion 44X changes"
              title="A cleaner pool story without the weekly chemical treadmill."
              description="Fusion 44X is positioned as a better path for buyers who want water that feels more comfortable on skin and easier to live with around the pool."
            />
            <div className="mt-8 rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(8,15,29,0.96),rgba(8,37,59,0.75))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="/fusion-family-pool.jpeg"
                  alt="Clear pool water with a calm lifestyle feel"
                  width={1600}
                  height={1067}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111d]/55 via-transparent to-transparent" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-teal-300">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <p className={`${inter.className} text-sm leading-6 text-slate-200`}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/free-spa-analysis"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#00d2ff,#00a7d1)] px-6 text-sm font-semibold text-[#03111c] transition hover:-translate-y-0.5"
                >
                  Request My Pool Review
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 text-sm font-semibold text-[#F4F7FC] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/10"
                >
                  See Financing Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="A few quick answers before you take the next step."
            description="Keep the pitch crisp. Solve the obvious friction, then let the images and CTA do the rest."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <summary className={`${syne.className} flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-[0.02em] text-[#F4F7FC]`}>
                  <span>{item.question}</span>
                  <span className="text-cyan-200 transition group-open:rotate-45">+</span>
                </summary>
                <p className={`${inter.className} mt-4 text-sm leading-7 text-slate-300`}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(8,15,29,0.96),rgba(8,37,59,0.82))] shadow-[0_30px_100px_rgba(0,0,0,0.32)]">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-200/80">
                Final CTA
              </p>
              <h2 className={`${syne.className} mt-4 text-4xl font-bold tracking-[0.04em] text-[#F4F7FC] sm:text-5xl`}>
                Give your skin a break and let the pool stop acting like a chemistry experiment.
              </h2>
              <p className={`${inter.className} mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg`}>
                If the current setup leaves you itchy, irritated, or over the smell, Fusion 44X is the cleaner
                story to explore next.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/free-spa-analysis"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#00d2ff,#00a7d1)] px-6 text-sm font-semibold text-[#03111c] transition hover:-translate-y-0.5"
                >
                  Check My Pool Compatibility
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 text-sm font-semibold text-[#F4F7FC] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/10"
                >
                  Browse System Options
                </Link>
              </div>
            </div>

            <div className="relative min-h-[22rem] lg:min-h-full">
              <Image
                src="/fusion-family-pool.jpeg"
                alt="Clean, inviting pool water for a better swim experience"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,17,29,0.14),rgba(6,17,29,0.45)),linear-gradient(180deg,rgba(6,17,29,0.05),rgba(6,17,29,0.22))]" />
              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                {["Hydrogen-rich water", "Balanced pH", "Less skin sting"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-[#06111d]/70 px-4 py-3 text-sm font-medium text-white/95 backdrop-blur-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
