import type { MetadataRoute } from "next";

const routes = ["", "/about", "/services", "/industries", "/sla-support", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://nexvoratechnology.com${route}`,
    lastModified: new Date("2026-06-21"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
