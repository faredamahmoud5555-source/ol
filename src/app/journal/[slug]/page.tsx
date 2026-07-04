import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { journalPosts } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

type JournalPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function JournalDetailPage({ params }: JournalPageProps) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="container-edit min-h-[70vh] pb-28 pt-36">
      <Link href="/journal" className="text-eyebrow text-ink/50 hover:text-brass">← Journal</Link>
      <Reveal>
        <p className="mt-8 text-eyebrow text-ink/50">{post.category} — {post.readTime} read</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">{post.title}</h1>
      </Reveal>
      <div className="mt-12 max-w-2xl space-y-6">
        {post.body.map((para, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className="text-base leading-relaxed text-ink/70">{para}</p>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
