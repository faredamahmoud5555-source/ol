"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, type Product } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const FAMILIES = Array.from(new Set(products.map((p) => p.family)));
type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export function CollectionGrid() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter");

  const [query, setQuery] = useState("");
  const [family, setFamily] = useState<string | null>(null);
  const [quickFilter, setQuickFilter] = useState<string | null>(initialFilter);
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list: Product[] = [...products];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.family.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q)
      );
    }
    if (family) list = list.filter((p) => p.family === family);
    if (quickFilter === "bestseller") list = list.filter((p) => p.bestseller);
    if (quickFilter === "new") list = list.filter((p) => p.new);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [query, family, quickFilter, sort]);

  return (
    <div>
      <div className="flex flex-col gap-8 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fragrances, families, moods…"
            aria-label="Search the collection"
            className="w-full min-w-[260px] border-b border-ink/30 bg-transparent pb-2 font-display text-2xl placeholder:text-ink/30 focus:outline-none focus:border-brass sm:w-96"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <FilterPill active={!family} onClick={() => setFamily(null)}>
            All Families
          </FilterPill>
          {FAMILIES.map((f) => (
            <FilterPill key={f} active={family === f} onClick={() => setFamily(f)}>
              {f}
            </FilterPill>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-3">
          <FilterPill active={quickFilter === "bestseller"} onClick={() => setQuickFilter(quickFilter === "bestseller" ? null : "bestseller")}>
            Bestsellers
          </FilterPill>
          <FilterPill active={quickFilter === "new"} onClick={() => setQuickFilter(quickFilter === "new" ? null : "new")}>
            New
          </FilterPill>
        </div>

        <label className="flex items-center gap-3 text-eyebrow text-ink/60">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border-b border-ink/30 bg-transparent py-1 text-ink focus:outline-none focus:border-brass"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A–Z</option>
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-ink/45">{filtered.length} fragrances</p>

      {filtered.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-display text-2xl">Nothing matches yet.</p>
          <p className="mt-2 text-sm text-ink/50">Try clearing a filter or searching a different word.</p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.06}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-eyebrow border px-4 py-2 transition-colors",
        active ? "border-ink bg-ink text-bone" : "border-ink/25 text-ink/60 hover:border-ink"
      )}
    >
      {children}
    </button>
  );
}
