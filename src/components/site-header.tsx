"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/lib/data";
import { useStore } from "@/lib/store";



const NAV = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {

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
        dark ? "bg-transparent" : "bg-bone/95 backdrop-blur border-b border-line"
      )}
    >
      <div className="container-edit flex h-20 items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-display text-2xl tracking-[0.18em]",
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
                dark ? "text-bone/80 hover:text-bone" : "text-ink/70 hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={cn("flex items-center gap-5", dark ? "text-bone" : "text-ink")}>
          <button
  aria-label="Search"
  onClick={() => setSearchOpen(true)}
  className="hover:text-brass transition-colors"
>
            <Search size={18} strokeWidth={1.4} />
          </button>
          <Link href="/wishlist" aria-label="Wishlist" className="hover:text-brass transition-colors">
            <Heart size={18} strokeWidth={1.4} />
          </Link>
          <Link href="/login" aria-label="Account" className="hover:text-brass transition-colors hidden sm:block">
            <User size={18} strokeWidth={1.4} />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative hover:text-brass transition-colors">
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
    className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-32"
    onClick={() => {
      setSearchOpen(false);
      setQuery("");
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl"
    >
      <input
        autoFocus
        type="text"
        placeholder="Search fragrances..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border-b border-gray-300 pb-3 text-2xl outline-none"
      />

      <div className="mt-6 max-h-96 overflow-y-auto">
        {results.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          results.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
              className="flex items-center justify-between rounded-lg p-4 transition hover:bg-gray-100"
            >
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.family}</p>
              </div>

              <span>${product.price}</span>
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
