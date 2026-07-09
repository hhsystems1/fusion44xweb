"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navLinks } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const standaloneLandingPages = ["/parents", "/pet-owners", "/luxury"];

  if (pathname.startsWith("/landing/") || standaloneLandingPages.includes(pathname)) {
    return null;
  }

  return (
    <footer className="border-t border-[#0757c7]/10 bg-white">
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
            <p className="text-xs leading-relaxed text-[#052f78]">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.08em] text-[#071832]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.flatMap((link) =>
                "children" in link
                  ? (link as { children: { href: string; label: string }[] }).children
                  : [link as { href: string; label: string }]
              ).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-bold text-[#052f78] transition-colors hover:text-[#0757c7]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.08em] text-[#071832]">
              Contact
            </h3>
            <ul className="space-y-2 text-xs text-[#052f78]">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-[#0757c7]"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-[#0757c7]"
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
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.08em] text-[#071832]">
              Hours
            </h3>
            <ul className="space-y-1 text-xs text-[#052f78]">
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
              ).map(([platform, url]) => {
                const getIcon = () => {
                  switch (platform) {
                    case "facebook":
                      return (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      );
                    case "instagram":
                      return (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      );
                    case "youtube":
                      return (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.163c-.272-1.016-1.047-1.816-2.062-2.087C19.615 3.541 12 3.541 12 3.541s-7.615 0-9.436.535C1.543 4.347.768 5.147.496 6.163.02 7.994 0 12.001 0 12.001s.02 4.007.496 5.837c.272 1.017 1.047 1.817 2.062 2.088 1.821.535 9.436.535 9.436.535s7.615 0 9.436-.535c1.015-.271 1.79-1.071 2.062-2.088.476-1.83.496-5.837.496-5.837s-.02-4.007-.496-5.838zM9.545 15.568V8.433l6.237 3.568-6.237 3.567z" />
                        </svg>
                      );
                    case "tiktok":
                      return (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.52-4.09-1.33-.77-.52-1.42-1.22-1.92-2.01v6.92c-.08 1.8-.71 3.63-2.01 4.88-1.34 1.29-3.26 1.94-5.07 1.77-1.89-.17-3.74-1.28-4.73-2.94-1.07-1.79-1.25-4.14-.49-6.07.75-1.91 2.53-3.41 4.57-3.79.38-.07.76-.1 1.15-.1.02 1.37-.02 2.73.01 4.1-.47.03-.96.15-1.37.39-.7.42-1.12 1.22-1.09 2.03.04.85.57 1.63 1.34 1.97.77.34 1.68.22 2.33-.31.62-.51.93-1.36.9-2.15V.02z" />
                        </svg>
                      );
                    default:
                      return null;
                  }
                };
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#052f78] transition-colors hover:text-[#0757c7]"
                    aria-label={platform}
                  >
                    {getIcon()}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#0757c7]/10 pt-6 text-center text-xs text-[#052f78]">
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
