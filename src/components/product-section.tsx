import Link from "next/link";
import type { Product } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export function ProductSection({
  eyebrow,
  title,
  products,
  viewAllHref,
}: {
  eyebrow: string;
  title: string;
  products: Product[];
  viewAllHref?: string;
}) {
  return (
    <section className="container-edit py-24">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <p className="text-eyebrow text-ink/50">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">{title}</h2>
        </Reveal>
        {viewAllHref && (
          <Link href={viewAllHref} className="text-eyebrow border-b border-ink/30 pb-1 hover:border-brass hover:text-brass">
            View All
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
