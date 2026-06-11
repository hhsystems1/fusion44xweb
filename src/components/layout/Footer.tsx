"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navLinks } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname.startsWith("/landing/")) {
    return null;
  }

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/fusion44x-logo.png"
              alt="Fusion 44X"
              width={118}
              height={118}
              className="mb-4 h-16 w-16 rounded-full"
            />
            <p className="text-xs text-foreground-secondary leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-foreground-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-xs text-foreground-secondary">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Hours
            </h3>
            <ul className="space-y-1 text-xs text-foreground-secondary">
              <li>{siteConfig.businessHours.weekdays}</li>
              <li>{siteConfig.businessHours.saturday}</li>
              <li>{siteConfig.businessHours.sunday}</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {(
                Object.entries(siteConfig.social) as [
                  keyof typeof siteConfig.social,
                  string
                ][]
              ).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-secondary transition-colors hover:text-accent"
                  aria-label={platform}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-foreground-secondary">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-1">
            The Fusion 44X system uses a contained process inside the unit. No
            chlorine, salt, or sanitizer chemicals are added to the water.
            Individual results may vary. Always consult a professional for
            installation.
          </p>
        </div>
      </div>
    </footer>
  );
}
