"use client";

import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-[520px] translate-y-3">

      {/* Heading */}
      <h1 className="font-serif text-[72px] leading-[0.9] tracking-[-0.04em] text-[64px] md:text-[76px] xl:text-[88px]">
        Get Your
        <br />
        Signature
        <br />
        Scent.
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-[430px] text-lg leading-8 text-neutral-600">
        Discover timeless Tom Ford fragrances crafted with luxurious
        ingredients and unforgettable character.
      </p>

      {/* Button */}
      <Link
        href="/collection"
        className="group mt-12 inline-flex items-center gap-4 rounded-full bg-[#171717] px-9 py-5 text-sm font-medium uppercase tracking-[0.32em] text-white transition-all duration-500 hover:scale-105 hover:bg-black"
      >
        Discover Collection

        <span className="transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </Link>

      
      

    </div>
  );
}