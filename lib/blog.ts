import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Locale } from "@/lib/i18n/config";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  tags: string[];
  author: string;
  readingTime: string;
  content: string;
  locale: Locale;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  tags: string[];
  author: string;
  readingTime: string;
  locale: Locale;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function getPostFiles(locale: Locale): string[] {
  const dir = path.join(BLOG_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

export function getPostBySlug(
  slug: string,
  locale: Locale
): BlogPost | null {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    coverImage: data.coverImage ?? "/images/hero/hero-1.jpg",
    tags: data.tags ?? [],
    author: data.author ?? "Cabaña Sancibrian",
    readingTime: stats.text,
    content,
    locale,
  };
}

export function getAllPosts(locale: Locale): BlogPostMeta[] {
  const files = getPostFiles(locale);

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const post = getPostBySlug(slug, locale);
      if (!post) return null;

      const { content: _, ...meta } = post;
      return meta;
    })
    .filter((p): p is BlogPostMeta => p !== null);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllSlugs(locale: Locale): string[] {
  return getPostFiles(locale).map((f) => f.replace(/\.mdx$/, ""));
}
