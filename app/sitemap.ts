import type { MetadataRoute } from "next";
import { SITE_CONFIG, ROUTES } from "@/lib/constants";
import { locales } from "@/lib/i18n/config";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  const entries: MetadataRoute.Sitemap = [];

  // Static pages — both locales
  for (const locale of locales) {
    for (const route of ROUTES) {
      const path = route.href === "/" ? "" : route.href;
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: route.key === "home" ? "weekly" : "monthly",
        priority: route.key === "home" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${path}`,
            es: `${baseUrl}/es${path}`,
          },
        },
      });
    }
  }

  // Blog posts — both locales
  const posts = await getAllPosts("en");
  for (const post of posts) {
    entries.push({
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog/${post.slug}`,
          es: `${baseUrl}/es/blog/${post.slug}`,
        },
      },
    });
  }

  return entries;
}
