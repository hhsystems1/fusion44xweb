import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/free-spa-analysis", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/products", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/residential-pools", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/discover-fusion-44x/how-it-works", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/discover-fusion-44x/why-fusion-44-x", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/reviews", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/installation", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/science-lab-results", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
