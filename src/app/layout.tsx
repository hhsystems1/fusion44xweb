import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fusion 44X — Chlorine-Free Pool & Spa Water Systems",
    template: "%s | Fusion 44X",
  },
  description:
    "Experience chlorine-free pool and spa water with Fusion 44X. A smarter water care system designed to reduce harsh chemical maintenance.",
  openGraph: {
    title: "Fusion 44X — Chlorine-Free Pool & Spa Water Systems",
    description:
      "Experience cleaner, softer water with the Fusion 44X system. No chlorine, salt, or sanitizer chemicals added to your water.",
    url: "https://fusion44x.com",
    siteName: "Fusion 44X",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
