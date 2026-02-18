import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getAllPosts } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: `${dict.blog.title} | ${SITE_CONFIG.name}`,
    description: dict.blog.description,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        en: "/en/blog",
        es: "/es/blog",
      },
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const posts = getAllPosts(locale as Locale);

  return <BlogListClient posts={posts} dict={dict.blog} locale={locale} />;
}
