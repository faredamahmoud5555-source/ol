"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/data";

export type CartLine = { product: Product; quantity: number };

type StoreState = {
  cart: CartLine[];
  wishlist: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  subtotal: number;
  cartCount: number;
  couponCode: string | null;
  discount: number;
  applyCoupon: (code: string) => { ok: boolean; message: string };
  clearCart: () => void;
};

const StoreContext = createContext<StoreState | null>(null);

const COUPONS: Record<string, number> = {
  AELIA10: 0.1,
  WELCOME15: 0.15,
};

const STORAGE_KEY = "aelia-store-v1";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setCart(parsed.cart ?? []);
        setWishlist(parsed.wishlist ?? []);
        setCouponCode(parsed.couponCode ?? null);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ cart, wishlist, couponCode })
    );
  }, [cart, wishlist, couponCode, hydrated]);

  function addToCart(product: Product, quantity = 1) {
    setCart((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [...prev, { product, quantity }];
    });
  }

  function removeFromCart(productId: string) {
    setCart((prev) => prev.filter((l) => l.product.id !== productId));
  }

  function setQuantity(productId: string, quantity: number) {
    setCart((prev) =>
      prev.map((l) => (l.product.id === productId ? { ...l, quantity: Math.max(1, quantity) } : l))
    );
  }

  function toggleWishlist(product: Product) {
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  }

  function isWishlisted(productId: string) {
    return wishlist.some((p) => p.id === productId);
  }

  function applyCoupon(code: string) {
    const normalized = code.trim().toUpperCase();
    if (COUPONS[normalized]) {
      setCouponCode(normalized);
      return { ok: true, message: `Code applied — ${COUPONS[normalized] * 100}% off.` };
    }
    return { ok: false, message: "That code isn't valid." };
  }

  function clearCart() {
    setCart([]);
    setCouponCode(null);
  }

  const subtotal = useMemo(
    () => cart.reduce((sum, l) => sum + l.product.price * l.quantity, 0),
    [cart]
  );
  const cartCount = useMemo(() => cart.reduce((n, l) => n + l.quantity, 0), [cart]);
  const discount = couponCode ? Math.round(subtotal * COUPONS[couponCode]) : 0;

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        setQuantity,
        toggleWishlist,
        isWishlisted,
        subtotal,
        cartCount,
        couponCode,
        discount,
        applyCoupon,
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
