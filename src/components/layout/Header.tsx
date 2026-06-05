"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Fusion 44X home"
        >
          <Image
            src="/fusion44x-logo.png"
            alt="Fusion 44X"
            width={118}
            height={118}
            className="h-12 w-12 rounded-full sm:h-14 sm:w-14"
            loading="eager"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-xs font-medium text-foreground-secondary transition-colors hover:text-accent hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/free-spa-analysis"
            className="ml-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/40"
          >
            Free Spa Analysis
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden rounded-full p-2 text-foreground-secondary hover:text-accent hover:bg-white/5 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-4 text-sm font-medium text-foreground-secondary transition-colors hover:text-accent hover:bg-white/5 active:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
