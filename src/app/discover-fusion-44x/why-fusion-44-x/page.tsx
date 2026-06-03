import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BreadcrumbStructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Why Fusion 44X",
  description:
    "Discover why homeowners choose Fusion 44X for cleaner, softer pool and spa water. Benefits, proof, and comparison vs traditional methods.",
};

export default function WhyFusion44XPage() {
  return (
    <div className="py-20 sm:py-28">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "/" },
          { name: "Discover", url: "/discover-fusion-44x/why-fusion-44-x" },
          { name: "Why Fusion 44X", url: "/discover-fusion-44x/why-fusion-44-x" },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Fusion 44X?"
          subtitle="The smarter choice for pool and spa water care."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {[
            {
              title: "Health & Comfort",
              items: [
                "No chlorine, salt, or sanitizer chemicals added to the water",
                "Softer water that is gentler on skin, eyes, and hair",
                "No chemical smell or fumes around your spa or pool",
                "Tested against drinking-water quality benchmarks",
              ],
            },
            {
              title: "Convenience & Savings",
              items: [
                "Dramatically reduced maintenance — no weekly chemical balancing",
                "No ongoing chemical purchases",
                "Automatic operation, no daily attention needed",
                "Professional installation in just a few hours",
              ],
            },
            {
              title: "Equipment & Longevity",
              items: [
                "Reduced chemical wear on pumps, heaters, and covers",
                "Fewer corrosive effects on spa and pool components",
                "Lifetime warranty on the Fusion 44X system",
                "Backed by patented US technology",
              ],
            },
            {
              title: "Environmental",
              items: [
                "Reduce plastic waste from chemical containers",
                "Less chemical runoff into the environment",
                "Energy-efficient operation",
                "Sustainable water care approach",
              ],
            },
          ].map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground-secondary"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/science-lab-results"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            View lab results & testing data
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
        </div>
      </div>
    </div>
  );
}
