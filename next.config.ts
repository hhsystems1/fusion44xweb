import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/landing/pet-vsl", destination: "/pet-owners", permanent: true },
      { source: "/landing/parents", destination: "/parents", permanent: true },
      { source: "/landing/youtube-vsl", destination: "/parents", permanent: true },
      { source: "/landing/youtube-vsl-2", destination: "/parents", permanent: true },
      { source: "/landing/dry-skin", destination: "/parents", permanent: true },
      { source: "/discover-fusion-44x/how-it-works", destination: "/how-it-works", permanent: true },
      { source: "/discover-fusion-44x/why-fusion-44-x", destination: "/how-it-works", permanent: true },
      { source: "/products", destination: "/pricing", permanent: true },
      { source: "/residential-pools", destination: "/pricing", permanent: true },
      { source: "/free-spa-analysis", destination: "/pricing", permanent: true },
      { source: "/installation", destination: "/how-it-works", permanent: true },
      { source: "/science-lab-results", destination: "/how-it-works", permanent: true },
      { source: "/reviews", destination: "/", permanent: true },
      { source: "/faq", destination: "/how-it-works", permanent: true },
      { source: "/home-neo", destination: "/", permanent: true },
      { source: "/landing/:path*", destination: "/parents", permanent: true },
      { source: "/lp/:path*", destination: "/pricing", permanent: true },
    ];
  },
};

export default nextConfig;
