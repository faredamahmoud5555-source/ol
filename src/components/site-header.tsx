"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import {
  Search,
  X,
  Heart,
  ShoppingBag,
  User,
  Clock,
  Sparkles,
} from "lucide-react";

import { products } from "@/lib/data";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];






const TRENDING = [








  {
    name: "Electric Cherry Eau de Parfum",
    slug: "Electric-Cherry-Eau-de-Parfum",
  },
  {
    name: "Oud Wood",
    slug: "oud-wood",
  },
  {
    name: "Cherry smoke",
    slug: "Cherry-Smoke-Eau-de-parfum",
  },
];








export function SiteHeader({
  transparent = false,
}: {
  transparent?: boolean;
}) {
  const pathname = usePathname();

  const { cartCount } = useStore();

  const [scrolled, setScrolled] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  const [query, setQuery] = useState("");

  const [recent, setRecent] = useState<string[]>([]);

  const isHero =
    transparent && pathname === "/";

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  useEffect(() => {
    if (!searchOpen) return;

    document.body.style.overflow = "hidden";

    const data =
      localStorage.getItem(
        "recent-searches"
      );

    if (data) {
      setRecent(JSON.parse(data));
    }

    function esc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
      }
    }

    window.addEventListener(
      "keydown",
      esc
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        esc
      );
    };
  }, [searchOpen]);

  const dark =
    isHero && !scrolled;

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q =
      query.toLowerCase();

    return products
      .filter((p) => {
        return (
          p.name
            .toLowerCase()
            .includes(q) ||

          p.family
            .toLowerCase()
            .includes(q) ||

          p.description
            .toLowerCase()
            .includes(q) ||

          p.tagline
            .toLowerCase()
            .includes(q) ||

          p.ingredients.some((i) =>
            i
              .toLowerCase()
              .includes(q)
          ) ||

          p.notes.top.some((n) =>
            n.name
              .toLowerCase()
              .includes(q)
          ) ||

          p.notes.heart.some((n) =>
            n.name
              .toLowerCase()
              .includes(q)
          ) ||

          p.notes.base.some((n) =>
            n.name
              .toLowerCase()
              .includes(q)

)
          );
})
      .slice(0, 8);
  }, [query]);

  function saveRecent(
    value: string
  ) {
    const list = [
      value,
      ...recent.filter(
        (r) => r !== value
      ),
    ].slice(0, 5);

    setRecent(list);

    localStorage.setItem(
      "recent-searches",
      JSON.stringify(list)
    );
  }


    return (
    <>
      
<header
  className={cn(
    "fixed inset-x-0 top-0 z-50 transition-all duration-500",

dark
  ? "bg-transparent"

  : "border-b border-black/5 bg-white/80 backdrop-blur-2xl"


 
  )}
>








        <div className="container-edit flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className={cn(
              "font-display text-xl tracking-[0.35em] transition-colors",
              "text-black"
            )}
          >
            AELIA
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-12 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[11px] uppercase tracking-[0.35em] transition-all duration-300",
                
                     "text-black/55 hover:text-black"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}

          <div
            className={cn(
              "flex items-center gap-6",
               "text-black"
            )}
          >

            <button
              onClick={() => setSearchOpen(true)}
              className="transition hover:scale-110 hover:text-[#C6A15B]"
            >
 
<Search
  size={18}
  className="text-black"
