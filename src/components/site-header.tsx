"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/lib/store";

const NAV = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
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
          <button aria-label="Search" className="hover:text-brass transition-colors">
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
    </header>
  );
}
