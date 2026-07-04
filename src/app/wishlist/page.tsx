"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  const { wishlist } = useStore();

  return (
    <main className="container-edit min-h-[70vh] pb-28 pt-36">
      <h1 className="font-display text-4xl sm:text-5xl">Wishlist</h1>
      <p className="mt-3 text-ink/55">Saved fragrances, kept for later.</p>

      {wishlist.length === 0 ? (
        <div className="mt-16 max-w-md">
          <p className="text-ink/60">Nothing saved yet — tap the heart on any fragrance to add it here.</p>
          <Link href="/collection" className="mt-6 inline-block">
            <Button>Browse the Collection</Button>
          </Link>
        </div>
      ) : (
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {wishlist.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}