/>
            </button>

            <Link
              href="/wishlist"
              className="transition hover:scale-110 hover:text-[#C6A15B]"
            >
              <Heart size={18} />
            </Link>

            <Link
              href="/login"
              className="hidden transition hover:scale-110 hover:text-[#C6A15B] sm:block"
            >
              <User size={18} />
            </Link>

            <Link
              href="/cart"
              className="relative transition hover:scale-110 hover:text-[#C6A15B]"
            >
              <ShoppingBag size={18} />

              {cartCount > 0 && (
                <span
                  className="
                  absolute
                  -right-2
                  -top-2
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-[10px]
                  font-medium
                  text-white
                  "
                >
                  {cartCount}
                </span>
              )}
            </Link>

          </div>

        </div>
      </header>

      {/* SEARCH */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/45 backdrop-blur-xl"
          onClick={() => {
            setSearchOpen(false);
            setQuery("");
          }}
        >

                    <div
            onClick={(e) => e.stopPropagation()}
            className="
            mx-auto
            mt-6
            flex
            h-[92vh]
            w-[96%]
            max-w-7xl
            flex-col
            overflow-hidden
            rounded-[40px]
            bg-[#FAF8F5]
            shadow-[0_40px_120px_rgba(0,0,0,.18)]
            "
          >

            {/* TOP */}

 <div className="border-b border-neutral-200 px-5 py-5 lg:px-14">
              <div className="flex items-center gap-6">

                <Search
                  size={26}
                  className="text-neutral-400"
                />
<input
  autoFocus
  value={query}
  onChange={(e) =>
    setQuery(e.target.value)
  }
  placeholder="Search by fragrance, note or ingredient..."
  className="
  w-64
  bg-transparent
  text-xl
  font-light
  outline-none
  placeholder:text-neutral-400
  lg:w-96
  lg:text-2.5xl
  "
/>

                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setQuery("");
                  }}
                  className="
                  rounded-full
                  p-3
                  transition
                  hover:bg-neutral-200
                  "
                >
                  <X size={24} />
                </button>

              </div>

            </div>

            {/* BODY */}

            <div className="flex-1 overflow-y-auto">

              {query === "" ? (

                <div className="grid gap-16 p-8 lg:grid-cols-[320px_1fr] lg:p-14">

                  {/* LEFT */}

                  <div>

                    <div className="flex items-center gap-2">

                      <Sparkles
                        size={15}
                        className="text-[#C6A15B]"
                      />

                      <p className="text-xs tracking-[0.35em] text-neutral-500">
                        TRENDING
                      </p>

                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">

                    {TRENDING.map((item) => (

  <Link
    key={item.slug}
    href={`/product/${item.slug}`}
    onClick={() => {
      setSearchOpen(false);
      setQuery("");
    }}
    className="
    rounded-full
    border
    border-neutral-300
    bg-white
    px-5
    py-3
    text-sm
    transition-all
    duration-300
    hover:border-[#C6A15B]
    hover:text-[#C6A15B]
    hover:shadow-lg
    "
  >
    {item.name}
  </Link>

))}

                    </div>

                    {recent.length > 0 && (

                      <>

                        <div className="mt-12 flex items-center gap-2">

                          <Clock
                            size={15}
                            className="text-neutral-400"
                          />

                          <p className="text-xs tracking-[0.35em] text-neutral-500">
                            RECENT
                          </p>

                        </div>

                        <div className="mt-5 space-y-2">

                          {recent.map((item) => (

                            <button
                              key={item}
                              onClick={() => setQuery(item)}
                              className="
                              flex
                              w-full
                              items-center
                              rounded-xl
                              px-4
                              py-3
                              transition
                              hover:bg-white
                              "
                            >
                              {item}
                            </button>

                          ))}

                        </div>

                      </>

                    )}

                  </div>

                  {/* RIGHT */}

                  <div>

                    <h2 className="font-display text-5xl">
                      Discover your next signature scent
                    </h2>

                    <p className="mt-6 max-w-xl text-neutral-500 leading-8">
                      Explore our collection through
                      ingredients, fragrance families,
                      perfume names and olfactory notes.
                    </p>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                      {products.slice(0,6).map((product)=>(

                        <button
                          key={product.id}
                          onClick={()=>{
                            saveRecent(product.name);
                            setQuery(product.name);
                          }}
                          className="
                          group
                          rounded-[28px]
                          bg-white
                          p-6
                          text-left
                          transition-all
                          duration-500
                          hover:-translate-y-2
                          hover:shadow-2xl
                          "
                        >

                          <div className="flex justify-center">

                            <Image
                              src={product.image}
                              alt={product.name}
                              width={140}
                              height={180}
                              className="
                              h-48
                              w-auto
                              object-contain
                              transition
                              duration-500
                              group-hover:scale-110
                              "
                            />

                          </div>

                          <p className="mt-5 font-display text-2xl">
                            {product.name}
                          </p>

                          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-neutral-400">
                            {product.family}
                          </p>

                        </button>

                      ))}

                    </div>

                  </div>

                </div>

              ) : (

                                <div className="p-8 lg:p-14">

                  {results.length === 0 ? (

                    <div className="flex min-h-[500px] flex-col items-center justify-center">

                      <Search
                        size={54}
                        className="text-neutral-300"
                      />

                      <h2 className="mt-8 font-display text-4xl">
                        No fragrance found
                      </h2>

                      <p className="mt-4 max-w-md text-center leading-7 text-neutral-500">
                        Try searching by fragrance family,
                        ingredient or perfume name.
                      </p>

                    </div>

                  ) : (

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                      {results.map((product) => (

                        <Link
                          key={product.id}
                          href={`/product/${product.slug}`}
                          onClick={() => {
                            saveRecent(product.name);
                            setSearchOpen(false);
                            setQuery("");
                          }}
                          className="
                          group
                          rounded-[30px]
                          bg-white
                          p-6
                          transition-all
                          duration-500
                          hover:-translate-y-2
                          hover:shadow-[0_25px_80px_rgba(0,0,0,.12)]
                          "
                        >

                          <div className="flex justify-center">

                            <Image
                              src={product.image}
                              alt={product.name}
                              width={150}
                              height={200}
                              className="
                              h-56
                              w-auto
                              object-contain
                              transition-transform
                              duration-500
                              group-hover:scale-110
                              "
                            />

                          </div>

                          <div className="mt-6">

                            <p className="font-display text-2xl">
                              {product.name}
                            </p>

                            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-400">
                              {product.family}
                            </p>

                            <p className="mt-4 line-clamp-2 text-sm leading-6 text-neutral-500">
                              {product.tagline}
                            </p>

                            <div className="mt-6 flex items-center justify-between">

                              <span className="font-display text-xl">
                                {new Intl.NumberFormat(
                                  "en-US",
                                  {
                                    style: "currency",
                                    currency: "USD",
                                  }
                                ).format(product.price / 100)}
                              </span>

                              <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs uppercase tracking-[0.25em] text-neutral-500">
                                {product.concentration}
                              </span>

                            </div>

                          </div>

                        </Link>

                      ))}

                    </div>

                  )}

                </div>

              )}

            </div>

          </div>

        </div>
      )}

    </>
  );
}
