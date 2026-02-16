import type { MetadataRoute } from "next";
import { SITE_CONFIG, ROUTES } from "@/lib/constants";
import { locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of ROUTES) {
      const path = route.href === "/" ? "" : route.href;
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: route.key === "home" ? "weekly" : "monthly",
        priority: route.key === "home" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${path}`,
            es: `${baseUrl}/es${path}`,
          },
        },
      });
    }
  }

  return entries;
}
