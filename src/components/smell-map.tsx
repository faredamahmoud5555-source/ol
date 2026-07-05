"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
};

export function SmellMap({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((current + 1) % images.length);
  }

  function prev() {
    setCurrent((current - 1 + images.length) % images.length);
  }

  return (
    <>
      {/* Button */}

      <button
        onClick={() => setOpen(true)}
        className="
        absolute
        right-10
        top-1/2
        -translate-y-1/2
        z-20
        h-28
        w-28
        rounded-full
        bg-[#191822]
        text-white
        uppercase
        tracking-[0.3em]
        text-xs
        shadow-xl
        hover:scale-105
        transition
        "
      >
        Click
        <br />
        To
        <br />
        Smell
      </button>

      {/* FULL SCREEN */}

      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/70">

          {/* Close */}

          <button
            onClick={() => setOpen(false)}
            className="
            absolute
            right-8
            top-8
            z-50
            rounded-full
            bg-white/10
            p-3
            text-white
            hover:bg-white/20
            "
          >
            <X size={26} />
          </button>

          {/* Left */}

          <button
            onClick={prev}
            className="
            absolute
            left-8
            top-1/2
            -translate-y-1/2
            z-40
            rounded-full
            bg-white
            p-4
            shadow-xl
            "
          >
            <ChevronLeft />
          </button>

          {/* Right */}

          <button
            onClick={next}
            className="
            absolute
            right-8
            top-1/2
            -translate-y-1/2
            z-40
            rounded-full
            bg-white
            p-4
            shadow-xl
            "
          >
            <ChevronRight />
          </button>

          {/* Image */}

          <div className="flex h-screen items-center justify-center p-20">

            <div className="relative h-full w-full max-w-6xl">

              <Image
                src={images[current]}
                alt=""
                fill
                className="object-contain"
              />

            </div>

          </div>

        </div>
      )}
    </>
  );
}