import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import { blogPosts } from "@/lib/data";
import { blogContent } from "@/lib/blog-content";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return buildMetadata({ title: "Blog", description: "", path: "/blog" });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const paragraphs = blogContent[post.slug] || [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ])
          ),
        }}
      />

      <article className="pt-20 pb-24 sm:pt-28">
        <Container className="max-w-2xl">
          <Link href="/blog" className="btn-ghost">
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>

          <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-bone-dim">
            <span>{post.category}</span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-bone sm:text-4xl">
            {post.title}
          </h1>

          <div className="prose prose-invert mt-10 max-w-none prose-p:leading-relaxed prose-p:text-bone-muted">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </article>

      <CTASection />
    </>
  );
}
