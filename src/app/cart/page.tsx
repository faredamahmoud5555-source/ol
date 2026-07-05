"use client";

import Link from "next/link";
import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { BottleMark } from "@/components/bottle-mark";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import image from "next/image";
import { type } from "os";

export default function CartPage() {
  const { cart, removeFromCart, setQuantity, subtotal, discount, couponCode, applyCoupon } = useStore();
  const [code, setCode] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function handleApply() {
    const result = applyCoupon(code);
    setMessage(result.message);
  }

  const total = subtotal - discount;

  return (
    <main className="container-edit min-h-[70vh] pb-28 pt-36">
      <h1 className="font-display text-4xl sm:text-5xl">Your Bag</h1>

      {cart.length === 0 ? (
        <div className="mt-16 max-w-md">
          <p className="text-ink/60">Your bag is empty.</p>
          <Link href="/collection" className="mt-6 inline-block">
            <Button>Browse the Collection</Button>
          </Link>
        </div>
      ) : (
        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_380px]">
          <ul className="divide-y divide-line">
            {cart.map((line) => (
              <li key={line.product.id} className="flex gap-6 py-8">
        



        <div className="flex h-28 w-24 shrink-0 items-center justify-center bg-cream/60">
  <Image
    src={line.product.image}
    alt={line.product.name}
    width={120}
    height={160}
    className="h-full w-full object-contain"
  />
</div>
  







                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link href={`/product/${line.product.slug}`} className="font-display text-lg hover:text-brass">
                        {line.product.name}
                      </Link>
                      <p className="text-sm text-ink/45">{line.product.size} — {line.product.concentration}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(line.product.id)}
                      aria-label="Remove item"
                      className="h-fit text-ink/40 hover:text-ink"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-ink/25">
                      <button
                        onClick={() => setQuantity(line.product.id, line.quantity - 1)}
                        className="flex h-9 w-9 items-center justify-center hover:text-brass"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-7 text-center text-sm">{line.quantity}</span>
                      <button
                        onClick={() => setQuantity(line.product.id, line.quantity + 1)}
                        className="flex h-9 w-9 items-center justify-center hover:text-brass"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-sm">{formatPrice(line.product.price * line.quantity)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="h-fit border border-line p-8">
            <p className="text-eyebrow text-ink/50">Order Summary</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-ink/60">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-brass">
                  <span>Discount ({couponCode})</span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-ink/60">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Coupon code"
                className="w-full border border-ink/25 bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-brass"
              />
              <Button variant="outline" size="sm" onClick={handleApply}>Apply</Button>
            </div>
            {message && <p className="mt-2 text-xs text-ink/50">{message}</p>}

            <div className="mt-6 flex justify-between border-t border-line pt-6 font-display text-xl">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <Link href="/checkout">
              <Button className="mt-8 w-full" size="lg">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
