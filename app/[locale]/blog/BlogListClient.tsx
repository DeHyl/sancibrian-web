"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogListClientProps {
  posts: BlogPostMeta[];
  dict: {
    title: string;
    description: string;
    readMore: string;
    noPosts: string;
    minRead: string;
  };
  locale: string;
}

export default function BlogListClient({
  posts,
  dict,
  locale,
}: BlogListClientProps) {
  return (
    <section className="section-container bg-perla">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-coral uppercase tracking-[0.2em] font-semibold text-sm mb-3">
          The Captain&apos;s Log
        </p>
        <h1 className="text-caribe mb-4">{dict.title}</h1>
        <p className="text-xl text-oscuro/70 max-w-2xl mx-auto">
          {dict.description}
        </p>
      </motion.div>

      {posts.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-oscuro/50 text-lg"
        >
          {dict.noPosts}
        </motion.p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-oscuro/50 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(
                        locale === "es" ? "es-CO" : "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime.replace("min read", dict.minRead)}</span>
                  </div>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-caribe/10 text-caribe px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-oscuro group-hover:text-caribe transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-oscuro/60 text-sm line-clamp-3">
                    {post.description}
                  </p>
                  <span className="inline-block mt-4 text-coral font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    {dict.readMore} →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
