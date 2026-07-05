"use client";

import { Heart } from "lucide-react";
import type { Product } from "@/lib/data";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductWishlistButton({
  product,
}: {
  product: Product;
}) {
  const { isWishlisted, toggleWishlist } = useStore();

  const wished = isWishlisted(product.id);

  return (
    <button
      aria-label="Toggle wishlist"
      onClick={() => toggleWishlist(product)}
      className="
        absolute
        right-6
        top-6
        z-20
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-white/90
        backdrop-blur
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <Heart
        size={20}
        strokeWidth={1.6}
        className={cn(
          wished
            ? "fill-brass text-brass"
            : "text-ink"
        )}
      />
    </button>
  );
}
