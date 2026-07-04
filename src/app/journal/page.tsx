import type { Metadata } from "next";
import Link from "next/link";
import { journalPosts } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <main className="container-edit min-h-[70vh] pb-28 pt-36">
      <p className="text-eyebrow text-ink/50">Journal</p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl sm:text-5xl">
        Notes on craft, ingredients, and the work behind each bottle.
      </h1>

      <div className="mt-16 divide-y divide-line">
        {journalPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <Link href={`/journal/${post.slug}`} className="group grid grid-cols-1 gap-4 py-10 sm:grid-cols-[140px_1fr_auto] sm:items-center">
              <span className="text-eyebrow text-ink/40">{post.category}</span>
              <div>
                <h2 className="font-display text-2xl group-hover:text-brass transition-colors">{post.title}</h2>
                <p className="mt-2 max-w-lg text-sm text-ink/55">{post.excerpt}</p>
              </div>
              <span className="text-eyebrow text-ink/40">{post.readTime}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
