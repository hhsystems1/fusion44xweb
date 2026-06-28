"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { navLinks } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const standaloneLandingPages = ["/parents", "/pet-owners", "/luxury"];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (pathname.startsWith("/landing/") || standaloneLandingPages.includes(pathname)) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#0757c7]/10 bg-white/90 backdrop-blur-xl">
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
          <ul className="flex items-center gap-1">
            {navLinks.slice(0, -1).map((link) => {
              if ("children" in link) {
                return (
                  <li key={link.label} ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center gap-1 rounded-full px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#052f78] transition-colors hover:bg-[#0757c7]/5 hover:text-[#0757c7]"
                    >
                      {link.label}
                      <svg
                        className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 w-48 rounded-xl border border-[#0757c7]/10 bg-white shadow-lg">
                        {(link as { children: { href: string; label: string }[] }).children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-[#052f78] transition-colors hover:bg-[#0757c7]/5 hover:text-[#0757c7]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-full px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#052f78] transition-colors hover:bg-[#0757c7]/5 hover:text-[#0757c7]"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/pricing"
            className="ml-2 rounded-full bg-[#0757c7] px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_14px_34px_rgba(7,87,199,0.24)] transition-all duration-300 hover:bg-[#052f78]"
          >
            Checkout
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-full p-2 text-[#052f78] transition-colors hover:bg-[#0757c7]/5 hover:text-[#0757c7] lg:hidden"
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
        <nav className="border-t border-[#0757c7]/10 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => {
              if ("children" in link) {
                return (
                  <div key={link.label}>
                    <p className="block rounded-xl px-4 pb-1 pt-4 text-xs font-black uppercase tracking-[0.08em] text-[#052f78]/50">
                      {link.label}
                    </p>
                    {(link as { children: { href: string; label: string }[] }).children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#052f78] transition-colors hover:bg-[#0757c7]/5 hover:text-[#0757c7] active:bg-[#0757c7]/10"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#052f78] transition-colors hover:bg-[#0757c7]/5 hover:text-[#0757c7] active:bg-[#0757c7]/10"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
