"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Heart, Search, ShoppingBag, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/lib/data";
import { useStore } from "@/lib/store";
import Image from "next/image";

const NAV = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({
  transparent = false,
}: {
  transparent?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const pathname = usePathname();
  const { cartCount } = useStore();
  const isHero = transparent && pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchOpen]);

  const dark = isHero && !scrolled;

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();

    return products
      .filter((p) => p.name.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        dark
          ? "bg-transparent"
          : "bg-bone/95 backdrop-blur border-b border-line"
      )}
    >
      <div className="container-edit flex h-20 items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-display text-lg tracking-[0.18em]",
            dark ? "text-bone" : "text-ink"
          )}
        >
          AELIA
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-eyebrow transition-colors",
                dark
                  ? "text-bone/80 hover:text-bone"
                  : "text-ink/70 hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className={cn(
            "flex items-center gap-5",
            dark ? "text-bone" : "text-ink"
          )}
        >
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="hover:text-brass transition-colors"
          >
            <Search size={18} strokeWidth={1.4} />
          </button>

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="hover:text-brass transition-colors"
          >
            <Heart size={18} strokeWidth={1.4} />
          </Link>

          <Link
            href="/login"
            aria-label="Account"
            className="hover:text-brass transition-colors hidden sm:block"
          >
            <User size={18} strokeWidth={1.4} />
          </Link>

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative hover:text-brass transition-colors"
          >
            <ShoppingBag size={18} strokeWidth={1.4} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brass text-[10px] text-bone">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {searchOpen && (
  <div
    className="fixed inset-0 z-[9999] flex items-start justify-center bg-white pt-8"
          onClick={() => {
            setSearchOpen(false);
            setQuery("");
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-3xl bg-[#FAF8F5] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-4 border-b border-neutral-200 px-8 py-6">
              <Search size={22} className="text-neutral-400" />

              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search fragrances..."
                className="flex-1 bg-transparent text-2xl font-light outline-none placeholder:text-neutral-400"
              />

              <button
                onClick={() => {
                  setSearchOpen(false);
                  setQuery("");
                }}
                className="rounded-full p-2 transition hover:bg-neutral-200"
              >
                <X size={22} />
              </button>
            </div>

            <div className="max-h-[450px] overflow-y-auto">
              {query === "" ? (
                <p className="p-8 text-center text-neutral-400">
                  Start typing to search perfumes...
                </p>
              ) : results.length === 0 ? (
                <p className="p-8 text-center text-neutral-400">
                  No fragrances found.
                </p>
              ) : (
                results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    onClick={() => {
                      setSearchOpen(false);
                      setQuery("");
                    }}
                    className="flex items-center justify-between px-8 py-5 transition hover:bg-neutral-100"
                  >
                    


<div className="flex items-center gap-4">

  <Image
    src={product.image}
    alt={product.name}
    width={56}
    height={80}
    className="h-20 w-14 object-contain"
  />

  <div>
    <h3 className="font-medium text-lg">
      {product.name}
    </h3>

    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-neutral-400">
      {product.family}
    </p>
  </div>

</div>












                    <span className="font-medium">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(product.price / 100)}
                    </span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}