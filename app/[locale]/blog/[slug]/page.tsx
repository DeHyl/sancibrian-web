import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const slugs = getAllSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale as Locale);

  if (!post) return {};

  return {
    title: `${post.title} | ${SITE_CONFIG.name}`,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        es: `/es/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale as Locale);

  if (!post) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <BlogPostClient post={post} dict={dict.blog} locale={locale} />
  );
}
