import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { landingPages } from "@/lib/landing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/free-spa-analysis", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/home-neo", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/products", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/residential-pools", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/discover-fusion-44x/how-it-works", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/discover-fusion-44x/why-fusion-44-x", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/reviews", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/installation", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/science-lab-results", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.7, changeFrequency: "monthly" as const },
    {
      path: "/landing/chlorine-free-pool",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/science-of-purity",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/science-of-purity-2",
      priority: 0.88,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/science-of-purity-3",
      priority: 0.88,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/financing",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/financing-2",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/financing-3",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/obsolete-tech-diagnostic-table-2",
      priority: 0.82,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/30-day-tactical-content-loop-2",
      priority: 0.82,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/design-system-blueprint-2",
      priority: 0.82,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/linguistic-token-filter-2",
      priority: 0.82,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/consultation",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/youtube-vsl",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/landing/pool-day",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
  ];

  const landingRoutes = landingPages.map((page) => ({
    path: `/lp/${page.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  return [...routes, ...landingRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
