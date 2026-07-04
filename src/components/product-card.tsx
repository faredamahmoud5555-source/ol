"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";
import { BottleMark } from "@/components/bottle-mark";
import { useStore } from "@/lib/store";
import { cn, formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { isWishlisted, toggleWishlist } = useStore();
  const wished = isWishlisted(product.id);

  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream/60">
        <Link href={`/product/${product.slug}`} className="block h-full w-full">
          <motion.div
            className="flex h-full w-full items-center justify-center text-espresso"
            initial={false}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <BottleMark accent={product.accent} className="h-56 w-auto" />
          </motion.div>
        </Link>

        <button
          onClick={() => toggleWishlist(product)}
          aria-label="Toggle wishlist"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-bone/80 backdrop-blur transition-colors hover:bg-bone"
        >
          <Heart
            size={16}
            strokeWidth={1.4}
            className={cn(wished ? "fill-brass text-brass" : "text-ink")}
          />
        </button>

        {(product.bestseller || product.new) && (
          <span className="absolute left-4 top-4 bg-ink px-3 py-1 text-eyebrow text-bone">
            {product.bestseller ? "Bestseller" : "New"}
          </span>
        )}
      </div>

      <Link href={`/product/${product.slug}`} className="mt-5 block">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-xl">{product.name}</h3>
          <span className="text-sm text-ink/60">{formatPrice(product.price)}</span>
        </div>
        <p className="mt-1 text-sm text-ink/55">{product.tagline}</p>
        <p className="mt-2 text-eyebrow text-ink/40">{product.family}</p>
      </Link>
    </div>
  );
}
