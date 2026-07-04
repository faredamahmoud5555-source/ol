"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/lib/data";
import { useStore } from "@/lib/store";

export function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useStore();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(product, qty);
    setAdded(true);
    toast.success(`${product.name} added to bag`);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border border-ink/25">
        <button
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="flex h-14 w-11 items-center justify-center hover:text-brass"
        >
          <Minus size={14} />
        </button>
        <span className="w-8 text-center text-sm">{qty}</span>
        <button
          aria-label="Increase quantity"
          onClick={() => setQty((q) => q + 1)}
          className="flex h-14 w-11 items-center justify-center hover:text-brass"
        >
          <Plus size={14} />
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="relative h-14 flex-1 overflow-hidden bg-ink text-eyebrow text-bone transition-colors hover:bg-espresso"
      >
        <AnimatePresence mode="wait" initial={false}>
          {added ? (
            <motion.span
              key="added"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center gap-2"
            >
              <Check size={16} /> Added to Bag
            </motion.span>
          ) : (
            <motion.span
              key="add"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              Add to Bag — ${(product.price * qty / 100).toFixed(0)}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
