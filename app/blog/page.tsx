import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Ideas sobre automatización con IA, chatbots y operaciones del equipo de Volta.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <Container className="max-w-3xl">
        <p className="eyebrow mb-4">Blog</p>
        <h1 className="text-4xl font-medium leading-tight tracking-tight text-bone sm:text-5xl">
          Notas sobre automatización, operaciones e IA que realmente se implementa.
        </h1>

        <div className="mt-14 divide-y divide-ink-700 border-t border-ink-700">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 py-8 transition-colors"
            >
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-bone-dim">
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="flex items-center gap-2 text-xl font-medium text-bone group-hover:text-volt-300">
                {post.title}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-bone-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-volt-400" />
              </h2>
              <p className="text-sm leading-relaxed text-bone-muted">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
