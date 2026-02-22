"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import type { BlogPost } from "@/lib/blog";

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-bold text-caribe mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl font-bold text-oscuro mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-oscuro/80 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-4 space-y-1 text-oscuro/80" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1 text-oscuro/80" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-coral pl-4 italic text-oscuro/60 my-6"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-caribe underline hover:text-coral transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-oscuro" {...props} />
  ),
  hr: () => <hr className="my-8 border-oscuro/10" />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded-xl my-6 max-w-full mx-auto block"
      alt={props.alt ?? ""}
      {...props}
    />
  ),
  Video: (props: { src: string; poster?: string }) => (
    <video
      autoPlay
      muted
      loop
      playsInline
      controls
      className="rounded-xl my-6 w-full"
      poster={props.poster}
    >
      <source src={props.src} type="video/mp4" />
    </video>
  ),
  iframe: (props: React.IframeHTMLAttributes<HTMLIFrameElement>) => (
    <div className="my-6 rounded-xl overflow-hidden border border-oscuro/10">
      <iframe className="w-full" {...props} />
    </div>
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-caribe text-white" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-oscuro/10" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="even:bg-oscuro/5" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-2 text-left font-semibold" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-oscuro/80" {...props} />
  ),
};

interface BlogPostClientProps {
  post: BlogPost;
  dict: {
    backToList: string;
    minRead: string;
  };
  locale: string;
}

export default function BlogPostClient({
  post,
  dict,
  locale,
}: BlogPostClientProps) {
  const [mdxSource, setMdxSource] = useState<Awaited<
    ReturnType<typeof serialize>
  > | null>(null);

  useEffect(() => {
    serialize(post.content, {
      mdxOptions: { remarkPlugins: [remarkGfm] },
    }).then(setMdxSource);
  }, [post.content]);

  return (
    <article className="bg-perla">
      {/* Hero cover */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oscuro/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 -mt-20 relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          {/* Back link */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-1 text-sm text-coral hover:text-caribe transition-colors mb-6"
          >
            ← {dict.backToList}
          </Link>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-caribe/10 text-caribe px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-oscuro mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-oscuro/50 mb-8 pb-8 border-b border-oscuro/10">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(
                locale === "es" ? "es-CO" : "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </time>
            <span>·</span>
            <span>{post.readingTime.replace("min read", dict.minRead)}</span>
          </div>

          {/* MDX Content */}
          <div className="prose-custom">
            {mdxSource ? (
              <MDXRemote {...mdxSource} components={mdxComponents} />
            ) : (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-oscuro/10 rounded w-3/4" />
                <div className="h-4 bg-oscuro/10 rounded w-full" />
                <div className="h-4 bg-oscuro/10 rounded w-5/6" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </article>
  );
}
