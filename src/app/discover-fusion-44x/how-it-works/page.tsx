import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how the Fusion 44X system works to treat your pool or spa water without adding chlorine, salt, or sanitizer chemicals.",
  openGraph: {
    title: "How Fusion 44X Works | Technical Overview",
    description:
      "The Fusion 44X system uses a patented contained process to treat water inline with your existing plumbing.",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="py-20 sm:py-28">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "/" },
          { name: "Discover", url: "/discover-fusion-44x/how-it-works" },
          { name: "How It Works", url: "/discover-fusion-44x/how-it-works" },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How Fusion 44X Works"
          subtitle="A detailed look at the technology behind cleaner, softer water."
        />
        <div className="mt-12 space-y-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-serif font-bold">
                1
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                The Contained Process
              </h3>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              The Fusion 44X system uses a patented contained process that
              operates inside the unit itself. Water flows through the system
              inline with your existing spa or pool plumbing, where it is
              treated without the addition of chlorine, salt, or sanitizer
              chemicals. The process is continuous and automatic.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-serif font-bold">
                2
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Inline Installation
              </h3>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              The system is installed directly into your existing plumbing
              loop. A certified professional connects the unit to your
              circulation system, where it treats water as it flows through.
              Installation typically takes 2-4 hours for most residential
              setups.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-serif font-bold">
                3
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Automatic Operation
              </h3>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              Once installed, the system operates automatically. There are no
              daily adjustments, no chemical additions, and no complex
              controls. The only ongoing maintenance is checking and
              adjusting the pH balance, typically requiring acid about twice
              a month — similar to any properly maintained water system.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-serif font-bold">
                4
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Patented Technology
              </h3>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              The Fusion 44X process is protected by multiple US patents.
              Our engineering team spent years developing and refining the
              technology to ensure reliable, consistent water treatment
              without relying on chemical additives. Visit our lab results
              page for independent testing data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
